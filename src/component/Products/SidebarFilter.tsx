import { useForm } from "react-hook-form";
import { useGetCategoryQuery } from "../../redux/features/category/category.api";
import Loading from "../shared/Loading/Loading";

import { useAppDispatch } from "../../redux/hooks/hooks";
import { categoryFilter } from "../../redux/features/products/categoryFilter.slice";
// import { useState } from "react";

const SidebarFilter = () => {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  const { register, handleSubmit } = useForm();
//   const [filtercat,setFilterCat]=useState();

  const dispatch = useAppDispatch();

  if (isLoading) {
    return <Loading></Loading>;
  }
  const filterByCategory = (data: any) => {
    // console.log(data);
    // setFilterCat(data)
    dispatch(categoryFilter({ categoryFilter: data }));
  };
// console.log(filtercat?.'Cardio Equipment');
  return (
    <div className="bg-white  w-full rounded-lg p-5">
      <h1 className="text-[20px] font-semibold">Categories</h1>
      <div className="divider mt-0"></div>
      <div>
        <form onChange={handleSubmit(filterByCategory)}>
          {data?.data?.map((category: Record<string, string>) => {
           
            return (
                
              <div className="flex items-center mb-2" key={category?._id}>
                <input
                  type="checkbox"
                  className="checkbox "
                  {...register(`${category?.name}`)}
                  
                />
                <label className="ml-2">{category?.name}</label>
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
};

export default SidebarFilter;
