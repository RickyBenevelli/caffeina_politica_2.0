"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";
import {Skeleton} from "@/components/ui/skeleton";
import {AspectRatio} from "@/components/ui/AspectRatio";

type FirebaseImageProps = {
    path: string;
}

export default function FirebaseImage({ path }: FirebaseImageProps) {
    const [url, setUrl] = useState<string | null>(null);

    useEffect(()  => {
        getDownloadURL(ref(storage, "assange.jpeg"))
            .then((url) => {
                console.log("QUI")
                // setUrl(url);
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    const blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();

                setUrl(url);
            })
            .catch((error) => {
                console.log("ERRORE")
                console.error(error);
                switch (error.code) {
                    case 'storage/object-not-found':
                        console.log("Object not found")
                        break;
                    case 'storage/unauthorized':
                        console.log("Unauthorized")
                        break;
                    case 'storage/canceled':
                        console.log("Canceled")
                        break;


                    case 'storage/unknown':
                        console.log("Unknown")
                        break;
                }
            });
    }, [path]);
    if (url === null) {
        return <Skeleton className="aspect-video w-full" />;
    }

    return (
        <AspectRatio ratio={16 / 9} className="w-full">
            <Image src={url} alt={path} fill className="rounded-md" />
        </AspectRatio>
    )
}