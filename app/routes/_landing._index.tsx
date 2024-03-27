import { Link } from "@remix-run/react";
const APP_FEATURES = [
  {
    heading: "Effortless Planning",
    content:
      "Visualize your day, week, and month with our versatile calendar view, ensuring you never miss a beat.",
    imageSrc: "",
  },
  {
    heading: "Streamlined Organization",
    content:
      "Manage your tasks efficiently using our dynamic kanban board and customizable task views.",
    imageSrc: "",
  },
  {
    heading: "Seamless Accessibility",
    content:
      "Access your planner from any device and watch as your data syncs in real-time, keeping you connected and in control.",
    imageSrc: "",
  },
  {
    heading: "Personalized Experience",
    content:
      "Customize your app with a range of themes, including light and dark mode, to create a planning environment tailored to your preferences.",
    imageSrc: "",
  },
];
export default function LandingPage() {
  return (
    <div className=" text-xl">
      <section className="mt-20 text-center">
        <h1 className=" text-4xl font-bold">
          Master Your Time, Achieve Your Dreams
        </h1>
        <h2>
          Discover the ultimate planner app designed to simplify organization
          and enhance productivity.
        </h2>
        <button className=" rounded-lg bg-blue-500 px-3 py-2 font-semibold text-white hover:bg-blue-600">
          <Link to="/auth/signup">Start for free</Link>
        </button>
        {/* Some sort of image */}
      </section>
      <div id="features">
        {APP_FEATURES.map((feature, index) => (
          <section key={index}>
            <h3 className=" text-2xl font-semibold">{feature.heading}</h3>
            <p>{feature.content}</p>
          </section>
        ))}
      </div>
      <section>
        <blockquote>This app has seriously changed the game</blockquote>
      </section>
      <section className="text-center">
        <h3 className=" text-2xl font-semibold">
          Ready to take control of your time?
        </h3>
        <button className="rounded-lg bg-blue-500 px-3 py-2 font-semibold text-white hover:bg-blue-600">
          <Link to="/auth/signup">Start for free</Link>
        </button>
      </section>
    </div>
  );
}
