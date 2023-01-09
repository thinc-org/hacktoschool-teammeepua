import { FeatureSection } from "../components/FeatureSection/FeatureSection";
import { Footer } from "../components/Footer/Footer";
import { RecommendSection } from "../components/RecommendSection/RecommendSection";

export default function Home() {
  return (
    <>
      <RecommendSection />
      <FeatureSection />
      <Footer />
    </>
  );
}
