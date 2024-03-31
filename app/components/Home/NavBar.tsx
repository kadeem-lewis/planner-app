import { Link } from "~/components/ui/link";
export default function NavBar() {
  return (
    <header>
      <nav className="flex h-14 items-center justify-between border-b bg-muted/40">
        <Link href="/" variant="link" className="px-4 text-xl font-semibold">
          Taskbored
        </Link>
        <div>
          <Link
            href="/auth/signup"
            className="mr-4 rounded-lg px-3 py-2 text-white hover:brightness-110"
          >
            Signup
          </Link>
          <Link
            href="/auth/login"
            className="rounded-lg bg-primary px-3 py-2 font-semibold text-white hover:brightness-110"
          >
            Start for free
          </Link>
        </div>
      </nav>
    </header>
  );
}
