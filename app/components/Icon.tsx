import spritesheetHref from "~/assets/icons/spritesheet.svg?url";
import { cn } from "~/lib/utils";

type IconProps = React.HTMLAttributes<SVGElement> & { name: string };

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg className={cn("inline self-center", className)} {...props}>
      <use href={`${spritesheetHref}#${name}`} />
    </svg>
  );
}
