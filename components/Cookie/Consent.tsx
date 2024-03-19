"use client"
import Link from "next/link";
import { useState } from "react";

function Consent() {
  const [isOpen,setIsOpen] = useState(true);

  const toggleCookieBanner = ()=>{
    setIsOpen(false);
  }
  return (
    <>
      <div
        id="cookies-with-stacked-buttons"
        className={`fixed bottom-0 end-0 z-[60] sm:max-w-sm w-full mx-auto p-6 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Card */}
        <div className="p-4 bg-white/[.6] backdrop-blur-lg rounded-xl shadow-2xl dark:bg-slate-900/[.6] dark:shadow-black/[.7]">
          <div className="flex justify-between items-center gap-x-5 sm:gap-x-10">
            <h2 className="font-semibold text-gray-800 dark:text-white">
              Advanced Tracking
            </h2>
            <button
              type="button"
              onClick={toggleCookieBanner}
              className="inline-flex rounded-full p-2 text-gray-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-600 dark:hover:bg-gray-800 dark:text-gray-300"
              data-hs-remove-element="#cookies-with-stacked-buttons"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
            We use advanced cookies to track you across the internet. We can see
            what you're doing right now 😉
          </p>
          <p className="mt-4 text-sm text-gray-800 dark:text-gray-200">
            Visit our{" "}
            <Link
              className="inline-flex items-center gap-x-1.5 text-purple-600 decoration-2 hover:underline font-medium"
              href="#"
            >
              Cookies Policy
            </Link>{" "}
            to learn more.
          </p>
          <div className="mt-5 mb-2 w-full flex gap-x-2">
            <div className="grid w-full">
              <button
                type="button"
                onClick={toggleCookieBanner}
                className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-purple-800 text-white hover:bg-purple-800/70 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Allow all
              </button>
            </div>
            <div className="grid w-full">
              <button
                type="button"
                onClick={toggleCookieBanner}
                className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-purple-400 text-white hover:bg-purple-400/70 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Reject all
              </button>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
    </>
  );
}

export default Consent;
