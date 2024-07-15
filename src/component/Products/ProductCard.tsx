import { TProduct } from "../../Type";
import ReactRating from "../shared/rating/ReactRating";

const ProductCard = ({ product }: { product: TProduct }) => {
  const { _id, name, price,images } = product;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-10 pt-10 h-[150px]">
        <img
          src={images}
          alt={name}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>${price}</p>
        <div className="card-actions">
          <a href={`/productDetails/${_id}`}>
          <button className="btn btn-primary">View Details</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
