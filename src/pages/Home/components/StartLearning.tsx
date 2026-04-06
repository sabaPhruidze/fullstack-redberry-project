import useFeaturedCourses from "../../../api/hooks/useFeaturedCourses";
import STAR from "../../../assets/icons/home/Star.svg";
import HALF_STAR from "../../../assets/icons/home/Star (1).svg";
import EMPTY_STAR from "../../../assets/icons/home/Star (2).svg";
import Button from "../../../components/ui/Button";
const StartLearning = () => {
  const { data, isLoading, isError, error } = useFeaturedCourses();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <p>{error instanceof Error ? error.message : "Something went wrong"}</p>
    );
  }
  return (
    <section>
      <div className="w-[1566px] h-[739px]">
        <h2 className="text-redberry-text-black w-[538px] h-[48px] font-semibold text-[40px] leading-none">
          Start Learning Today
        </h2>
        <p className="text-redberry-text-gray-medium font-[500] text-[18px] mt-[6px] mb-[32px]">
          Choose from our most popular courses and begin your journey
        </p>
        <div className="w-full h-[576px] flex flex-row gap-[24px]">
          {data?.map((course) => (
            <div
              key={course.id}
              className="w-[506px] h-[576px] p-[20px] rounded-[12px] bg-white"
            >
              <img
                src={course.image}
                alt="course image"
                className="w-full h-[262px]"
              />
              <div className="mt-[16px] mb-[12px] flex flex-row justify-between h-[18px] w-full">
                <p className="leading-[100%] w-[159px] h-[17px] font-[500] text-[14px] text-[#8A8A8A]">
                  {course.instructor.name}
                </p>
                <div className="flex flex-row items-center gap-[4px]">
                  <img
                    src={
                      course.avgRating === null
                        ? EMPTY_STAR
                        : course.avgRating <= 4
                          ? HALF_STAR
                          : STAR
                    }
                    alt="star icon"
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-[500] text-[14px] leading-[100%] text-redberry-text-gray-light">
                    {course.avgRating || 0}
                  </p>
                </div>
              </div>
              <h2 className="mb-[16px] w-full leading-[100%] font-[600] text-[24px] text-[#141414]">
                {course.title}
              </h2>
              <p className="mb-[24px] w-[412px] h-[96px] font-[500] text-[16px] text-[#666666]">
                {course.description}
              </p>
              <div className="flex flex-row w-full h-[58px] justify-between items-center">
                <div className="w-[167px] h-full flex flex-row items-center gap-[8px]">
                  <p className="font-[500] text-[12px] leading-none text-[#8A8A8A]">
                    Starting from
                  </p>
                  <p className="font-[600] text-[32px] leading-none text-[#141414]">
                    ${Number(course.basePrice)}
                  </p>
                </div>
                <Button text="Details" classname="text-[#F5F5F5]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartLearning;
