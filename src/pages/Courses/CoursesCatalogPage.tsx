import MainLayout from "../../layouts/MainLayout";
import Breadcrumb from "./components/Breadcrumb";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
const CoursesCatalogPage = () => {
  return (
    <MainLayout>
      <div className="w-[1920px] px-[177px] pt-[69.5px] pb-[161px]">
        <Breadcrumb />
        <div className="flex flex-row mt-[34px] gap-[90px]">
          <Filter />
          <Cards />
        </div>
      </div>
    </MainLayout>
  );
};

export default CoursesCatalogPage;
