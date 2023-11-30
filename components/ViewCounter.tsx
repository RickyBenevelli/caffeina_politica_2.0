'use client';

import { useEffect } from 'react';
import { increment } from '@/lib/actions';

export default function ViewCounter({
  slug,
  count,
  trackView,
  show = true
}: {
  slug: string;
  count: number; 
  trackView?: boolean;
  show?: boolean;
}) {

  useEffect(() => {
    if (trackView === true && process.env.NODE_ENV !== "production") {
      increment(slug);
    }
  }, []);

  if (show === false){
    return null;
  }
  
  return (
    <p className="text-neutral-600 dark:text-neutral-400">
      {`${count} views`}
    </p>
  );
}