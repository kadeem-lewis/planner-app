import { useState } from "react";
import KanbanBoard from "./KanbanBoard";
import { LoaderFunction, json } from "@remix-run/node";
import { db } from "~/drizzle/config.server";
import { tasks } from "~/drizzle/schema.server";
import { eq } from "drizzle-orm";
import { getAuth } from "@clerk/remix/ssr.server";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);

  //! Not sure if using ! is recommended but userId shouldn't be able to be null since it is handled in the layout
  return json(await db.select().from(tasks).where(eq(tasks.user_id, userId!)));
};

const defaultBoards = ["Not Started", "In Progress", "Completed"];

export default function TaskBoard() {
  const tasks = useLoaderData<typeof loader>();
  const [boards] = useState<string[]>(defaultBoards);

  return (
    <div>
      <div className="flex gap-4">
        {boards.map((board) => {
          return (
            <KanbanBoard
              name={board}
              key={board}
              activities={tasks.filter((task) => task.progress === board)}
            />
          );
        })}
      </div>
    </div>
  );
}
