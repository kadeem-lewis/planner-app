import { Link, Outlet } from "@remix-run/react";

export default function AuthRoute() {
  return (
    <div className="h-screen">
      <header>
        <nav className="flex h-14 items-center border-b bg-muted/40">
          <Link to="/" className=" px-4 text-xl font-semibold">
            Taskbored
          </Link>
        </nav>
      </header>
      <main className="flex h-full items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}
