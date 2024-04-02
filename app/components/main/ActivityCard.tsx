import { CalendarClock, LayoutList } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { format } from "date-fns";

type ActivityCardProps = {
  activity: Record<string, string>;
};

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{activity.title}</CardTitle>
        {activity.description && (
          <CardDescription>{activity.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex gap-4">
        {activity.dueDate && (
          <div className="flex gap-2 text-muted-foreground">
            <CalendarClock />
            <p>{format(activity.dueDate, "MMM d, yyyy")}</p>
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
