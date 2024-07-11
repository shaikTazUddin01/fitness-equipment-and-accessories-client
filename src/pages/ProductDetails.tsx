import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../component/shared/Loading/Loading";
import { TProduct } from "../Type";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/features/myCart/myCart.slice";
import { toast } from "sonner";
const ProductDetails = () => {
  const { id } = useParams();
  //   console.log(id);
  const [product, setProduct] = useState<TProduct | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const product = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/product/${id}`);
        const data = await res.json();
        setProduct(data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    product();
  }, [id]);

  if (!product) {
    return <Loading></Loading>;
  }
  const handleAddToCart = () => {
    
    dispatch(addProduct(product));
    toast.success("This Product is added to cart",{
      duration:1000
    })
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{product?.name}</h1>
            <p className="py-6">{product?.detail}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleAddToCart()}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
