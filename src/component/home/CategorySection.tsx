import SectionTitle from "../shared/sectionTitle/SectionTitle";
import { useGetCategoryQuery } from "../../redux/features/category/category.api";
import { TCategory } from "../../Type";
import Spring from "../shared/Loading/Spring";

import { useNavigate } from "react-router-dom";
const CategorySection = () => {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  const navigate = useNavigate();

  if (isLoading) {
    return <Spring />;
  }

  const categories = data?.data;

  const handleNavigate = (categoryName: string) => {
    navigate("/products", { state: { category: categoryName } });
  };

  return (
    <div className="mt-16 text-center">
      <div className="">
        <SectionTitle
          heading="Featured Category"
          subHeading="Get Your Desired Product from Featured Category!"
        ></SectionTitle>
      </div>
      <div className="">
        <div className="grid grid-cols-8">
         
            {categories?.map((category: TCategory) => (
            
                <div className="border-r-[1px] shadow border-[#d8d8d8] hover:border-[#b0b0b0] hover:cursor-pointer bg-white text-black transform hover:shadow-lg transition-all duration-200 ease-in-out" onClick={()=>handleNavigate(category?.name)}>
                  <img
                    src={category?.image}
                    alt=""
                    className="h-32 w-full object-cover"
                  />
                  <h1 className=" py-3 text-sm px-2">{category?.name}</h1>
                </div>
              
            ))}
         
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
