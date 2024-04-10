import { useFetcher } from "@remix-run/react";
import { Icon } from "~/components/Icon";
import { Button } from "~/components/ui/button";
import { Link } from "~/components/ui/link";

type BoardProps = {
  id: number;
  name: string;
};

export default function Board({ name, id }: BoardProps) {
  const fetcher = useFetcher();
  return (
    <Link href={`./boards/${id}`}>
      <div>{name}</div>
      <fetcher.Form method="post">
        <input type="hidden" name="boardId" value={id} />
        <input type="hidden" name="intent" value="delete" />
        <Button aria-label="Delete Board" type="submit">
          <Icon name="lucide-trash-2" className="size-5" />
        </Button>
      </fetcher.Form>
    </Link>
  );
}
