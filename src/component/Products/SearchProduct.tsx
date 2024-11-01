import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { searchProduct } from "../../redux/features/products/searchProduct.slice";
import debounce from 'lodash/debounce';

const SearchProduct = () => {
  const { register, handleSubmit,reset } = useForm();

  const dispatch = useAppDispatch();

  //get reset value
  const resetFilter=useAppSelector((state)=>state.resetFilter.reset)

  // Debounced search handler
  const debouncedSearch = useCallback(
    debounce((data) => {
      dispatch(searchProduct({ searchItem: data.searchItem }));
    }, 200), 
    [dispatch]
  );


// handle search
  const handleSearch = (data: any) => {
    // dispatch(searchProduct({ searchItem: data?.searchItem }));
    debouncedSearch(data)
  };
  //reset search field
  useEffect(()=>{
    if (resetFilter ==="reset") {
      reset()
  }
  },[reset,resetFilter])
  return (
    <form action="" className="flex gap-2" onClick={handleSubmit(handleSearch)}>
      <div className="form-control w-[70%]">
        <input
          type="text"
          placeholder="Search Here..."
          className="input input-bordered border-textSecondary"
          {...register("searchItem")}
        />
      </div>
      <button
        type="submit"
        className="bg-textSecondary px-4 hover:bg-hoverSecondart rounded-lg text-white "
      >
        Search
      </button>
    </form>
  );
};

export default SearchProduct;
