import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="  text-left">
      <div className="grid grid-cols-4">
        <section className="col-span-1">
          <h5>Products</h5>
          <ul>
            <li>
              <Link to="">Get Started</Link>
            </li>
          </ul>
        </section>
        <section>
          <h5>About</h5>
          <ul>
            <li>
              <Link to="#"></Link>
            </li>
          </ul>
        </section>
        <section>
          <h5>Legal</h5>
          <ul>
            <li>
              <Link to="">Privacy</Link>
            </li>
            <li>
              <Link to="">ToS</Link>
            </li>
            <li>
              <Link to="">License</Link>
            </li>
          </ul>
        </section>

        <div></div>
      </div>
      <div>Kadeem Lewis 2023</div>
    </footer>
  );
}
