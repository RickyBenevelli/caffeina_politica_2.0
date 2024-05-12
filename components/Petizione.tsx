import {Button} from "@/components/ui/Button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {FormPetizione} from "@/components/FormPetizione";

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

                Nulla viverra purus sit amet lectus tincidunt, in ornare mauris viverra. Etiam a eros lobortis,
                tincidunt ipsum non, cursus erat. Praesent non erat sit amet felis dignissim sollicitudin sit amet in
                ipsum. Donec viverra mattis nunc vitae lobortis. Vivamus fringilla massa at orci vulputate, sit amet
                faucibus ligula blandit. Phasellus maximus elementum erat eu vehicula. Praesent molestie enim eu diam
                egestas, nec viverra massa lobortis. Duis posuere diam non commodo tristique. Duis venenatis dolor
                ipsum, eu sagittis nibh fermentum imperdiet. Nulla ultrices urna quis tortor facilisis, vitae placerat
                ante tincidunt. In hac habitasse platea dictumst. Etiam sed dictum felis.
            </p>
            <div className="w-full flex flex-row justify-end">
                <Dialog>
                    <DialogTrigger className="bg-green-800 p-2 px-4 text-white rounded-md">
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