"use client"
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/Button";
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils";
import { signProposal } from "@/lib/actions";
import toast from "react-hot-toast";

export const formPetizioneSchema = z.object({
    name: z.string().min(2).max(50),
    surname: z.string().min(2).max(50),
    email: z.string().email(),
    age: z.coerce.number().min(16),
    signAll: z.boolean(),
})

type FormPetizioneProps = {
    petitionId: number;
    className?: string;
    setIsOpen?: (isOpen: boolean) => void;
}


export function FormPetizione({ petitionId, className, setIsOpen }: FormPetizioneProps) {
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const form = useForm<z.infer<typeof formPetizioneSchema>>({
        resolver: zodResolver(formPetizioneSchema),
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            signAll: true,
        },
    })

    const onSubmit = async (values: z.infer<typeof formPetizioneSchema>) => {
        setIsSubmitting(true);
        try {
            await signProposal(values, petitionId);
            form.reset();
            toast.success('Firmato con successo!');
            setIsOpen?.(false);
        } catch (error) {
            toast.error('Errore durante la firma');
            console.error("Error signing proposal:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form { ...form }>
            <form onSubmit={ form.handleSubmit(onSubmit) } className={ cn("space-y-3", className) }>
                <FormField
                    control={ form.control }
                    name="name"
                    render={ ({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Mario" { ...field }/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    ) }
                />

                <FormField
                    control={ form.control }
                    name="surname"
                    render={ ({ field }) => (
                        <FormItem>
                            <FormLabel>Cognome</FormLabel>
                            <FormControl>
                                <Input placeholder="Rossi" { ...field } />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    ) }
                />

                <FormField
                    control={ form.control }
                    name="email"
                    render={ ({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="mario.rossi@gmail.com" { ...field } />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    ) }
                />

                <FormField
                    control={ form.control }
                    name="age"
                    render={ ({ field }) => (
                        <FormItem>
                            <FormLabel>Età</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="23" { ...field } />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    ) }
                />
                <div className="w-full flex flex-row justify-between items-center">


                    <FormField
                        control={ form.control }
                        name="signAll"
                        render={ ({ field }) => (
                            <FormItem className="flex flex-row items-center gap-3 space-y-0">
                                <FormControl className="m-auto">
                                    <Switch checked={field.value}
                                            onCheckedChange={field.onChange}/>
                                </FormControl>

                                <FormLabel className="">Firma anche le altre</FormLabel>

                                {/*<FormMessage/>*/}
                            </FormItem>
                        ) }
                    />

                    <Button type="submit" isLoading={isSubmitting}>
                        {isSubmitting ? "Invio..." : "Firma"}
                    </Button>
                </div>
            </form>
        </Form>
    )
}