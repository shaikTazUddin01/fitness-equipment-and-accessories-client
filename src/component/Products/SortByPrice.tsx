import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks/hooks";

import { sortProduct } from "../../redux/features/products/productSort.slice";

// type TSort={
// sort:string
// }

const SortByPrice = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  const handleSortByPrice = (data: any) => {
    // console.log("gello");
    // setSortByPrice(val)
    dispatch(sortProduct({ sort: data?.sort }));
    // console.log(data);
  };
  return (
    <form action="" onChange={handleSubmit(handleSortByPrice)}>
      <select
        className="select select-primary w-[150px] max-w-xs border-primaryColor"
        {...register("sort")}
       
      >
        <option  defaultValue="">
          Sort By Price
        </option>
        <option value={"asc"}>Price(low to High)</option>
        <option value={"dsc"}>Price(High to Low)</option>
      </select>
    </form>
  );
};

export default SortByPrice;
