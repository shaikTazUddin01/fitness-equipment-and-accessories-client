import { useDeleteProductMutation } from "../../redux/features/products/products.api";
import { TProduct } from "../../Type";

const ProductsRow = ({ product }: { product: TProduct }) => {
  const { images, name, price, _id, category, stockQuentity } = product;

  const [deleteProductItem] = useDeleteProductMutation();

  const handleDelete = (id: string) => {
    deleteProductItem(id);
    // const deleteProduct = async () => {
    //   const res=await fetch(`http://localhost:3000/api/product/${id}`,{
    //     method:'delete'
    //   })
    //   console.log(res);
    // };
    // deleteProduct();
  };
  return (
    <tr className="">
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img
              src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{name}</div>
      </td>
      <td>${price}</td>
      <td>{category}</td>
      <td>{stockQuentity}</td>
      <td>
        <div className="flex gap-2 justify-center items-center">
          <button
            className="btn btn-error btn-xs"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
          <button className="btn btn-success btn-xs">Edit</button>
        </div>
      </td>
    </tr>
  );
};

export default ProductsRow;
