import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

import { sortProduct } from "../../redux/features/products/productSort.slice";
import { useEffect } from "react";

// type TSort={
// sort:string
// }

const SortByPrice = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useAppDispatch();

  //get reset value
  const resetFilter = useAppSelector((state) => state.resetFilter.reset);

  const handleSortByPrice = (data: any) => {
    dispatch(sortProduct({ sort: data?.sort }));
  };

  useEffect(() => {
    if (resetFilter === "reset") {
      reset();
    }
  }, [reset, resetFilter]);
  return (
    <form action="" onChange={handleSubmit(handleSortByPrice)}>
      <select
        className="select select-success w-full md:w-[150px] max-w-xs border-primaryColor "
        {...register("sort")}
      >
        <option defaultValue="">Sort By Price</option>
        <option value={"asc"}>Price(low to High)</option>
        <option value={"dsc"}>Price(High to Low)</option>
      </select>
    </form>
  );
};

export default SortByPrice;
