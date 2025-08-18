import * as React from "react";

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  return <div className="relative inline-block text-left">{children}</div>;
}

export function DropdownMenuTrigger({ asChild, children }: { asChild?: boolean; children: React.ReactNode }) {
  // If asChild, just render children directly (for button as trigger)
  return asChild ? <>{children}</> : <button type="button">{children}</button>;
}

export function DropdownMenuContent({ children, align = "end", className = "" }: { children: React.ReactNode; align?: "start" | "end"; className?: string }) {
  // Simple absolute dropdown, align right by default
  return (
    <div className={`absolute z-20 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${align === "end" ? "right-0" : "left-0"} ${className}`} role="menu">
      {children}
    </div>
  );
}

export function DropdownMenuItem({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 ${className}`}
      role="menuitem"
      tabIndex={0}
      {...props}
    >
      {children}
    </div>
  );
}
