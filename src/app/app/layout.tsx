import NavBar from "@/components/App/NavBar";
import SideBar from "@/components/App/SideBar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="grid grid-cols-10 min-h-screen">
          <SideBar />
          <div className="col-span-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
