import * as React from "react"
import { cn } from "../lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  faction?: 'orange' | 'purple' | 'green';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, faction = 'orange', children, ...props }, ref) => {
    
    const factionClasses = {
      orange: "border-primary-container text-primary-container bg-primary-container/10",
      purple: "border-secondary-container text-secondary-container bg-secondary-container/10",
      green: "border-tertiary-container text-tertiary-container bg-tertiary-container/10",
    }[faction];

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center border px-2 py-0.5 text-xs font-mono tracking-widest uppercase rounded-sm",
          factionClasses,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Badge.displayName = "Badge"

export { Badge }
