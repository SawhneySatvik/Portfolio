import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
  {
    variants: {
      variant: {
        // Filled button (primary action)
        filled: "bg-accent text-primary hover:bg-accent/90 border border-accent shadow-sm hover:shadow-md dark:hover:bg-accent/90 dark:hover:text-primary-light",
        
        // Inline button (secondary action)
        inline: "border border-accent bg-transparent text-accent hover:bg-accent/10 shadow-sm hover:shadow-md",
        
        // Legacy variants for backward compatibility
        default: "bg-accent text-primary hover:bg-accent/90 border border-accent shadow-sm hover:shadow-md dark:hover:bg-accent/90 dark:hover:text-primary-light",
        primary: "bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-md",
        outline: "border border-accent bg-transparent text-accent hover:bg-accent/10 shadow-sm hover:shadow-md",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-full px-3 text-sm",
        lg: "h-11 rounded-full px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
