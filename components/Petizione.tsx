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


export default function Petizione({ title, children }: { title: string, children?: React.ReactNode }) {
  return (
      <div className="flex flex-col">
        <p className="text-lg font-medium">{ title }</p>
        <p className="text-md text-justify">
          { children }
        </p>
        <div className="w-full flex flex-row justify-end">
          <Dialog>
            <DialogTrigger className={ cn(buttonVariants({ variant: 'default' }), "font-bold") }>
              Firma
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Firma questa petizione inserendo i tuoi dati</DialogTitle>
                <DialogDescription>
                  <FormPetizione/>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

        </div>
      </div>
  )
}