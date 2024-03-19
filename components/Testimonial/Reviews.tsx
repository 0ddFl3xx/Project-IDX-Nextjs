import Image from "next/image";

const TestimonialSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="space-y-4 max-w-2xl">
          <span className="rounded-lg bg-purple-900 px-2.5 py-1 text-xs font-semibold tracking-wide text-white">
            Testimonials
          </span>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Here's a fake review
          </h1>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-2 md:gap-6 relative">
          <div className="absolute -left-10 md:left-0 inset-y-0 w-3/5 z-0">
            <Image
              src="/pics/idx-review.png"
              alt=""
              width={1800}
              height={1800}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="flex col-span-1" />
          <div className="w-full col-span-1 overflow-hidden md:col-span-2 lg:col-span-1 relative flex flex-col gap-8 z-[5] py-10 md:py-14">
            <div className="h-auto  rounded-2xl shadow-lg bg-purple-500 ">
              <div className="h-full">
                <div className="flex gap-5 md:gap-6">
                  <div className="flex min-w-max">
                    <img
                      src="https://source.unsplash.com/random/?man+coding"
                      alt=""
                      width={500}
                      height={500}
                      className="p-2 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-2xl"
                    />
                  </div>
                  <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-5">
                    <div className="flex flex-col">
                      <span className="text-xl md:text-2xl font-semibold text-white">
                        Teneray Oparayta
                      </span>
                      <span className="text-gray-300">Full-Stack Dev</span>
                    </div>
                    <div>
                      <p className="line-clamp-5 text-white">
                        IDX is a well-designed and powerful IDE that can help
                        developers of all levels write better code. It has a
                        clean and uncluttered user interface, a responsive
                        editor, and support for multiple programming languages.
                        It also has a number of amazing features 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:justify-end">
              <div className="flex items-center gap-4 w-max p-1.5 rounded-full bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/30 border border-gray-200/40 dark:shadow-none dark:border-gray-800">
                <button
                  aria-label="prev"
                  className="outline-none text-gray-700 transition hover:text-purple-600 dark:text-gray-300 p-2 md:p-2.5 hover:bg-purple-100 dark:hover:bg-purple-100 dark:hover:text-purple-600 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="flex w-max min-w-max items-center">
                  <div className="flex items-center gap-1 border-0 bg-transparent">
                    <span className="cursor-pointer w-4 h-2 rounded-full bg-blue-600 transition border-none" />
                    <span className="cursor-pointer w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-800 transition ease-linear border-none" />
                    <span className="cursor-pointer w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-800 transition ease-linear border-none" />
                  </div>
                </div>
                <button
                  aria-label="next"
                  className="outline-none text-gray-700 transition hover:text-purple-600 dark:text-gray-300 p-2 md:p-2.5 hover:bg-purple-100 dark:hover:bg-purple-100 dark:hover:text-purple-600 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;
