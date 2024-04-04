import KanbanBoard from "./KanbanBoard";
import { ActionFunction, LoaderFunction, json } from "@remix-run/node";
import { db } from "~/drizzle/config.server";
import { tasks } from "~/drizzle/schema.server";
import { eq } from "drizzle-orm";
import { getAuth } from "@clerk/remix/ssr.server";
import { useLoaderData } from "@remix-run/react";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { Task } from "~/components/main/CreateTask";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);

  //! Not sure if using ! is recommended but userId shouldn't be able to be null since it is handled in the layout
  return json(await db.select().from(tasks).where(eq(tasks.user_id, userId!)));
};

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData();
  try {
    await db
      .update(tasks)
      .set({
        progress: body.get("boardName") as string,
      })
      .where(eq(tasks.id, body.get("taskId") as string));
    //TODO: change task id to be uuid in the future
    return json({ message: "Task updated" });
  } catch (error) {
    return json({ error }, { status: 500 });
  }
};

export default function TaskBoard() {
  const taskItems: Task[] = useLoaderData<typeof loader>();

  const dataDict = {
    board: {
      lists: [
        {
          name: "Not Started",
          id: "list-1",
          tasks: taskItems.filter((task) => task.progress === "Not Started"),
        },
        {
          name: "In Progress",
          id: "list-2",
          tasks: taskItems.filter((task) => task.progress === "In Progress"),
        },
        {
          name: "Completed",
          id: "list-3",
          tasks: taskItems.filter((task) => task.progress === "Completed"),
        },
      ],
    },
  };

  const [parent, lists] = useDragAndDrop<
    HTMLDivElement,
    {
      name: string;
      id: string;
      tasks: Task[];
    }
  >(dataDict.board.lists, {
    dragHandle: ".drag-handle",
  });

  return (
    <>
      <div className="flex gap-4" ref={parent}>
        {lists.map((list) => (
          <KanbanBoard
            key={list.id}
            name={list.name}
            activities={list.tasks}
            id={list.id}
          />
        ))}
      </div>
    </>
  );
}
