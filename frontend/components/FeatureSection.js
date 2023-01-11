import Image from "next/image";
import featurePic from "../public/student-sitting.png";

export const FeatureSection = () => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-1 gap-x-40 xl:gap-x-20 lg:gap-x-10 h-[600px] px-[10%] lg:px-20 md:px-10 sm:px-4 py-28 lg:py-14 sm:py-7 bg-stone-100">
      {/* Change this later */}
      <Image className="sm:max-w-[300px] sm:mx-auto" src={featurePic} alt="" />
      <div>
        <h1 className="text-5xl lg:text-4xl sm:text-center font-bold w-[14ch] sm:mx-auto tracking-tight">
          Learn a language in a playful way
        </h1>
        <p className="text-lg lg:text-base sm:text-center font-semibold my-8 text-stone-500 tracking-tight">
          Make learning words more fun with mini-games
        </p>
        <div className="flex sm:justify-center">
          <div>
            {/* Change this later */}
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M19.95 42 22 27.9h-7.3q-.55 0-.8-.5t0-.95L26.15 6h2.05l-2.05 14.05h7.2q.55 0 .825.5.275.5.025.95L22 42Z" />
            </svg>
          </div>
          <p className="text-4xl font-bold">600</p>
        </div>
        <p className="text-stone-500 sm:text-center text-base lg:text-sm font-semibold tracking-tight">
          Active Users
        </p>
      </div>
    </section>
  );
};
