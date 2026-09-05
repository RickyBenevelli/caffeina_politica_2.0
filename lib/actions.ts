"use server";

import type { Role } from "@prisma/client";
import { z } from "zod";

import { db } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { formPetizioneSchema, PROPOSAL_IDS } from "@/lib/validations";

// --- public actions --------------------------------------------------------

const slugSchema = z.string().regex(/^[a-z0-9-]{1,120}$/);

export async function increment(slug: string) {
  const parsed = slugSchema.safeParse(slug);
  if (!parsed.success) return;
  await db.views.create({ data: { slug: parsed.data } });
}

async function hasVoted(email: string, petitionId: number) {
  const existingVote = await db.proposalVote.findFirst({
    where: { proposalId: petitionId, email },
    select: { voteId: true },
  });
  return !!existingVote;
}

export async function signProposal(input: unknown, petitionId: unknown) {
  // Never trust client-side validation: re-parse everything on the server.
  const proposalVote = formPetizioneSchema.parse(input);
  const id = z.coerce.number().int().min(0).max(3).parse(petitionId);

  const vote = {
    name: proposalVote.name,
    surname: proposalVote.surname,
    email: proposalVote.email,
    age: proposalVote.age,
  };

  if (proposalVote.signAll || id === 0) {
    let signed = 0;
    for (const proposalId of PROPOSAL_IDS) {
      if (await hasVoted(vote.email, proposalId)) continue;
      signed++;
      await db.proposalVote.create({ data: { proposalId, ...vote } });
    }
    if (signed === 0) throw new Error("Già votato");
    return;
  }

  if (await hasVoted(vote.email, id)) throw new Error("Già votato");
  await db.proposalVote.create({ data: { proposalId: id, ...vote } });
}

// --- admin-only actions ----------------------------------------------------

export async function clearViews() {
  await requireAdmin();
  await db.views.deleteMany();
}

export async function changeRole(userId: string, role: Role) {
  const admin = await requireAdmin();
  const id = z.string().min(1).parse(userId);
  if (id === admin.id && role !== "ADMIN") {
    throw new Error("Non puoi rimuovere il tuo stesso ruolo di ADMIN");
  }
  await db.user.update({ where: { id }, data: { role } });
}
