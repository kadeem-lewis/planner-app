import { NavBar } from "@/components/Home/NavBar";
import Providers from "./providers";
import "./globals.css";

export const metadata = {
  title: "Taskbored",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}