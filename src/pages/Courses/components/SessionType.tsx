import { useState } from "react";
import THREE from "../../../assets/icons/courses/Icon Set=Three.svg";
import DESKTOP from "../../../assets/icons/courses/Icon Set=Desktop.svg?react";
import USERS from "../../../assets/icons/courses/Icon Set=Users.svg?react";
import HYBRID from "../../../assets/icons/courses/Icon Set=Intersect.svg?react";
import ARROW_DOWN from "../../../assets/icons/courses/glyphs_arrow-bold.svg?react";
import LOCATION from "../../../assets/icons/courses/location.svg?react";
import WARNING from "../../../assets/icons/courses/warning.svg";

const SessionType = () => {
  const [selectedSessionId, setSelectedSessionId] = useState<number | null>(null);

  const data: {
    id: number;
    Icon: typeof DESKTOP;
    title: string;
    description: string;
    additional: string;
    remaining: string;
  }[] = [
    {
      id: 1,
      Icon: DESKTOP,
      title: "Online",
      description: "Google Meet",
      additional: "Included",
      remaining: "50 Seats Available",
    },
    {
      id: 2,
      Icon: USERS,
      title: "In-Person",
      description: "Chavchavadze St.34",
      additional: "+ $30",
      remaining: "Only 3 Seats Remaining",
    },
    {
      id: 3,
      Icon: HYBRID,
      title: "Hybrid",
      description: "Chavchavadze St.34",
      additional: "+ $50",
      remaining: "130 Seats Available",
    },
  ];
  return (
    <div className="w-full h-[202px] flex flex-col gap-[18px]">
      <div className="w-full h-[30px] flex flex-row justify-between items-center">
        <img src={THREE} alt="one icon" className="w-[28px] h-[28px]" />
        <div className="w-[457px] h-[30px] ml-[8px] mr-[7px] text-left">
          <h2 className="text-[#130E67] font-[600] text-[24px] leading-[100%]">
            Session Type
          </h2>
        </div>
        <ARROW_DOWN
          aria-hidden
          className="w-[28px] h-[28px] [&_path]:stroke-[#130E67]"
        />
      </div>
      <div className="w-full h-[155px] flex flex-row gap-[8px]">
        {data.map((item) => {
          const isSelected = selectedSessionId === item.id;
          const { Icon } = item;

          return (
            <div
              key={item.id}
              className="w-[171.3px] h-[154px] flex flex-col gap-[8px]"
            >
              <button
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedSessionId(item.id)}
                className={`text-center w-full h-[131px] rounded-[12px] px-[20px] py-[15px] flex flex-col items-center border ${
                  isSelected
                    ? "border-[#958FEF] bg-[#DDDBFA]"
                    : "border-[#D1D1D1] bg-white"
                }`}
              >
                <Icon
                  aria-hidden
                  className={`w-[26px] h-[26px] [&_path]:fill-current ${
                    isSelected
                      ? "text-[#4F46E5] [&_path[stroke]]:stroke-[#4F46E5]"
                      : "text-[#525252] [&_path[stroke]]:stroke-[#666666]"
                  }`}
                />
                <h3
                  className={`my-[6px] w-[131.33px] h-[19px] font-[600] leading-[100%] ${
                    isSelected ? "text-[#4F46E5]" : "text-[#525252]"
                  }`}
                >
                  {item.title}
                </h3>
                <div
                  className={`w-[131.3px] h-[15px] font-[400] text-[12px] leading-[100%] flex flex-row justify-evenly items-center ${
                    isSelected ? "text-[#4F46E5]" : "text-[#525252]"
                  }`}
                >
                  {item.description === "Chavchavadze St.34" ? (
                    <LOCATION
                      aria-hidden
                      className={`w-[12px] h-[12px] [&_path]:fill-current ${
                        isSelected ? "text-[#4F46E5]" : "text-[#525252]"
                      }`}
                    />
                  ) : null}

                  <p>{item.description}</p>
                </div>
                <p className="mt-[12px] text-[#736BEA] text-[14px] font-[500] leading-[100%]">
                  {item.additional}
                </p>
              </button>
              <div className="text-center  font-[500] text-[12px] leading-[100%] text-[12px]">
                {item.remaining === "Only 3 Seats Remaining" ? (
                  <div className="flex flex-row h-[15px] items-center justify-center gap-[4px]">
                    <img
                      src={WARNING}
                      alt="warning icon"
                      className="w-[16px] h-[16px]"
                    />
                    <p className="text-[#F4A316]">{item.remaining}</p>
                  </div>
                ) : (
                  <p className="text-[#3D3D3D]">{item.remaining}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SessionType;
