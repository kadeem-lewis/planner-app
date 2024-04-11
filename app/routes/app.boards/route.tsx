import { getAuth } from "@clerk/remix/ssr.server";
import Boards from "./Boards";
import NewBoard from "./NewBoard";
import { db } from "~/drizzle/config.server";
import { eq } from "drizzle-orm";
import { board } from "~/drizzle/schema.server";
import {
  type LoaderFunctionArgs,
  json,
  ActionFunctionArgs,
} from "@remix-run/node";
import { createBoard, deleteBoard } from "./queries";

export async function loader(args: LoaderFunctionArgs) {
  const { userId } = await getAuth(args);
  const boards = await db
    .select()
    .from(board)
    .where(eq(board.user_id, userId!));
  return json({ boards });
}

export async function action(args: ActionFunctionArgs) {
  const { userId } = await getAuth(args);

  const formData = await args.request.formData();
  switch (formData.get("intent")) {
    case "create":
      try {
        const name = String(formData.get("name"));
        await createBoard(name, userId!);
        return json({ message: "Board created" });
      } catch (error) {
        return json({ error }, { status: 500 });
      }
    case "delete":
      try {
        const boardId = Number(formData.get("boardId"));
        await deleteBoard(boardId);
        return json({ message: "Board deleted" });
      } catch (error) {
        return json({ error }, { status: 500 });
      }
  }
}

export default function route() {
  return (
    <div>
      <NewBoard />
      <Boards />
    </div>
  );
}
