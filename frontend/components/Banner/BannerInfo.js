import Link from "next/link";
export const BannerInfo = () => {
  return (
    <div className="flex flex-col justify-center sm:justify-start sm:items-center sm:h-fit">
      <p className="text-base xl:text-sm sm:text-xs tracking-widest uppercase text-cyan-700 font-bold">
        E-course platform
      </p>
      <h1 className="text-6xl xl:text-5xl lg:text-4xl sm:text-center tracking-tight font-bold leading-normal pt-6 pb-8 max-w-[16ch]">
        Learning and teaching online, made easy.
      </h1>
      <p className="text-lg xl:text-base lg:text-sm sm:text-center tracking-tight font-semibold text-stone-500 leading-normal max-w-[35ch] pb-8">
        Practice your programming skills and learn new things with the platform.
      </p>
      {/* Change this later */}
      <div>
        <button className="rounded-full bg-cyan-700 hover:bg-cyan-900 px-5 py-2 text-white text-lg xl:text-base font-bold">
          <Link href="/browse/1">Browse Courses</Link>
        </button>
      </div>
    </div>
  );
};
