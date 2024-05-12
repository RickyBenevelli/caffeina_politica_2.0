"use client"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"


import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/Button";

const formPetizioneSchema = z.object({
    name: z.string().min(2).max(50),
    surname: z.string().min(2).max(50),
    email: z.string().email(),
    age: z.number().int().max(100)
})


export function FormPetizione() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formPetizioneSchema>>({
        resolver: zodResolver(formPetizioneSchema),
        defaultValues: {
            name: "",
            surname: "",
            email: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formPetizioneSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Mario" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="surname"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Cognome</FormLabel>
                            <FormControl>
                                <Input placeholder="Rossi" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="mario.rossi@gmail.com" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="age"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Età</FormLabel>
                            <FormControl>
                                <Input placeholder="23" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit">Firma</Button>
            </form>
        </Form>
    )
}