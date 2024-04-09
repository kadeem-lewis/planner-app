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
    return redirect("/auth/signin");
  }
  return {};
};

export const action: ActionFunction = async (args) => {
  const { userId } = await getAuth(args);
  const formData = await args.request.formData();
  console.log(
    formData.get("activity"),
    formData.get("title"),
    formData.get("due_date"),
    formData.get("progress"),
    formData.get("description"),
    formData.get("start-time"),
    new Date(formData.get("end-time") as string).toISOString(),
    formData.get("end-time"),
  );

  if (formData.get("activity") === ACTIVITY.EVENT) {
    try {
      await db.insert(events).values({
        title: formData.get("title"),
        start_date: new Date(formData.get("start-time") as string),
        end_date: new Date(formData.get("end-time") as string),
        user_id: userId,
      });

      return json({
        status: 201,
        activity: "event" as const,
        success: true,
      });
    } catch (error) {
      return json({
        status: 500,
        activity: "event" as const,
        error: "Something went wrong",
      });
    }
  }
  if (formData.get("activity") === ACTIVITY.TASK) {
    try {
      await db.insert(tasks).values({
        title: formData.get("title"),
        description: formData.get("description"),
        due_date: formData.get("due_date"),
        user_id: userId,
        progress: formData.get("progress"),
        completed: formData.get("progress") === "Completed",
      });
      return json({
        status: 201,
        activity: "task" as const,
        success: true,
      });
    } catch (error) {
      return json({
        status: 500,
        activity: "task" as const,
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
