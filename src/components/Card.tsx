import * as React from "react"
import { cn } from "../lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  faction?: 'orange' | 'purple' | 'green';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, faction = 'orange', children, ...props }, ref) => {
    
    const bracketColor = {
      orange: "border-primary-container",
      purple: "border-secondary-container",
      green: "border-tertiary-container",
    }[faction];

    return (
      <div
        ref={ref}
        className={cn(
          "relative bg-surface-container border border-red-900/60 p-6 group backdrop-blur-sm",
          className
        )}
        {...props}
      >
        {/* L-shaped brackets — distressed red */}
        <div className={cn("absolute top-0 left-0 w-2 h-2 border-t border-l opacity-80", bracketColor)} />
        <div className={cn("absolute top-0 right-0 w-2 h-2 border-t border-r opacity-80", bracketColor)} />
        <div className={cn("absolute bottom-0 left-0 w-2 h-2 border-b border-l opacity-80", bracketColor)} />
        <div className={cn("absolute bottom-0 right-0 w-2 h-2 border-b border-r opacity-80", bracketColor)} />
        
        {children}
      </div>
    )
  }
)
Card.displayName = "Card"

export { Card }
