import {
  FormProps,
  Form as AriaForm,
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  FieldError as AriaFieldError,
  FieldErrorProps,
  Text,
  TextProps,
} from "react-aria-components";

import { cn } from "~/lib/utils";
import { Label } from "./label";
import { Input } from "./input";

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
}

export function Form({ className, ...props }: FormProps) {
  return (
    <AriaForm {...props} className={cn("flex flex-col gap-4", className)} />
  );
}

export function FieldError({ className, ...props }: FieldErrorProps) {
  return (
    <AriaFieldError
      {...props}
      className={cn("text-sm font-medium text-destructive", className)}
    />
  );
}

export function Description({ className, ...props }: TextProps) {
  return (
    <Text
      {...props}
      slot="description"
      className={cn("text-sm text-muted-foreground", className)}
    />
  );
}

export function FormField({
  label,
  description,
  className,
  ...props
}: TextFieldProps) {
  return (
    <AriaTextField {...props} className={cn("flex flex-col gap-1", className)}>
      {label && <Label>{label}</Label>}
      <Input />
      {description && <Description>{description}</Description>}
      <FieldError />
    </AriaTextField>
  );
}
