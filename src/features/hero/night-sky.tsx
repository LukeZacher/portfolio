import { shootingStars, stars, type StarSize } from "@/features/hero/sky";
import { cn } from "@/lib/cn";

const starSizeStyles = {
  sm: "size-px [--star-opacity:0.5]",
  md: "size-0.5 [--star-opacity:0.7]",
  lg: "size-[2.5px] [--star-opacity:0.9] shadow-star",
} satisfies Record<StarSize, string>;

export function NightSky() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="absolute inset-0 bg-radial-[ellipse_55%_50%_at_95%_80%] from-haze/15 to-transparent mask-[linear-gradient(to_bottom,black_55%,transparent)]" />

      <div className="hidden lg:block">
        {stars.map((star) => (
          <span
            key={`${star.x}-${star.y}`}
            className={cn(
              "absolute rounded-full bg-fg opacity-(--star-opacity) motion-safe:animate-twinkle",
              starSizeStyles[star.size],
            )}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDuration: `${star.duration}s`,
              animationDelay: `-${star.delay}s`,
            }}
          />
        ))}

        {shootingStars.map((shootingStar) => (
          <span
            key={`${shootingStar.x}-${shootingStar.y}`}
            className="absolute h-px w-36 origin-left bg-linear-to-r from-fg/90 to-transparent opacity-0 motion-safe:animate-shooting-star"
            style={{
              left: `${shootingStar.x}%`,
              top: `${shootingStar.y}%`,
              animationDuration: `${shootingStar.interval}s`,
              animationDelay: `${shootingStar.delay}s`,
            }}
          >
            <span className="absolute -top-px -left-px size-0.75 rounded-full bg-fg shadow-star" />
          </span>
        ))}
      </div>
    </div>
  );
}
