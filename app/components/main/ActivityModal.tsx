import React, { type Dispatch } from "react";
import CreateEvent from "./CreateEvent";
import CreateTask from "./CreateTask";
import { Tab, TabList, TabPanel, Tabs } from "~/components/ui/tabs";
interface Props {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  activityType: string;
}
export default function ActivityModal({ setIsOpen, activityType }: Props) {
  return (
    <Tabs defaultSelectedKey={activityType}>
      <TabList>
        <Tab id="event">Event</Tab>
        <Tab id="task">Task</Tab>
      </TabList>
      <TabPanel id="event">
        <CreateEvent setIsOpen={setIsOpen} />
      </TabPanel>
      <TabPanel id="task">
        <CreateTask setIsOpen={setIsOpen} />
      </TabPanel>
    </Tabs>
  );
}
