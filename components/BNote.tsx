import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface BNoteProps {
  number: string;
  children: React.ReactNode;
}

export function BNote({ number, children }: BNoteProps) {
  return (
    <div className="py-1 my-2 flex items-start space-x-3">
      <span>{number}.</span>
      <a href={`#${number}.${number}`} id={`${number}`}>
        {children}
      </a>
    </div>
  );
}
