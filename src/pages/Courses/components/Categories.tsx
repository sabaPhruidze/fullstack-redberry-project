// Renders catalog categories from backend data in the sidebar.
// Maps backend category icon slugs to existing local catalog icons.
import BUSINESS from "../../../assets/icons/courses/Icon Set=Business.svg";
import DATA_SCIENCE from "../../../assets/icons/courses/Icon Set=Data Science.svg";
import DESIGN from "../../../assets/icons/courses/Icon Set=Design.svg";
import DEVELOPMENT from "../../../assets/icons/courses/Icon Set=Development.svg";
import MARKETING from "../../../assets/icons/courses/Icon Set=Marketing.svg";
import useCategories from "../../../api/hooks/useCategories";

const getCategoryIcon = (icon: string) => {
  const normalizedIcon = icon.trim().toLowerCase().replaceAll("_", "-").replaceAll(" ", "-");

  switch (normalizedIcon) {
    case "development":
      return DEVELOPMENT;
    case "design":
      return DESIGN;
    case "business":
      return BUSINESS;
    case "marketing":
      return MARKETING;
    case "data-science":
      return DATA_SCIENCE;
    default:
      return "";
  }
};

const Categories = () => {
  const { data, isLoading, error } = useCategories();

  return (
    <div className="w-full mt-[32px]">
      <h3 className="text-[#666666] font-[500] text-[18px] leading-[100%] w-full h-[22px]">
        Categories
      </h3>
      {isLoading ? (
        <p className="mt-[24px] text-[14px] text-[#8A8A8A]">Loading...</p>
      ) : null}
      {error ? (
        <p className="mt-[24px] text-[14px] text-[#F4161A]">Failed to load.</p>
      ) : null}
      <div className="mt-[24px] w-full flex flex-row flex-wrap gap-[8px]">
        {data?.map((item) => {
          const iconSrc = getCategoryIcon(item.icon);

          return (
            <div
              key={item.id}
              className="px-[12px] py-[8px] gap-[10px] flex flex-row bg-white rounded-[12px]"
            >
              {iconSrc ? (
                <img
                  src={iconSrc}
                  alt={`${item.name} icon`}
                  className="w-[24px] h-[24px]"
                />
              ) : null}
              <h4 className="text-[#666666] font-[500] leading-[24px]">
                {item.name}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
