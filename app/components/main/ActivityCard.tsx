import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";

type ActivityCardProps = {
  activity: Record<string, string>;
};

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{activity.title}</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
