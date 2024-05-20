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

// export async function makeThisAdmin(user:User){
//   const data = await db.user.updateMany({
//     where: {
//       id: user.id
//     },
//     data: {
//       role: "ADMIN"
//     }
//   });
//   return;
// }

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
    if (proposalVote.signAll) {

        const allProposalIds = [1, 2, 3];

        for (let id of allProposalIds) {
            if(await hasVoted(proposalVote, id)){
                continue;
            }
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
    } else {
        if(await hasVoted(proposalVote, petitionId)){
            return;
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