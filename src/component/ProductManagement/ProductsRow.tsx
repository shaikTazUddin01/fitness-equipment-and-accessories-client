import { TProduct } from "../../Type";

const ProductsRow = ({ product }: { product: TProduct }) => {
  const {images,name,price,_id,category}=product
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
      <td>
      <div className="flex gap-2 justify-center items-center">
        <button className="btn btn-error btn-xs">Delete</button>
        <button className="btn btn-success btn-xs">Edit</button>
      </div>
      </td>
    </tr>
  );
};

export default ProductsRow;
