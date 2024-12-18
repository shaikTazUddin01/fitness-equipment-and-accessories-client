import SectionTitle from "../shared/sectionTitle/SectionTitle";
import { useGetCategoryQuery } from "../../redux/features/category/category.api";
import { TCategory } from "../../Type";
// import Spring from "../shared/Loading/Spring";

import { useNavigate } from "react-router-dom";
import CategoryCardLoader from "../shared/Loading/CategoryCardLoader";
const CategorySection = () => {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  const navigate = useNavigate();

 

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
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-3">
         
            {
            isLoading?
            Array.from({length:7})?.map((_,idx)=> <CategoryCardLoader key={idx}/>)
           
            
           : categories?.slice(0,7)?.map((category: TCategory) => (
              <a href={`/products/${category?.name}`} key={category?._id} >
            
                <div className=" shadow border-[#d8d8d8] hover:border-[#b0b0b0] hover:cursor-pointer bg-white text-black transform hover:shadow-xl transition-all duration-200 ease-in-out rounded-md p-2 min-h-[207px]" onClick={()=>handleNavigate(category?.name)}>
                  <img
                    src={category?.image}
                    alt=""
                    className="h-32 w-full object-cover"
                  />
                  <h1 className=" py-3 text-sm px-2">{category?.name}</h1>
                </div>
                </a>
            ))}
         
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
