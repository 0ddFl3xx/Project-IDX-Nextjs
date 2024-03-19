"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="min-h-max bg-gray-950 py-12">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-br from-purple-800 blur-xl opacity-40" />
        <div className="w-full flex items-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-purple-600 to-pink-400 rounded-full opacity-50 blur-2xl" />
          <div className="min-h-max relative mx-auto pt-32 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
            <Link
              href="#"
              className="flex items-center gap-x-2 text-gray-100 mx-auto w-max px-2 pr-1 py-1 rounded-full bg-gray-900 border border-gray-800 hover:scale-110 ease-in duration-200"
            >
              Project IDX is here!
              <span className="px-1 rounded-full bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
            <h1 className=" text-white mx-auto max-w-5xl font-semibold text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight">
              The web-based IDE that lets you develop fullstack apps!
            </h1>
            <p className=" text-gray-300 mx-auto max-w-2xl">
             Build Mobile Apps, Web Apps, AI apps and other cool shit from a feature rich web based IDE
            </p>
            <div className="flex sm:flex-row flex-col gap-5 w-full mx-auto max-w-lg">
              <form
                action="#"
                className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-400 shadow-lg shadow-gray-200/20 shadow-transparen
                  border  border-gray-800  bg-gray-900 rounded-full ease-linear  focus-within:bg-gray-950  focus-within:border-puble-600"
              >
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="recieve@annoyingEmails.com"
                  className="w-full py-3 outline-none bg-transparent"
                />
                <button
                  className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                      after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:top-0 after:left-0 after:bg-purple-700 hover:after:opacity-100 hover:after:scale-[2.5] bg-purple-600 border-transparent hover:border-[#172554]"
                >
                  <span className="hidden sm:flex relative z-[5]">Sign up</span>
                  <span className="flex sm:hidden relative z-[5]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
            <div className="mx-auto max-w-6xl rounded-2xl aspect-[5/2.3] overflow-hidden bg-gradient-to-t from-gray-950 to-gray-900">
              <Image
                src="/pics/idx.png"
                width={1440}
                height={1024}
                alt="Project IDX"
                className="rounded-t-lg w-full h-auto "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-6 md:px-10">
          <h5 className="mb-6 text-center text-xl text-white font-semibold md:mb-10 lg:mb-12">
            These innovative companies might like{" "}
            <span className="block w-full text-transparent bg-clip-text lg:inline bg-gradient-to-r from-purple-300  to-purple-600">
              Project IDX
            </span>
          </h5>
          <div className="grid grid-cols-1 gap-8 rounded-3xl  p-16 sm:grid-cols-2 md:grid-cols-3 md:gap-16">
            {/* Item */}
            <div className="flex items-center justify-center">
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e4716676240e0813cdf_Microsoft%20Logo.svg"
                alt=""
                className="mx-auto inline-block max-w-[80%] max-[767px]:max-w-full"
              />
            </div>
            {/* Item */}
            <div className="flex items-center justify-center">
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e474df072a344c2a079_PayPal%20Logo.svg"
                alt=""
                className="mx-auto inline-block max-w-[80%] max-[767px]:max-w-full"
              />
            </div>
            {/* Item */}
            <div className="flex items-center justify-center">
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e4a718e95b3c10bc466_Google%20Logo.svg"
                alt=""
                className="mx-auto inline-block max-w-[80%] max-[767px]:max-w-full"
              />
            </div>
            {/* Item */}
            <div className="flex items-center justify-center">
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e44075471d57debfe23_Chase%20Logo.svg"
                alt=""
                className="mx-auto inline-block max-w-[80%] max-[767px]:max-w-full"
              />
            </div>
            {/* Item */}
            <div className="flex items-center justify-center">
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982e46c9353e092ba4b774_Walmart%20Logo.svg"
                alt=""
                className="mx-auto inline-block max-w-[80%] max-[767px]:max-w-full"
              />
            </div>
            {/* Item */}
            <div className="flex items-center justify-center">
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63982efc554105ffbeb5b691_Slack%20Logo%20(2).svg"
                alt=""
                className="mx-auto inline-block max-w-[80%] max-[767px]:max-w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
