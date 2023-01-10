import { FeatureSection } from "../components/FeatureSection";
import { Footer } from "../components/Footer/Footer";
import { RecommendSection } from "../components/RecommendSection/RecommendSection";
import { Banner } from "../components/Banner";

export default function Home() {
  return (
    <>
      <Banner />
      <RecommendSection />
      <FeatureSection />
      <Footer />
    </>
  );
}
