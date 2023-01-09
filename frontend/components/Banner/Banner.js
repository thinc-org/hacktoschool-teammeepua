import Image from "next/image";
import bannerPic from "../../public/student.png";

export const Banner = () => {
  return (
    <div className="px-40 py-10 bg-stone-100">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-base tracking-widest uppercase text-cyan-700 font-bold">
            E-course platform
          </p>
          <h1 className="text-6xl tracking-tight font-bold leading-tight pt-6 pb-8 ">
            Learning and teaching online, made easy.
          </h1>
          <p className="text-lg tracking-tight font-semibold text-stone-500 leading-normal max-w-[35ch] pb-8">
            Practice your programming skills and learn new things with the
            platform.
          </p>
          {/* Change this later */}
          <div>
            <button className="rounded-full bg-cyan-700 hover:bg-cyan-900 px-5 py-2 text-white text-lg font-bold">
              Browse Course
            </button>
          </div>
        </div>
        <Image
          className="w-full aspect-square object-contain "
          src={bannerPic}
        />
      </div>
    </div>
  );
};
