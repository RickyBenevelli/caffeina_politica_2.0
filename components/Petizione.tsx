"use client";
import { Button, buttonVariants } from "@/components/ui/Button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FormPetizione } from "@/components/FormPetizione";
import { cn } from "@/lib/utils";
import React from "react";
import toast from "react-hot-toast";
import PetizioneDialog from "@/components/PetizioneDialog";


export default function Petizione({ id, title, children, buttonText, className }: {
    id: number,
    title: string,
    children?: React.ReactNode,
    buttonText?: string,
    className?: string,
}) {
    const [isHovered, setIsHovered] = React.useState(false);

    const generateIdFromTitle = (title: string) => {
        return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };

    const handleTitleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        const hash = generateIdFromTitle(title);
        const url = `${ window.location.origin }${ window.location.pathname }#${ hash }`;
        window.location.hash = hash;

        navigator.clipboard.writeText(url).then(() => {
            toast.success('URL copiato negli appunti!');
        }).catch(err => {
            console.error('Errore durante la copia dell\'URL negli appunti:', err);
        });
    };

    const idString = generateIdFromTitle(title);

    return (
        <div className={ cn("flex flex-col pt-8", className) } id={ idString }>
            <div
                className="relative group"
                onMouseEnter={ () => setIsHovered(true) }
                onMouseLeave={ () => setIsHovered(false) }
            >
                <p className="text-xl font-bold cursor-pointer" onClick={ handleTitleClick }>
                    { title }
                    { isHovered && <span className="ml-2 text-gray-500">#</span> }
                </p>
            </div>
            <p className="text-md text-justify py-2">
                { children }
            </p>
            <div className="w-full flex flex-row justify-end pt-2">
                <PetizioneDialog id={ id } buttonText={ buttonText }/>
            </div>
        </div>
    )
}