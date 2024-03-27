import { Link, Outlet } from "@remix-run/react";

export default function AuthRoute() {
  return (
    <>
      <header>
        <nav className="navbar">
          <Link to="/" className=" px-4 text-xl font-semibold">
            Taskbored
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
