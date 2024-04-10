import { Outlet } from "@remix-run/react";
import NavBar from "~/components/main/NavBar";
import SideBar from "~/components/main/SideBar";
import { getAuth } from "@clerk/remix/ssr.server";
import { type LoaderFunction, redirect } from "@remix-run/node";

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
