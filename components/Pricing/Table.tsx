import Link from "next/link";

function PricingTable() {
  return (
    <div className=" py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl">
            Pricing
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            I don't think IDX will be free, so here's a pricing table just incase
          </p>
        </div>
        {/* text - end */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-0">
          {/* left side - start */}
          <div className="w-full rounded-lg bg-gray-800 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-100 sm:text-3xl">
                Basic Bundle
              </h3>
              <p className="text-gray-300">IDX</p>
            </div>
            <div className="mb-4 space-x-2">
              <span className="text-4xl font-bold text-gray-100">$99</span>
              <span className="text-2xl text-gray-300 line-through">$1099</span>
            </div>
            <ul className="mb-6 space-y-2 text-gray-300">
              {/* feat - start */}
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>1 line of code</span>
              </li>
              {/* feat - end */}
              {/* feat - start */}
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>1 project</span>
              </li>
              {/* feat - end */}
              {/* feat - start */}
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>1 VM Workspace</span>
              </li>
              {/* feat - end */}
            </ul>
            <Link
              href="#"
              className="block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-semibold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-gray-300 md:text-base"
            >
              Get the Basic Bundle
            </Link>
          </div>
          {/* left side - end */}
          {/* right side - start */}
          <div className="w-full rounded-lg bg-gradient-to-tr from-indigo-300 to-purple-600 p-6 shadow-xl sm:w-1/2 sm:p-8">
            <div className="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row">
              <div>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  Pro Bundle
                </h3>
                <p className="text-indigo-100">Full Stack + IDX</p>
              </div>
              <span className="order-first inline-block rounded-full bg-indigo-200 bg-opacity-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white lg:order-none">
                Best value
              </span>
            </div>
            <div className="mb-4 space-x-2">
              <span className="text-4xl font-bold text-white">$99</span>
              <span className="text-2xl text-indigo-100 line-through">$899</span>
            </div>
            <ul className="mb-6 space-y-2 text-indigo-100">
              {/* feat - start */}
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Unlimited code lines</span>
              </li>
              {/* feat - end */}
              {/* feat - start */}
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Unlimited Projects</span>
              </li>
              {/* feat - end */}
              {/* feat - start */}
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Unlimited Virtual Machine Workspaces</span>
              </li>
              {/* feat - end */}
              {/* feat - start */}
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>IDX AI</span>
              </li>
              {/* feat - end */}
              {/* feat - start */}
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Premium support</span>
              </li>
              {/* feat - end */}
            </ul>
            <Link
              href="#"
              className="block rounded-lg bg-indigo-200 bg-opacity-50 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-purple-300 transition duration-100 hover:bg-purple-600 focus-visible:ring active:bg-purple-400 md:text-base"
            >
              Get the Pro Bundle
            </Link>
          </div>
          {/* right side - end */}
        </div>
      </div>
    </div>
  );
}

export default PricingTable;
