import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="  text-left">
      <div className="grid grid-cols-4">
        <section className="col-span-1">
          <h5>Products</h5>
          <ul>
            <li>
              <Link href="">Get Started</Link>
            </li>
          </ul>
        </section>
        <section>
          <h5>About</h5>
          <ul>
            <li>
              <Link href="#"></Link>
            </li>
          </ul>
        </section>
        <section>
          <h5>Legal</h5>
          <ul>
            <li>
              <Link href="">Privacy</Link>
            </li>
            <li>
              <Link href="">ToS</Link>
            </li>
            <li>
              <Link href="">License</Link>
            </li>
          </ul>
        </section>

        <div></div>
      </div>
      <div>Kadeem Lewis 2023</div>
    </footer>
  );
}
