import SectionTitle from "../shared/sectionTitle/SectionTitle";
import { useGetCategoryQuery } from "../../redux/features/category/category.api";
import { TCategory } from "../../Type";
// import { useNavigate } from "react-router-dom";
import Spring from "../shared/Loading/Spring";

const CategorySection = () => {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  // const navigate = useNavigate();

  if (isLoading) {
    return <Spring />;
  }

  const categories = data?.data;

  // const handleNavigate = (categoryName: string) => {
  //   navigate("/products", { state: { category: categoryName } });
  // };

  return (
    <div className="mt-16 text-center">
      <div className="text-secondaryColor">
        <SectionTitle
          heading="exclusive"
          subHeading="Our Categories"
        ></SectionTitle>
      </div>
      <div className="mt-5">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 rounded-lg">
          {categories?.map((category: TCategory) => (
          
             <div className="border">
                  <img src={category?.image} alt="" className="h-32 w-full object-cover"/>
                  <h1 className="text-white py-3">{category?.name}</h1>
             </div>
              
          
          ))}
          </div>
       
      </div>
    </div>
  );
};

export default CategorySection;
