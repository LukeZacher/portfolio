import Link from "next/link";
import type { ComponentProps } from "react";

import {
  buttonStyles,
  type ButtonVariant,
} from "@/components/ui/button-styles";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
};

export function ButtonLink({ variant, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonStyles({ variant, className })} {...props} />;
}
