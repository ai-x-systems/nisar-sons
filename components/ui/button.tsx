import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-body font-medium text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-dark text-white hover:bg-brand-hover shadow-[0_1px_0_rgba(0,0,0,0.08)]",
        outline:
          "border border-charcoal/20 text-charcoal bg-transparent hover:border-charcoal hover:bg-charcoal hover:text-white",
        ghost: "text-charcoal hover:bg-fog",
        light: "bg-white text-charcoal hover:bg-fog border border-line",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-12 px-8 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface CommonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps
  extends CommonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> {
  href?: undefined;
}

export interface ButtonLinkProps
  extends CommonProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> {
  href: string;
}

type PolymorphicButtonProps = ButtonProps | ButtonLinkProps;

/**
 * Renders an <a> when `href` is provided (proper semantic navigation for
 * links — required for keyboard/SEO correctness) and a <button> otherwise.
 */
const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PolymorphicButtonProps
>((props, ref) => {
  const { className, variant, size, ...rest } = props;
  const classes = cn(buttonVariants({ variant, size, className }));

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as Omit<ButtonLinkProps, keyof CommonProps> & {
      href: string;
    };
    return (
      <a
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...(anchorRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      type="button"
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
