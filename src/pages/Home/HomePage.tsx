import MainLayout from "../../layouts/MainLayout";

import HeroSection from "./components/HeroSection";
import StartLearning from "./components/StartLearning";
const HomePage = () => {
  return (
    <MainLayout>
      <div className="w-[1920px] px-[177px]">
        <HeroSection />
        <StartLearning />
      </div>
    </MainLayout>
  );
};

export default HomePage;
