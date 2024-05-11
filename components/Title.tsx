import React from "react";

import { cn } from "@/lib/utils";

export default function Title({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-4xl md:text-5xl font-extrabold text-black text-center my-6",
        className
      )}
      {...props}
    >
      Caffeina Politica
    </h1>
  );
}
