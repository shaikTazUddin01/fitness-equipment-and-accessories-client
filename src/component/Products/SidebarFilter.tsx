// import { useForm } from "react-hook-form";
import { useGetCategoryQuery } from "../../redux/features/category/category.api";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { categoryFilter } from "../../redux/features/products/categoryFilter.slice";
import Spring from "../shared/Loading/Spring";
import { TCategory } from "../../Type";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SidebarFilter = () => {
  const { data: categories, isLoading } = useGetCategoryQuery(undefined);
  const dispatch = useAppDispatch();
  //get selected category

  if (isLoading) {
    return <Spring />;
  }

  const filterByCategory = (data: any) => {
    dispatch(categoryFilter(data));
  };

  return (
    <div>
      <div className="bg-white w-full rounded-lg p-5">
        <h1 className="text-[20px] font-semibold">Categories</h1>
        <div className="divider mt-0"></div>
        <div className="space-y-2">
          {categories?.data?.map((category: TCategory) => (
            <a href={`/products/${category?.name}`} key={category?._id}>
              <p
                className="hover:text-textSecondary"
                onClick={() => filterByCategory(category?.name)}
              >
                {" "}
                #{category?.name}
              </p>
            </a>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SidebarFilter;
