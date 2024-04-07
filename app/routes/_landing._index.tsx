import { Link } from "~/components/ui/link";
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
    heading: "Personalized Experience",
    content:
      "Customize your app with a range of themes, including light and dark mode, to create a planning environment tailored to your preferences.",
    imageSrc: "",
  },
];
export default function LandingPage() {
  return (
    <div className=" text-xl">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Master Your Time.
              <strong className="font-extrabold text-red-700 sm:block">
                {" "}
                Achieve Your Dreams.{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Discover the ultimate planner app designed to simplify
              organization and enhance productivity.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/auth/signup"
              >
                Get Started
              </Link>

              <Link
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {APP_FEATURES.map((feature) => (
              <div key={feature.heading}>
                <svg className="h-8 w-8" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M29.6931 14.2283L22.7556 6.87823C22.3292 6.426 21.6175 6.40538 21.1652 6.83212C20.7137 7.25851 20.6927 7.9706 21.1195 8.42248L27.3284 15L21.1195 21.5783C20.6927 22.0302 20.7137 22.7419 21.1652 23.1687C21.3827 23.3738 21.6606 23.4754 21.9374 23.4754C22.2363 23.4754 22.5348 23.3569 22.7557 23.1233L29.6932 15.7729C30.1022 15.339 30.1023 14.6618 29.6931 14.2283Z"
                    fill="#2D3748"
                  />
                  <path
                    d="M8.88087 21.578L2.67236 15L8.88087 8.42215C9.30726 7.97028 9.28664 7.25812 8.83476 6.83179C8.38323 6.4054 7.67073 6.42603 7.2444 6.87791L0.306858 14.2279C-0.102245 14.6614 -0.102245 15.3391 0.306858 15.7726L7.24475 23.123C7.466 23.3574 7.76413 23.4755 8.06302 23.4755C8.33976 23.4755 8.61767 23.3735 8.83476 23.1684C9.28705 22.742 9.30726 22.0299 8.88087 21.578Z"
                    fill="#2D3748"
                  />
                  <path
                    d="M16.8201 3.08774C16.2062 2.99476 15.6317 3.41622 15.5379 4.03011L12.2379 25.6302C12.1441 26.2445 12.566 26.8186 13.1803 26.9124C13.238 26.921 13.295 26.9252 13.3516 26.9252C13.898 26.9252 14.3773 26.5266 14.4624 25.97L17.7624 4.3699C17.8562 3.7556 17.4343 3.1815 16.8201 3.08774Z"
                    fill="#4299E1"
                  />
                </svg>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  {feature.heading}
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-center text-2xl font-semibold capitalize text-gray-800 dark:text-white lg:text-3xl">
            What our <span className="text-blue-500 ">clients</span> say
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>

          <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:mt-12 xl:grid-cols-3">
            <div className="rounded-lg border p-8 dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “This app has seriously changed the game”.
              </p>

              <div className="-mx-2 mt-8 flex items-center">
                <img
                  className="mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Robert Duncan
                  </h1>
                  <span className="text-sm text-gray-500">Startup Founder</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-8 dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “Better than nothing, I guess.”
              </p>

              <div className="-mx-2 mt-8 flex items-center">
                <img
                  className="mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />

                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Kareem Louis
                  </h1>
                  <span className="text-sm text-gray-500">
                    Unorganized Person
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-8 dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “Totally love it. Greatest app ever Invented”
              </p>

              <div className="-mx-2 mt-8 flex items-center">
                <img
                  className="mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Ariela Ponti{" "}
                  </h1>
                  <span className="text-sm text-gray-500">College Student</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto flex flex-col items-center px-4 py-12 text-center">
          <h2 className="mx-auto max-w-2xl text-2xl font-semibold tracking-tight text-gray-800 dark:text-white xl:text-3xl">
            Ready to <span className="text-blue-500">take control</span> of your
            time?
          </h2>
          <div className="mt-6 inline-flex w-full sm:w-auto">
            <Link
              href="/auth/signup"
              className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-2 text-white duration-300 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
