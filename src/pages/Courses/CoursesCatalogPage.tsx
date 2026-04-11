import MainLayout from "../../layouts/MainLayout";
import Breadcrumb from "./components/Breadcrumb";
import Filter from "./components/Filter";
const CoursesCatalogPage = () => {
  return (
    <MainLayout>
      <div className="w-[1920px] px-[177px] pt-[69.5px] pb-[161px]">
        <Breadcrumb />
        <Filter />
      </div>
    </MainLayout>
  );
};

export default CoursesCatalogPage;
