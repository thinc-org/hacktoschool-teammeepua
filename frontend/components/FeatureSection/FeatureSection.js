import Image from "next/image";
import featurePic from "../../public/student-sitting.png";
import { FeatureInfo } from "./FeatureInfo";

export const FeatureSection = () => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-1 gap-x-40 xl:gap-x-20 lg:gap-x-10 h-[600px] px-[10%] lg:px-20 md:px-10 sm:px-4 py-28 lg:py-14 sm:py-7 bg-stone-100">
      {/* Change this later */}
      <Image className="sm:max-w-[200px] sm:mx-auto" src={featurePic} alt="" />
      <FeatureInfo />
    </section>
  );
};
