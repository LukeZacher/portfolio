import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

const characters = ["營", "業", "中"] as const;

export function NeonSign({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative flex pr-3.5", className)}
      {...props}
    >
      <Bracket className="top-[18%]" />
      <Bracket className="bottom-[18%]" />

      <div className="relative flex flex-col items-center gap-3.5 rounded-md border border-line bg-linear-to-b from-surface to-canvas px-5.5 pt-6.5 pb-4.5 shadow-neon-panel">
        <span className="absolute inset-1.5 rounded-sm border-[1.5px] border-neon shadow-neon-tube motion-safe:animate-neon-flicker" />

        <p
          lang="zh-Hant"
          className="flex flex-col items-center gap-1.5 font-cjk text-5xl leading-none font-black text-neon text-shadow-neon motion-safe:animate-neon-flicker"
        >
          {characters.map((character) => (
            <span key={character}>{character}</span>
          ))}
        </p>

        <p className="font-mono text-xs tracking-widest text-fg-subtle">OPEN</p>
      </div>
    </div>
  );
}

function Bracket({ className }: { className: string }) {
  return (
    <span
      className={cn(
        "absolute right-0 h-2 w-4 rounded-r-xs border border-l-0 border-line bg-surface",
        className,
      )}
    />
  );
}
