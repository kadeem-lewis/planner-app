import {
  GridList as AriaGridList,
  GridListItem as AriaGridListItem,
  type GridListProps,
  type GridListItemProps,
} from "react-aria-components";
import { Checkbox } from "./checkbox";
import { Button } from "./button";

function GridList<T extends object>({ children, ...props }: GridListProps<T>) {
  return <AriaGridList {...props}>{children}</AriaGridList>;
}

function GridListItem({ children, ...props }: GridListItemProps) {
  const textValue = typeof children === "string" ? children : undefined;
  return (
    <AriaGridListItem textValue={textValue} {...props}>
      {({ selectionMode, selectionBehavior, allowsDragging }) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {allowsDragging && (
            <Button slot="drag" variant="outline">
              ≡
            </Button>
          )}
          {selectionMode === "multiple" && selectionBehavior === "toggle" && (
            <Checkbox slot="selection" />
          )}
          {children}
        </>
      )}
    </AriaGridListItem>
  );
}

export { GridList, GridListItem };
