import { useState } from "react";
import { createPortal } from "react-dom";
import KanbanBoard from "./KanbanBoard";
import { useFireStore } from "~/contexts/FirestoreContext";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  useSensors,
  useSensor,
  PointerSensor,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

const defaultBoards = ["Not Started", "In Progress", "Completed"];

export default function TaskBoard() {
  const { tasks } = useFireStore();
  const [boards, setBoards] = useState<string[]>(defaultBoards);
  const [activeBoard, setActiveBoard] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
  );

  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "board") {
      setActiveBoard(event.active.data.current.name);
      return;
    }
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      return;
    }
    const activeColumnId = active.id;
    const overColumnId = over.id;

    if (activeColumnId === overColumnId) {
      return;
    }
    setBoards((prevBoards) => {
      const activeColumnIndex = prevBoards.findIndex(
        (column) => column === activeColumnId,
      );

      const overColumnIndex = prevBoards.findIndex(
        (column) => column === overColumnId,
      );
      return arrayMove(prevBoards, activeColumnIndex, overColumnIndex);
    });

    setActiveBoard(null);
  };

  return (
    <div>
      <DndContext
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        sensors={sensors}
      >
        <div className="flex gap-4">
          <SortableContext items={boards}>
            {boards.map((board) => {
              return (
                <KanbanBoard
                  name={board}
                  key={board}
                  activities={tasks?.filter((task) => task.progress === board)}
                />
              );
            })}
          </SortableContext>
        </div>
        {createPortal(
          <DragOverlay>
            {activeBoard && (
              <KanbanBoard
                name={activeBoard}
                activities={tasks?.filter(
                  (task) => task.progress === activeBoard,
                )}
              />
            )}
          </DragOverlay>,
          document.body,
        )}
      </DndContext>
    </div>
  );
}
