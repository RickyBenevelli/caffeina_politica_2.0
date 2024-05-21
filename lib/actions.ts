'use server';

import { db } from "@/lib/db";
import { User, Role } from "@prisma/client";
import { z } from "zod";
import { formPetizioneSchema } from "@/components/FormPetizione";
import { hasVoted } from "@/lib/utils";

export async function increment(slug: string) {
    const data = await db.views.create({ data: { slug: slug } });
    return;
}

export async function clearViews() {
    const data = await db.views.deleteMany();
    return;
}

export async function adminToMe() {
    const data = await db.user.updateMany({
        where: {
            email: "rickybenevelli@gmail.com"
        },
        data: {
            role: "ADMIN"
        }
    });
    return;
}

export async function changeRole(user: User, role: Role) {
    const data = await db.user.updateMany({
        where: {
            id: user.id
        },
        data: {
            role: role
        }
    });
}

export async function signProposal(proposalVote: z.infer<typeof formPetizioneSchema>, petitionId: number) {
    if (proposalVote.signAll || petitionId === 0) {

        const allProposalIds = [1, 2, 3];
        let signed = 0;
        for (let id of allProposalIds) {
            if (await hasVoted(proposalVote, id)) {
                continue;
            }
            signed++;
            await db.proposalVote.create({
                data: {
                    proposalId: id,
                    name: proposalVote.name,
                    surname: proposalVote.surname,
                    email: proposalVote.email,
                    age: proposalVote.age,
                }
            });
        }
        if (signed === 0) {
            throw new Error("Già votato");
        }
    } else {
        if (await hasVoted(proposalVote, petitionId)) {
            throw new Error("Già votato");
        }

        await db.proposalVote.create({
            data: {
                proposalId: petitionId,
                name: proposalVote.name,
                surname: proposalVote.surname,
                email: proposalVote.email,
                age: proposalVote.age,
            }
        });
    }
}