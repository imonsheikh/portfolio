import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full rounded-md border border-white/10 focus:border-lightSky font-light bg-bodyColor px-4 py-2 text-base placeholder:text-white/40 placeholder:text-sm outline-none resize-none",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };


