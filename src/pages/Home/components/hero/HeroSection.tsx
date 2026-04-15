import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button";
import { useProtectedAction } from "../../../../features/auth/hooks/useProtectedAction";
import { useAuthModal } from "../../../../features/auth/hooks/useAuthModal";
import HeroArrows from "./HeroArrows";
import HeroIndicators from "./HeroIndicators";
import { HERO_SLIDES } from "./heroCarousel.data";

const HeroSection = () => {
  const navigate = useNavigate();
  const { handleProtectedAction } = useProtectedAction();
  const { openEnrolledCoursesModal } = useAuthModal();

  const [currentSlide, setCurrentSlide] = useState(0);

  const activeSlide = HERO_SLIDES[currentSlide];
  const canGoPrev = currentSlide > 0;
  const canGoNext = currentSlide < HERO_SLIDES.length - 1;

  const containerGapClass = currentSlide === 2 ? "gap-[74px]" : "gap-[31px]";

  const goPrev = () => {
    if (!canGoPrev) {
      return;
    }

    setCurrentSlide((previousSlide) => previousSlide - 1);
  };

  const goNext = () => {
    if (!canGoNext) {
      return;
    }

    setCurrentSlide((previousSlide) => previousSlide + 1);
  };

  const goToSlide = (slideIndex: number) => {
    if (slideIndex < 0 || slideIndex >= HERO_SLIDES.length) {
      return;
    }

    setCurrentSlide(slideIndex);
  };

  const handleHeroButtonClick = () => {
    if (activeSlide.action === "open-enrolled-courses") {
      handleProtectedAction(openEnrolledCoursesModal);
      return;
    }

    navigate("/courses/catalog");
  };

  return (
    <section className="py-[64px]">
      <div
        className={`relative flex h-[420px] w-[1566px] flex-col rounded-[30px] bg-cover bg-center bg-no-repeat text-white ${containerGapClass} ${activeSlide.containerPaddingClass}`}
        style={{ backgroundImage: `url(${activeSlide.image})` }}
      >
        <div className="flex w-[1470px] flex-col gap-[40px]">
          <div>
            <h1
              className={`text-[48px] font-bold leading-[100%] ${activeSlide.titleHeightClass}`}
            >
              {activeSlide.title}
            </h1>

            {activeSlide.description ? (
              <p className="mt-[12px] w-[1218px] text-[24px] font-light">
                {activeSlide.description}
              </p>
            ) : null}
          </div>

          <Button
            text={activeSlide.buttonText}
            classname={`h-[64px] text-[20px] cursor-pointer ${activeSlide.buttonWidthClass}`}
            onClick={handleHeroButtonClick}
          />
        </div>

        <div className="relative flex h-[54px] w-full items-center justify-center">
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
