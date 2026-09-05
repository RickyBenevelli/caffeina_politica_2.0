import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Uses the native CSS aspect-ratio property. Replaces the Radix component,
 * which needed client-side JS for the same result.
 */
export function AspectRatio({
  ratio = 1,
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { ratio?: number }) {
  return (
    <div
      className={cn("relative w-full", className)}
      style={{ aspectRatio: String(ratio), ...style }}
      {...props}
    />
  );
}
