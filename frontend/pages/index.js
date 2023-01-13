import { FeatureSection } from "../components/FeatureSection/FeatureSection";
import { Footer } from "../components/Footer/Footer";
import { RecommendSection } from "../components/RecommendSection/RecommendSection";
import { Banner } from "../components/Banner/Banner";
import TextEditor from "../components/TextEditor";

export default function Home() {
  return (
    <>
      <Banner />
      <RecommendSection />
      <FeatureSection />
      <Footer />
      <TextEditor/>
    </>
  );
}
