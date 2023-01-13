import { FeatureSection } from "../components/FeatureSection/FeatureSection";
import { Footer } from "../components/Footer/Footer";
import { RecommendSection } from "../components/RecommendSection/RecommendSection";
import { Banner } from "../components/Banner/Banner";

import { courseContent } from "./course/[courseID]/view";

export default function Home() {
  return (
    <>
      <Banner />
      <RecommendSection />
      <FeatureSection />
      <Footer />
      {/* <courseContent /> */}
    </>
  );
}
