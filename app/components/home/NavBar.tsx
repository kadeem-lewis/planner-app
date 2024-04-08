import { Link } from "~/components/ui/link";
export default function NavBar() {
  return (
    <header>
      <nav className="flex h-14 items-center justify-between border-b bg-muted/40 px-8">
        <Link href="/" variant="link" className="px-4 text-xl font-semibold ">
          Taskbored
        </Link>
        <div>
          <Link
            href="/auth/signup"
            className="mr-4 rounded-lg bg-muted px-3 py-2 text-primary hover:bg-muted/80"
          >
            Signup
          </Link>
          <Link
            href="/auth/signin"
            className="rounded-lg bg-muted px-3 py-2 font-semibold text-primary hover:bg-muted/80"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}
