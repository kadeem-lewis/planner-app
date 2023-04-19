"use client";
import React, { useState } from "react";
import Link from "next/link";
export default function NavBar() {
  return (
    <header>
      <nav className="flex justify-between bg-base-200 navbar">
        <Link href="/">Taskbored</Link>
        <div>
          <button className="btn mr-4">
            <Link href="auth/signup">Signup</Link>
          </button>
          <button className="btn">
            <Link href="auth/login">Login</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
