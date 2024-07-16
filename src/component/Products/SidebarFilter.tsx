import { useForm } from "react-hook-form";
import { useGetCategoryQuery } from "../../redux/features/category/category.api";
import Loading from "../shared/Loading/Loading";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { categoryFilter } from "../../redux/features/products/categoryFilter.slice";

const SidebarFilter = () => {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  const { register, handleSubmit, setValue, getValues } = useForm();
  const dispatch = useAppDispatch();
  //get selected category
  const selectedCategory = useAppSelector(
    (state) => state.categoryFilter.categoris
  );

  if (isLoading) {
    return <Loading />;
  }

  const filterByCategory = (data: any) => {
    dispatch(categoryFilter({ categoryFilter: data }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setValue(name, checked);
    // console.log(name,checked);
    const currentValues = getValues();
    filterByCategory(currentValues);
    // console.log(currentValues)
  };

  return (
    <div className="bg-white w-full rounded-lg p-5">
      <h1 className="text-[20px] font-semibold">Categories</h1>
      <div className="divider mt-0"></div>
      <div>
        <form onSubmit={handleSubmit(filterByCategory)}>
          {data?.data?.map((category: Record<string, string>) => {
            return (
              <div className="flex items-center mb-2" key={category?._id}>
                <input
                  type="checkbox"
                  className="checkbox"
                  {...register(`${category?.name}`)}
                  checked={selectedCategory.includes(category?.name)}
                  onChange={handleCheckboxChange}
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
