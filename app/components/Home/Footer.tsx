import { Link } from "../ui/link";

export default function Footer() {
  return (
    <footer className="text-left">
      <div className="grid grid-cols-4">
        <section className="col-span-1">
          <h5>Products</h5>
          <ul>
            <li>
              <Link variant="link" href="#">
                Get Started
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h5>About</h5>
          <ul>
            <li>
              <Link href="#" variant="link"></Link>
            </li>
          </ul>
        </section>
        <section>
          <h5>Legal</h5>
          <ul>
            <li>
              <Link href="#" variant="link">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#" variant="link">
                ToS
              </Link>
            </li>
            <li>
              <Link href="#" variant="link">
                License
              </Link>
            </li>
          </ul>
        </section>

        <div></div>
      </div>
      <div>Kadeem Lewis 2023</div>
    </footer>
  );
}
