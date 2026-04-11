import CLOSE from "../../../assets/icons/authentification/ic_round-close.svg";

import Categories from "./Categories";
import Instructor from "./Instructor";
import Topics from "./Topics";
const Filter = () => {
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
          <img
            src={CLOSE}
            alt="close icon"
            className="w-[18px] h-[18px] translate-y-0.5"
          />
        </div>
      </div>
      <Categories />
      <Topics />
      <Instructor />
    </div>
  );
};

export default Filter;
