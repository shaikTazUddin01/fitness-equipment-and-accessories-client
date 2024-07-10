
// import ProductsRow from "../component/ProductManagement/ProductsRow";
// import Loading from "../component/shared/Loading/Loading";
// import { useGetProductsQuery } from "../redux/features/products/products.api";
// import { TProduct } from "../Type";


// const ProductManagement = () => {
//   const { data, isLoading } = useGetProductsQuery(undefined);

//   const products=data?.data

//   if (isLoading) {
//     return <Loading></Loading>;
//   }
//   return (
//     <div className="min-h-screen py-20">
//       <div className="overflow-x-auto">
//         <table className="table text-white border">
//           {/* head */}
//           <thead className="text-white">
//             <tr>
//               <th>Image</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Category</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//           {products?.map((product: TProduct) => (
//           <ProductsRow key={product?._id} product={product} ></ProductsRow>
//         ))}
           
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ProductManagement;
