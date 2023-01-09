import { FeatureSection } from "../components/FeatureSection/FeatureSection";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { RecommendSection } from "../components/RecommendSection/RecommendSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <RecommendSection />
      <FeatureSection />
      <Footer />
    </>
  );
}
