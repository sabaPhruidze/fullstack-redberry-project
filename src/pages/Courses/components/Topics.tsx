// Renders catalog topics from backend data for the sidebar.
// Keeps the existing topic chip layout without static mock values.
import useTopics from "../../../api/hooks/useTopics";

const Topics = () => {
  const { data, isLoading, error } = useTopics();

  return (
    <div className="w-full mt-[56px]">
      <h3 className="w-full h-[22px] text-[#666666] font-[500] text-[18px] leading-[100%]">
        Topics
      </h3>
      {isLoading ? (
        <p className="mt-[24px] text-[14px] text-[#8A8A8A]">Loading...</p>
      ) : null}
      {error ? (
        <p className="mt-[24px] text-[14px] text-[#F4161A]">Failed to load.</p>
      ) : null}
      <div className="mt-[24px] w-full flex flex-row flex-wrap gap-[8px]">
        {data?.map((item) => (
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
  );
};

export default Topics;
