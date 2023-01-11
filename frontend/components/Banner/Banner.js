import Image from "next/image";
import bannerPic from "../../public/student.png";
import { BannerInfo } from "./BannerInfo";

export const Banner = () => {
  return (
    <section className="px-[10%] lg:px-20 md:px-10 sm:px-4 py-10 bg-stone-100">
      <div className="grid grid-cols-2 sm:grid-cols-1 sm:grid-rows-2 gap-10 md:gap-6 sm:gap-10">
        <BannerInfo />
        <Image
          className="w-full aspect-square object-contain sm:max-h-[300px] sm:aspect-auto"
          src={bannerPic}
        />
      </div>
    </section>
  );
};
