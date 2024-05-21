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


export default function Petizione({ id, title, children }: { id: number, title: string, children?: React.ReactNode }) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="flex flex-col py-5">
            <p className="text-xl font-bold">{ title }</p>
            <p className="text-md text-justify">
                { children }
            </p>
            <div className="w-full flex flex-row justify-end">
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger className={ cn(buttonVariants({ variant: 'default' }), "font-bold") }>
                        Firma
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Firma questa proposta inserendo i tuoi dati</DialogTitle>
                            <DialogDescription>
                                <FormPetizione className="py-5" petitionId={id} setIsOpen={setIsOpen}/>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>
        </div>
    )
}