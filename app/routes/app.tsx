import { Outlet } from "react-router-dom";
import NavBar from "~/components/main/NavBar";
import SideBar from "~/components/main/SideBar";
import { FirestoreProvider } from "~/contexts/FirestoreContext";

export const meta = () => {
  return [
    {
      title: "Taskbored",
    },
    { description: "Planner App for all your needs" },
  ];
};

export default function AppLayout() {
  return (
    <>
      <NavBar />
      <main className="grid min-h-screen grid-cols-10">
        <SideBar />

        <div className="col-span-8">
          <FirestoreProvider>
            <div className="p-4 lg:p-6">
              <Outlet />
            </div>
          </FirestoreProvider>
        </div>
      </main>
    </>
  );
}
