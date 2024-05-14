"use client";
import {useState, useEffect} from "react";
import Image from "next/image";
import {ref, getDownloadURL} from "firebase/storage";
import {storage} from "@/lib/firebase";
import {Skeleton} from "@/components/ui/skeleton";
import {AspectRatio} from "@/components/ui/AspectRatio";
import {cn} from "@/lib/utils";
import * as React from "react";

export interface FirebaseImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    path: string;
    width?: number;
    height?: number;
    className?: string;
}

export default function FirebaseImage({path, className, ...props}: FirebaseImageProps) {
    const [url, setUrl] = useState<string | null>(null);


    useEffect(() => {
        const getImageUrl = async () => {
            try {
                const imageUrl = await getDownloadURL(ref(storage, `gs://caffeina-politica-9e4b0.appspot.com${path}`));
                setUrl(imageUrl);
            } catch (error) {
                console.error(error);
                switch (error) {
                    case 'storage/object-not-found':
                        console.log("Object not found");
                        break;
                    case 'storage/unauthorized':
                        console.log("Unauthorized");
                        break;
                    case 'storage/canceled':
                        console.log("Canceled");
                        break;
                    case 'storage/unknown':
                        console.log("Unknown");
                        break;
                    default:
                        console.log("Errore sconosciuto");
                }
            }
        };

        getImageUrl();
    }, [path]);

    if (url === null) {
        return <Skeleton className={cn("rounded-md aspect-video", className)}/>;
    }

    return (
        <Image src={url} alt={path}
               className={cn("rounded-md aspect-video", className)} {...props}
               width={props.width || 1920}
               height={props.height || 1080}
        />
    );
}
