import { FeatureSection } from "../components/FeatureSection/FeatureSection";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { RecommendSection } from "../components/RecommendSection/RecommendSection";
import { Banner } from "../components/Banner/Banner";

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
