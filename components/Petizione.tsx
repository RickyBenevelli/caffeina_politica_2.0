import {Button, buttonVariants} from "@/components/ui/Button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {FormPetizione} from "@/components/FormPetizione";
import {cn} from "@/lib/utils";

export default function Petizione () {
    return (
        <div className="flex flex-col">
            <p className="text-lg font-medium">Questo è il titolo della questione: </p>
            <p className="text-md text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ipsum vitae ante tristique
                fermentum. Proin magna massa, auctor auctor mi vel, tristique sollicitudin libero. Curabitur laoreet
                rutrum accumsan. Suspendisse at metus ac risus pretium faucibus. Quisque rhoncus elit nec consequat
                lobortis. Vivamus ut lacus eget nisi malesuada auctor id id felis. Praesent gravida id mauris non
                pharetra. Etiam cursus, risus id ullamcorper hendrerit, arcu eros efficitur ex, et tempor mi mi et
                velit. Praesent at sem vulputate, sagittis nisi nec, ultricies quam. Donec quis sapien quis magna
                lobortis tristique id eget ligula. Duis dignissim malesuada velit. Vestibulum at dapibus eros, ut cursus
                dui. Suspendisse potenti. Sed posuere convallis massa, id interdum metus vehicula vel. Nam eu nunc
                mollis, tincidunt lacus a, gravida dolor.

                Quisque erat lacus, tincidunt a leo sed, rutrum facilisis orci. Cras eu nisi facilisis, commodo libero
                sed, auctor neque. Aliquam sit amet ipsum ex. Nam id dolor vitae turpis porta finibus. Donec in eros
                neque. Integer quis dolor eget justo finibus eleifend quis id augue. Suspendisse consectetur bibendum
                aliquet. Etiam venenatis accumsan ante, ut ornare magna tempor in.

                Fusce suscipit leo et diam lacinia, nec ullamcorper justo iaculis. Phasellus dapibus condimentum lacus
                et ultrices. Sed semper tellus non pretium maximus. Suspendisse id mi ut dui accumsan ultricies. Nullam
                mattis nec purus sed tincidunt. Etiam felis dolor, congue ut pharetra vehicula, tempor id lacus. Etiam
                nec metus orci. Praesent iaculis sed augue ut hendrerit. Ut malesuada interdum cursus. Fusce sed tellus
                et sapien lobortis gravida. Praesent semper tristique posuere.
            </p>
            <div className="w-full flex flex-row justify-end">
                <Dialog>
                    <DialogTrigger className={cn(buttonVariants({ variant: 'default' }), "font-bold")}>
                        Firma
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Firma questa petizione inserendo i tuoi dati</DialogTitle>
                            <DialogDescription>
                                <FormPetizione />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>
        </div>
    )
}