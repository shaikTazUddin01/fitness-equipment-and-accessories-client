import { TProduct } from "../../Type";


const ProductCard = ({ product }: { product: TProduct }) => {
  const { _id, name, price,images } = product;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-10 pt-10 h-[150px]">
        <img
          src={images}
          alt={name}
          className="rounded-xl w-[95%]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>${price}</p>
        <div className="card-actions">
          <a href={`/productDetails/${_id}`}>
          <button className="px-3 py-2 rounded-md bg-primaryColor text-white shadow shadow-secondaryColor">View Details</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
