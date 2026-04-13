import MainLayout from "../../layouts/MainLayout";
import ContinueLearning from "./components/continue-learning/ContinueLearning";
import HeroSection from "./components/hero/HeroSection";
import StartLearning from "./components/start-learning/StartLearning";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="w-[1920px] px-[177px]">
        <HeroSection />
        <StartLearning />
        <ContinueLearning />
      </div>
    </MainLayout>
  );
};

export default HomePage;
