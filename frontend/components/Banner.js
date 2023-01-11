import Image from "next/image";
import bannerPic from "../public/student.png";

export const Banner = () => {
  return (
    <section className="px-[10%] lg:px-20 md:px-10 sm:px-4 py-10 bg-stone-100">
      <div className="grid grid-cols-2 sm:grid-cols-1 sm:grid-rows-2 gap-10 md:gap-6 sm:gap-10">
        <div className="flex flex-col justify-center sm:justify-start sm:items-center sm:h-fit">
          <p className="text-base xl:text-sm tracking-widest uppercase text-cyan-700 font-bold">
            E-course platform
          </p>
          <h1 className="text-6xl xl:text-5xl lg:text-4xl sm:text-center tracking-tight font-bold leading-tight pt-6 pb-8 max-w-[16ch]">
            Learning and teaching online, made easy.
          </h1>
          <p className="text-lg xl:text-base lg:text-sm sm:text-center tracking-tight font-semibold text-stone-500 leading-normal max-w-[35ch] pb-8">
            Practice your programming skills and learn new things with the
            platform.
          </p>
          {/* Change this later */}
          <div>
            <button className="rounded-full bg-cyan-700 hover:bg-cyan-900 px-5 py-2 text-white text-lg xl:text-base font-bold">
              Browse Course
            </button>
          </div>
        </div>
        <Image
          className="w-full aspect-square object-contain sm:max-h-[300px] sm:aspect-auto"
          src={bannerPic}
        />
      </div>
    </section>
  );
};
