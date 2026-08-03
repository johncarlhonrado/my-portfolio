import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type LinkButtonProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

/** Reusable pill button. Renders an <a> when `href` is given, otherwise a <button>. */
export default function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", children, className, ...rest } = props;
  const classes = cn("btn", variant === "primary" ? "btn-primary" : "btn-secondary", className);

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
