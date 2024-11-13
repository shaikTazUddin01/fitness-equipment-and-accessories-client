// import SearchProduct from "./SearchProduct";
import ShowProduct from "./ShowProductPerPage";
import SortByPrice from "./SortByPrice";

const FIlterProduct = () => {
  return (
    <div className="bg-white py-2 px-5 flex flex-col md:flex-row justify-center md:justify-between items-center rounded-lg gap-2 ">
      {/* search area */}
      <div className="w-full ">
        <p className="font-medium">All In One</p>
        {/* <SearchProduct searchboxWidthps={80}></SearchProduct> */}
      </div>

      <div className="w-full  md:text-end flex items-center justify-end gap-5">
        <ShowProduct/>
        <SortByPrice></SortByPrice>
      </div>
    </div>
  );
};

export default FIlterProduct;
