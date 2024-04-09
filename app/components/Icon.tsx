import spritesheetHref from "~/assets/icons/spritesheet.svg?url";

type IconProps = React.HTMLAttributes<SVGElement> & { name: string };

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg {...props}>
      <use href={`${spritesheetHref}#${name}`} />
    </svg>
  );
}
