import { useState } from "react";
import KanbanBoard from "./KanbanBoard";
import { useFireStore } from "~/contexts/FirestoreContext";

const defaultBoards = ["Not Started", "In Progress", "Completed"];

export default function TaskBoard() {
  const { tasks } = useFireStore();
  const [boards, setBoards] = useState<string[]>(defaultBoards);

  return (
    <div>
      <div className="flex gap-4">
        {boards.map((board) => {
          return (
            <KanbanBoard
              name={board}
              key={board}
              activities={tasks?.filter((task) => task.progress === board)}
            />
          );
        })}
      </div>
    </div>
  );
}
