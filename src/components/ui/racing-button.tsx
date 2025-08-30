import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const racingButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-speed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        hero: "gradient-primary text-primary-foreground shadow-racing hover:shadow-speed hover:scale-105",
        speed: "gradient-speed text-white shadow-lg hover:shadow-neon hover:scale-105",
        metallic: "gradient-metallic text-foreground border border-border hover:bg-secondary/80",
        neon: "bg-neon-green text-black hover:bg-neon-green/90 shadow-neon animate-pulse-neon",
        outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "hero",
      size: "default",
    },
  }
)

export interface RacingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof racingButtonVariants> {
  asChild?: boolean
}

const RacingButton = React.forwardRef<HTMLButtonElement, RacingButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(racingButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
RacingButton.displayName = "RacingButton"

export { RacingButton, racingButtonVariants }