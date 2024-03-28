import { Link } from "@remix-run/react";
import { Button } from "../ui/button";
export default function NavBar() {
  return (
    <header>
      <nav className="h-14 flex items-center justify-between bg-muted/40 border-b">
        <Link to="/" className="px-4 text-xl font-semibold">
          Taskbored
        </Link>
        <div>
          <Button className="mr-4 rounded-lg px-3 py-2 text-white hover:brightness-110">
            <Link to="/auth/signup">Signup</Link>
          </Button>
          <Button className="rounded-lg bg-primary px-3 py-2 font-semibold text-white hover:brightness-110">
            <Link to="/auth/login">Start for free</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
