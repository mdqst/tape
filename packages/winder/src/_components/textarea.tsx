import { forwardRef, useId } from "react";
import { tw } from "../tw";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, ...props }, ref) => {
    const id = useId();
    return (
      <div className="grid w-full items-center gap-2">
        {label ? (
          <label
            htmlFor={id}
            className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        ) : null}
        <textarea
          className={tw(
            "flex min-h-[80px] w-full rounded-custom border border-custom bg-transparent px-3 py-2 text-sm transition-colors placeholder:text-muted focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export { Textarea };
