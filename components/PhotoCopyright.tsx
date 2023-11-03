import Link from 'next/link';
import React, { FC } from 'react'

interface PhotoCopyrightProps {
  children: React.ReactNode;
  link?: string,
  alt?: string,
}

export function PhotoCopyright ({ children, ...props }:PhotoCopyrightProps) {
  return (
    <div className='w-full pt-2'>
        <p className='text-center text-zinc-500 text-sm'>
          &copy; {children} {props.link && 
                              <Link 
                                href={props?.link} 
                                className='border-b-[1.5px] border-zinc-400 font-medium hover:border-zinc-500 hover:text-zinc-600'>
                                  {props?.alt}
                                </Link>}
        </p>
    </div>
  )
}