import { Button } from "~/components/ui/button"
import { Plus } from "lucide-react"
import ActivityCard from "~/components/main/ActivityCard"
import { Event } from "~/components/main/CreateEvent"
import { Task } from "~/components/main/CreateTask"
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';

type KanbanBoardProps = {
    name:string
    activities: (Event[]|Task[])
    
}

export default function KanbanBoard({name, activities}:KanbanBoardProps) {

    const {setNodeRef,attributes,listeners,transform,transition}= useSortable({
      id: name,
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  return (
    <div className="bg-muted rounded-lg px-4 py-6 w-full flex flex-col justify-between">
        <div className="font-bold text-xl">{name}</div>
        <div className="flex flex-col gap-3 my-4">
            {activities.map((activity) => {
                return <ActivityCard key={activity.title} activity={activity}/>
            })}
        </div>
        <Button variant="default" className="justify-self-end flex gap-2">
            <Plus/>
            Add Task
            </Button>
    </div>
  )
}
