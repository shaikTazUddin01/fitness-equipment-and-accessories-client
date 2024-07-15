import React from 'react';
import { useAppSelector } from '../redux/hooks/hooks';
// import { AddProductToCart } from '../redux/features/myCart/myCart.slice';

const Cart = () => {
const cartProduct=useAppSelector((state)=>state.products.products)

console.log(cartProduct);
    return (
        <div className='min-h-screen'>
            {/* {AddProductToCart.length} */}
        </div>
    );
};

export default Cart;