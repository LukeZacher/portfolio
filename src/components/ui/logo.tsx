import type { ComponentProps } from "react";

export function Logo(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" {...props}>
      <rect width="512" height="512" rx="64" className="fill-surface" />
      <path
        className="fill-accent"
        d="M88 0H448A64 64 0 0 1 512 64V96L184 424H88V392L384 96H88Z"
      />
      <path
        className="fill-fg"
        d="M64 0H96V416H512V448A64 64 0 0 1 448 512H64A64 64 0 0 1 0 448V64A64 64 0 0 1 64 0Z"
      />
    </svg>
  );
}
