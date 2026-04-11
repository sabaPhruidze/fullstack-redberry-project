import CLOSE from "../../../assets/icons/authentification/ic_round-close.svg";
import DEVELOPMENT from "../../../assets/icons/courses/Icon Set=Development.svg";
import DESIGN from "../../../assets/icons/courses/Icon Set=Design.svg";
import BUSINESS from "../../../assets/icons/courses/Icon Set=Business.svg";
import DATA_SCIENCE from "../../../assets/icons/courses/Icon Set=Data Science.svg";
import MARKETING from "../../../assets/icons/courses/Icon Set=Marketing.svg";

import INSTRUCTOR from "../../../assets/images/catalog/instructor.jpg";
const Filter = () => {
  const CATEGORIES = [
    {
      id: 1,
      img: DEVELOPMENT,
      name: "Development",
    },
    {
      id: 2,
      img: DESIGN,
      name: "Design",
    },
    {
      id: 3,
      img: BUSINESS,
      name: "Business",
    },
    {
      id: 4,
      img: DATA_SCIENCE,
      name: "Data Science",
    },
    {
      id: 5,
      img: MARKETING,
      name: "Marketing",
    },
  ];
  const TOPICS = [
    {
      id: 1,
      name: "React",
    },
    {
      id: 2,
      name: "TypeScript",
    },
    {
      id: 3,
      name: "Phyton",
    },
    {
      id: 4,
      name: "UX/UI",
    },
    {
      id: 5,
      name: "Figma",
    },
    {
      id: 6,
      name: "JavaScript",
    },
    {
      id: 7,
      name: "Node.js",
    },
    {
      id: 8,
      name: "Machine Learning",
    },
    {
      id: 9,
      name: "Seo",
    },
    {
      id: 10,
      name: "Analytics",
    },
  ];
  const INSTRUCTORS = [
    {
      id: 1,
      img: INSTRUCTOR,
      name: "Marilyn Mango",
    },
    {
      id: 2,
      img: INSTRUCTOR,
      name: "Ryan Dorwart",
    },
    {
      id: 3,
      img: INSTRUCTOR,
      name: "Roger Calzoni",
    },
    {
      id: 4,
      img: INSTRUCTOR,
      name: "Zain Philips",
    },
  ];
  return (
    <div className="mt-[34px] w-[309px] h-[914px]">
      <div className="w-full h-[48px] flex flex-row items-center justify-between">
        <h2 className="text-[#0A0A0A] h-full w-[121px] font-[600] text-[40px] leading-[100%]">
          Filters
        </h2>
        <div className="w-[133px] h-[24px] flex flex-row justify-between items-center ">
          <p className="text-[#8A8A8A] font-[500] leading-[24px]">
            Clear All Filters
          </p>
          <img src={CLOSE} alt="close icon" className="w-[18px] h-[18px]" />
        </div>
      </div>
      <div className="w-full h-[179px] mt-[32px]">
        <h3 className="text-[#666666] font-[500] text-[18px] leading-[100%] w-full h-[22px]">
          Categories
        </h3>
        <div className="mt-[24px] w-full h-[133px] flex flex-row flex-wrap gap-[8px]">
          {CATEGORIES.map((item) => (
            <div
              key={item.id}
              className="px-[12px] py-[8px] gap-[10px] flex flex-row bg-white rounded-[12px]"
            >
              <img
                src={item.img}
                alt={`${item.name} icon`}
                className="w-[24px] h-[24px]"
              />
              <h4 className="text-[#666666] font-[500] leading-[24px]">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[229px] mt-[56px]">
        <h3 className="w-full h-[22px] text-[#666666] font-[500] text-[18px] leading-[100%]">
          Topics
        </h3>
        <div className="mt-[24px] w-full h-[133px] flex flex-row flex-wrap gap-[8px]">
          {TOPICS.map((item) => (
            <div
              key={item.id}
              className="px-[12px] py-[8px] gap-[10px] flex flex-row bg-white rounded-[12px]"
            >
              <h4 className="text-[#666666] font-[500] leading-[24px]">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[179px] h-[254px] mt-[56px] gap-[24px] flex flex-col">
        <h3 className="text-[#666666] font-[500] text-[18px] leading-[100%] w-[179px] h-[22px]">
          Instructor
        </h3>
        <div className="flex flex-col w-[179px] h-[208px] gap-[8px]">
          {INSTRUCTORS.map((item) => (
            <div
              key={item.id}
              className=" px-[12px] py-[8px] gap-[10px] flex flex-row bg-white rounded-[12px]"
            >
              <img
                src={item.img}
                alt={`${item.name} icon`}
                className="w-[24px] h-[24px]"
              />
              <h4 className="text-[#666666] font-[500] leading-[24px]">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
        <div className="border-t-[#ADADAD] border-t w-full h-[36px] ">
          <div className="mt-[16px] w-full h-[20px]">
            <p className="text-[#999999] font-[500] leading-[100%] text-[14px]">
              0 Filters Active
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
