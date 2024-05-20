import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";
import { formPetizioneSchema } from "@/components/FormPetizione";
import { db } from "@/lib/db";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export async function hasVoted(proposalVote: z.infer<typeof formPetizioneSchema>, petitionId: number) {
    const existingVote = await db.proposalVote.findFirst({
        where: {
            proposalId: petitionId,
            email: proposalVote.email,
        },
    });

    return !!existingVote;
}