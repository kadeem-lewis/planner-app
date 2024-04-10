import { getAuth } from "@clerk/remix/ssr.server";
import { ActionFunction, json } from "@remix-run/node";
import { ACTIVITY } from "~/constants/activities";
import { db } from "~/drizzle/config.server";
import { events, tasks } from "~/drizzle/schema.server";

export const action: ActionFunction = async (args) => {
  const { userId } = await getAuth(args);
  const formData = await args.request.formData();

  if (formData.get("activity") === ACTIVITY.EVENT) {
    try {
      await db.insert(events).values({
        title: String(formData.get("title")),
        start_date: new Date(String(formData.get("start-time"))),
        end_date: new Date(String(formData.get("end-time"))),
        user_id: String(userId),
      });

      return json({
        status: 201,
        activity: ACTIVITY.EVENT,
        success: true,
      });
    } catch (error) {
      return json({
        status: 500,
        activity: ACTIVITY.EVENT,
        error: "Something went wrong",
      });
    }
  }
  if (formData.get("activity") === ACTIVITY.TASK) {
    try {
      await db.insert(tasks).values({
        title: String(formData.get("title")),
        description: String(formData.get("description")),
        completed: formData.get("progress") === "Completed",
        progress: String(formData.get("progress")),
        due_date: String(formData.get("due_date")),
        user_id: String(userId),
      });
      return json({
        status: 201,
        activity: ACTIVITY.TASK,
        success: true,
      });
    } catch (error) {
      return json({
        status: 500,
        activity: ACTIVITY.TASK,
        error: "Something went wrong",
      });
    }
  }
};
