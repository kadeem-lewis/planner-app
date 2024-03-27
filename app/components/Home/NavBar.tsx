import { Link } from "@remix-run/react";
export default function NavBar() {
  return (
    <header>
      <nav className="navbar flex justify-between bg-base-200">
        <Link to="/" className="px-4 text-xl font-semibold">
          Taskbored
        </Link>
        <div>
          <button className="mr-4 rounded-lg px-3 py-2 text-white hover:bg-blue-500">
            <Link to="/auth/signup">Signup</Link>
          </button>
          <button className="rounded-lg bg-blue-500 px-3 py-2 font-semibold text-white hover:bg-blue-600">
            <Link to="/auth/login">Start for free</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
