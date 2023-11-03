import React, { FC } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NoteProps {
	number: string;
	children: React.ReactNode;
}

export function Note ({ number, children }: NoteProps){
	return (
		<>
			<a href={`#${number}`} id={`${number}.${number}`} className="border-b-[1.5px] border-zinc-600 hover:border-zinc-800 font-semibold text-zinc-600 hover:text-zinc-800">
				{children}<sup>{number}</sup>
			</a>
		</>
	)
}
