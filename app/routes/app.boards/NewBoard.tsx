import { Form } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export default function NewBoard() {
  return (
    <section>
      <h2>New Board</h2>
      <Form method="post">
        <input type="text" name="name" placeholder="Board Name" />
        <input type="hidden" name="intent" value="create"/>
        <Button type="submit">Create Board</Button>
      </Form>
    </section>
  );
}
