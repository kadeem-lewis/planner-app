import React, { Dispatch } from "react";
import CreateEvent from "./CreateEvent";
import CreateTask from "./CreateTask";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "../ui/tabs";
interface Props {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  activityType: string;
}
export default function ActivityModal({ setIsOpen, activityType }: Props) {
  return (
    <Tabs defaultValue={activityType}>
      <TabsList>
        <TabsTrigger value="event">Event</TabsTrigger>
        <TabsTrigger value="task">Task</TabsTrigger>
      </TabsList>
      <TabsContent value="event">
        <CreateEvent setIsOpen={setIsOpen} />
      </TabsContent>
      <TabsContent value="task">
        <CreateTask setIsOpen={setIsOpen} />
      </TabsContent>
    </Tabs>
  );
}
