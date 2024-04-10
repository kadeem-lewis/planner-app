import { Outlet } from "@remix-run/react";
import NavBar from "~/components/main/NavBar";
import SideBar from "~/components/main/SideBar";
import { getAuth } from "@clerk/remix/ssr.server";
import {
  type ActionFunction,
  type LoaderFunction,
  redirect,
  json,
} from "@remix-run/node";
import { db } from "~/drizzle/config.server";
import { events, tasks } from "~/drizzle/schema.server";
import { ACTIVITY } from "~/components/constants/activities";

export const meta = () => {
  return [
    {
      title: "Taskbored",
    },
    { description: "Planner App for all your needs" },
  ];
};

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    throw redirect("/auth/signin");
  }
  return {};
};

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

export default function AppLayout() {
  return (
    <>
      <NavBar />
      <main className="grid min-h-screen grid-cols-10">
        <SideBar />

        <div className="col-span-8">
          <div className="p-4 lg:p-6">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}
