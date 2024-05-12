import Title from "@/components/Title";
import {Button} from "@/components/ui/Button";
import Petizione from "@/components/Petizione";

export default function Firma () {
    return (
        <main className="w-full max-w-5xl min-h-screen px-6">
            <Title/>
            <h2 className="text-2xl font-medium text-center">
                Lo spazio di dibattito pubblico
            </h2>
            <h2 className="text-2xl font-medium text-center">
                Da giovani per giovani
            </h2>
            <div className="w-full mt-10">
                <Petizione />
                <Petizione />

            </div>
            <div className="w-full py-10">

            </div>
        </main>
    )
}