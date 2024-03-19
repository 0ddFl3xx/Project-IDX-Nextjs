import React from 'react'

function Features() {
  return (
    <>
      <section >
        {/* Container */}
        <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* Heading Text */}
          <div className="mx-auto mb-8 w-full max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-semibold md:text-5xl">
              SuperDuper Things you can do with IDX
            </h2>
            <p className="mx-auto mt-4 max-w-[528px] text-gray-300 md:mb-12 lg:mb-16">
              There's a ton, but I only remember these features... Lol
            </p>
          </div>
          {/* Content Div */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
            {/* Features Div */}
            <div className="flex flex-col items-start">
              {/* Features Item */}
              <a className="my-4 flex max-w-[480px] items-center rounded-xl border border-solid border-purple-600 bg-purple-300 p-6 font-bold text-white [box-shadow:rgb(0,_0,_0)_-4px_4px]">
                <div className="relative mr-2 flex h-14 w-14 flex-none flex-col items-center justify-center rounded-md border border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_2px_2px]">
                  <img
                    alt=""
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6391586264bf263c3a734e6d_Group%2047875.png"
                    className="inline-block h-8"
                  />
                </div>
                <p className="ml-4 text-sm font-normal">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </a>
              {/* Features Item */}
              <a className="my-4 flex max-w-[480px] items-center rounded-xl border border-solid border-purple-600 bg-purple-700 p-6 font-bold [box-shadow:rgb(0,_0,_0)_-4px_4px]">
                <div className="relative mr-2 flex h-14 w-14 flex-none flex-col items-center justify-center rounded-md border border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_2px_2px]">
                  <img
                    alt=""
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6391586264bf263c3a734e6d_Group%2047875.png"
                    className="inline-block h-8"
                  />
                </div>
                <p className="ml-4 text-sm font-normal">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </a>
              {/* Features Item */}
              <a className="my-4 flex max-w-[480px] items-center rounded-xl border border-solid border-purple-600 bg-purple-700 p-6 font-bold [box-shadow:rgb(0,_0,_0)_-4px_4px]">
                <div className="relative mr-2 flex h-14 w-14 flex-none flex-col items-center justify-center rounded-md border border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_2px_2px]">
                  <img
                    alt=""
                    src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6391586264bf263c3a734e6d_Group%2047875.png"
                    className="inline-block h-8"
                  />
                </div>
                <p className="ml-4 text-sm font-normal">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </a>
            </div>
            {/* Image Div */}
            <div className="relative left-4 h-full max-h-[560px] w-[85%] md:left-0 md:w-[95%] lg:w-full">
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d18de7d116535cb3813_magicpattern-am-yg8wLLIo-unsplash.jpg"
                alt=""
                className="relative mx-auto block h-[560px] w-full -rotate-[3.5deg] rounded-2xl object-cover"
              />
              <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-purple-600" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features
