import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HeroIndicators from "./HeroIndicators";
import HeroArrows from "./HeroArrows";
import { HERO_SLIDES } from "./heroCarousel.data";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const activeSlide = HERO_SLIDES[currentSlide];
  const canGoPrev = currentSlide > 0;
  const canGoNext = currentSlide < HERO_SLIDES.length - 1;

  const goPrev = () => {
    if (!canGoPrev) return;
    setCurrentSlide((previousSlide) => previousSlide - 1);
  };

  const goNext = () => {
    if (!canGoNext) return;
    setCurrentSlide((previousSlide) => previousSlide + 1);
  };

  const goToSlide = (slideIndex: number) => {
    if (slideIndex < 0 || slideIndex >= HERO_SLIDES.length) return;
    setCurrentSlide(slideIndex);
  };

  return (
    <section className="py-[64px]">
      <div
        className="relative text-white w-[1566px] h-[420px] rounded-[30px] p-[48px] flex flex-col gap-[12px]  bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${activeSlide.image})` }}
      >
        <div className="flex w-[1470px] flex-col gap-[40px]">
          <div>
            <h1 className="leading-[100%] text-[48px] font-bold h-[58px] ">
              {activeSlide.title}
            </h1>
            {activeSlide.description ? (
              <p className="mt-[12px] font-light text-[24px] w-[1218px]">
                {activeSlide.description}
              </p>
            ) : null}
          </div>
          <Button
            text={activeSlide.buttonText}
            classname="text-[20px] w-[206px] h-[64px]"
            onClick={() => navigate("/courses/catalog")}
          />
        </div>
        <div className="relative mt-auto flex h-[54px] w-full items-center justify-center">
          <HeroIndicators
            slideCount={HERO_SLIDES.length}
            activeIndex={currentSlide}
            activeColor={activeSlide.activeIndicatorColor}
            inactiveColor={activeSlide.inactiveIndicatorColor}
            onSelect={goToSlide}
          />
          <div className="absolute right-0 top-0">
            <HeroArrows
              leftIcon={activeSlide.leftArrowIcon}
              rightIcon={activeSlide.rightArrowIcon}
              canGoPrev={canGoPrev}
              canGoNext={canGoNext}
              onPrev={goPrev}
              onNext={goNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
