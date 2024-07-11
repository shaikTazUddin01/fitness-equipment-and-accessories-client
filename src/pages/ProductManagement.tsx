
import AddProductModal from "../component/ProductManagement/AddProductModal";
import ProductsRow from "../component/ProductManagement/ProductsRow";
import Loading from "../component/shared/Loading/Loading";
import { useGetProductsQuery } from "../redux/features/products/products.api";
import { TProduct } from "../Type";

const ProductManagement = () => {
  const { data, isLoading } = useGetProductsQuery(undefined );

  const products = data?.data;
// console.log("refatch--->",refetch());
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="min-h-screen py-20">
      <div className="bg-white p-3 rounded-lg mb-10 text-end flex justify-center gap-20 items-center">
        <h1 className="text-xl font-semibold">
          Click This Button To Create a New Product
        </h1>

        {/* add product */}
       <AddProductModal></AddProductModal>
      </div>

      <div className="overflow-x-auto">
        <table className="table text-white border text-center">
          {/* head */}
          <thead className="text-white">
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
