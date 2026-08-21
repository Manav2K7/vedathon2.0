import * as React from "react"
import { cn } from "../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost-purple' | 'ghost-green';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-headline uppercase font-bold text-sm tracking-widest px-6 py-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-container disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary-container text-white hover:bg-secondary-container hover:shadow-[0_0_20px_rgba(232,24,31,0.4)]": variant === 'primary',
            "border border-primary-container/50 text-primary-container hover:bg-primary-container/10 hover:border-primary-container": variant === 'ghost-purple',
            "border border-tertiary-container/50 text-tertiary-container hover:bg-tertiary-container/10 hover:border-tertiary-container": variant === 'ghost-green',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
