import React, { type Dispatch, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { useFetcher } from "@remix-run/react";
import { action } from "~/routes/app";
import { ACTIVITY } from "../../constants/activities";

type CreateEventProps = {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

export type Event = {
  title: string;
  startDate: string;
  endDate: string;
};

export default function CreateEvent({ setIsOpen }: CreateEventProps) {
  const fetcher = useFetcher<typeof action>();

  useEffect(() => {
    if (fetcher.state !== "loading") return;
    if (fetcher.data?.success && fetcher.data?.activity === ACTIVITY.EVENT) {
      setIsOpen(false);
    }
  }, [fetcher.data?.activity, fetcher.data?.success, fetcher.state, setIsOpen]);

  return (
    <fetcher.Form method="post" action="/app">
      <Label htmlFor="title" className="label">
        Title:
      </Label>
      <Input type="text" name="title" className="input" />
      <Label htmlFor="start-time" className="label">
        Start
      </Label>
      <Input type="datetime-local" name="start-time" />
      <Label htmlFor="end-time" className="label">
        End
      </Label>
      <Input type="datetime-local" name="end-time" />
      <Button
        type="submit"
        name="activity"
        value={ACTIVITY.EVENT}
        variant="default"
        className="w-full"
      >
        Submit
      </Button>
    </fetcher.Form>
  );
}
