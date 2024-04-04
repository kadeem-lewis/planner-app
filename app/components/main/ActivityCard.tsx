import { CalendarClock, LayoutList } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { format } from "date-fns";
import type { Task } from "./CreateTask";

type ActivityCardProps = {
  activity: Task;
  id: string;
};

export default function ActivityCard({ activity, id }: ActivityCardProps) {
  return (
    <Card id={id}>
      <CardHeader>
        <CardTitle className="text-xl">{activity.title}</CardTitle>
        {activity.description && (
          <CardDescription>{activity.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex gap-4">
        {activity.due_date && (
          <div className="flex gap-2 text-muted-foreground">
            <CalendarClock />
            <p>{format(activity.due_date, "MMM d, yyyy")}</p>
          </div>
        )}
        {activity.subtasks && (
          <div className="flex gap-2">
            <LayoutList />
            <span>
              {
                activity.subtasks.filter((task) => task.status === "completed")
                  .length
              }
              /{activity.subtasks.length}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
