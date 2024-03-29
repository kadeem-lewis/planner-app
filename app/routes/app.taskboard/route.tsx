import KanbanBoard from "./KanbanBoard";
import { useFireStore } from "~/contexts/FirestoreContext";
import { DndContext } from "@dnd-kit/core";

const boards = ["Not Started", "In Progress", "Completed"];

export default function TaskBoard() {
  const { tasks } = useFireStore();

  return (
    <div>
      <DndContext>
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
      </DndContext>
    </div>
  );
}
