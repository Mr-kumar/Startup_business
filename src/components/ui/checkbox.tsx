import * as React from "react";
/* eslint-disable */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        ref={ref}
        className={className + " h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"}
        {...props}
      />
    );
  }
);
Checkbox.displayName = "Checkbox";
