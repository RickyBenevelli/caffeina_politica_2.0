"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import { FormPetizione } from "@/components/FormPetizione";
import React from "react";

export default function PetizioneDialog({ id, buttonText }: { id:number, buttonText?: string }) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <Dialog open={ isOpen } onOpenChange={ setIsOpen }>
            <DialogTrigger className={ cn(buttonVariants({ variant: 'default' }), "font-bold") }>
                { buttonText ? buttonText : "Firma" }
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{ id === 0 ? "Firma tutto" : "Firma questa proposta" }</DialogTitle>
                    <DialogDescription>
                        <FormPetizione className="pt-5" petitionId={ id } setIsOpen={ setIsOpen }/>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}