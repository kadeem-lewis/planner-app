import { Link, Outlet } from "@remix-run/react";

export default function AuthRoute() {
  return (
    <div className="h-screen">
      <header>
        <nav className="flex items-center border-b bg-muted/40 h-14">
          <Link to="/" className=" px-4 text-xl font-semibold">
            Taskbored
          </Link>
        </nav>
      </header>
      <main className="flex items-center justify-center h-full">
        <Outlet />
      </main>
    </div>
  );
}
