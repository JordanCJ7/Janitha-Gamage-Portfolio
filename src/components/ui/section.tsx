import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
}

export function Section({ title, className, children, ...props }: SectionProps) {
  return (
    <section className={cn("group/section flex flex-col gap-y-3 py-5 print:py-3", className)} {...props}>
      {title && (
        <div className="flex items-center">
          <h2 className="relative text-xl font-bold tracking-tight text-foreground print:text-lg">
            <span className="relative z-10">{title}</span>
            <span 
              className="absolute bottom-0 left-0 right-0 h-1.5 bg-red-500/15 dark:bg-red-500/20 -z-0 origin-left scale-x-0 transition-transform duration-350 ease-out group-hover/section:scale-x-100"
              style={{ clipPath: "polygon(2% 10%, 98% 5%, 100% 90%, 0% 95%)" }}
            />
          </h2>
        </div>
      )}
      <div className="flex flex-col gap-y-3">{children}</div>
    </section>
  );
}
