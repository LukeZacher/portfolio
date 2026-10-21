import type { ComponentProps } from "react";

import {
  buttonStyles,
  type ButtonVariant,
} from "@/components/ui/button-styles";

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
};

export function Button({
  variant,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, className })}
      {...props}
    />
  );
}
