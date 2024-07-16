import { useForm } from "react-hook-form";
import { useGetCategoryQuery } from "../../redux/features/category/category.api";
import Loading from "../shared/Loading/Loading";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { categoryFilter } from "../../redux/features/products/categoryFilter.slice";
import { sortProduct } from "../../redux/features/products/productSort.slice";
import { searchProduct } from "../../redux/features/products/searchProduct.slice";
import { resetFilter } from "../../redux/features/products/resetFilter.slice";
import Swal from "sweetalert2";
import { toast } from "sonner";

const SidebarFilter = () => {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  const { register, handleSubmit, setValue, getValues, reset } = useForm();
  const dispatch = useAppDispatch();
  //get selected category
  const selectedCategory = useAppSelector(
    (state) => state.categoryFilter.categoris
  );

  if (isLoading) {
    return <Loading />;
  }

  const filterByCategory = (data: any) => {
    dispatch(categoryFilter({ categoris: data }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setValue(name, checked);
    // console.log(name,checked);
    const currentValues = getValues();
    filterByCategory(currentValues);
    // console.log(currentValues)
  };

  const handleResetAllFilter = () => {

    Swal.fire({
      title: "Are you sure?",
      text: "To Reset All Filter",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reset!"
    }).then((result) => {
      if (result.isConfirmed) {
        reset();
        dispatch(resetFilter("reset"));
        dispatch(categoryFilter({ categoris: [] }));
        dispatch(sortProduct({ sort: " " }));
        dispatch(searchProduct({ searchItem: " " }));
        toast.success("Clear Filter is Success",{duration:700})
      }
    });




   
  };

  return (
    <div>
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
      <div>
        <button
          className="btn btn-warning w-full mt-5 text-[16px]"
          onClick={handleResetAllFilter}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default SidebarFilter;
