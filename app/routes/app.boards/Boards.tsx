import { useLoaderData } from "@remix-run/react";
import type { loader } from "./route";
import Board from "./Board";

export default function Boards() {
  const { boards } = useLoaderData<typeof loader>();
  return (
    <section>
      <h2>Boards</h2>
      <div>
        {boards.map((board) => (
          <Board key={board.id} name={board.name} id={board.id} />
        ))}
      </div>
    </section>
  );
}
