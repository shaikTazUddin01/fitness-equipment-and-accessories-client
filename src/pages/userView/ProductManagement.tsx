import AddProductModal from "../../component/ProductManagement/AddProductModal";
import ProductsRow from "../../component/ProductManagement/ProductsRow";
import Spring from "../../component/shared/Loading/Spring";
import { useGetProductsQuery } from "../../redux/features/products/products.api";
import { TProduct } from "../../Type";


const ProductManagement = () => {
  const { data, isLoading } = useGetProductsQuery({});

  const products = data?.data;
  console.log(products);
// console.log("refatch--->",refetch());
  if (isLoading) {
    return <Spring></Spring>;
  }
  return (
    <div className="min-h-screen py-20 px-3 xl:px-0">
      <div className="bg-white p-3 rounded-lg mb-10 text-end flex flex-col md:flex-row justify-center gap-2 md:gap-20 items-center">
        <h1 className=" text-xl font-semibold text-center md:text-left">
          Click This Button To Create a New Product
        </h1>

        {/* add product */}
       <AddProductModal></AddProductModal>
      </div>

      <div className="overflow-x-auto ">
        <table className="table  border text-center">
          {/* head */}
          <thead className="">
            <tr className="font-bold text-[16px]">
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Stock Quentity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product: TProduct) => (
              <ProductsRow key={product?._id} product={product}></ProductsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
