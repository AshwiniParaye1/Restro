import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../pages/CartContext';


const Product = (props) => {

  const [isAdding, setIsAdding] = useState(false);

  const {cart, setCart} = useContext(CartContext)
  
  const {product} = props;

  const addToCart = (e, product) => {
    e.preventDefault();
    console.log(product);

    let _cart = {...cart};
    if (!_cart.items) {

      _cart.items = {}

    }
    if (_cart.items[product._id]) {
     
      _cart.items[product._id] =  _cart.items[product._id] + 1;


    } else {

      _cart.items[product._id] = 1;

    }

    if(!_cart.totalItems){

      _cart.totalItems = 0;

    }


    _cart.totalItems += 1;

    console.log(_cart)
    setCart(_cart);

    setIsAdding(true);
    setTimeout (() => {

        setIsAdding(false);
    }, 500);   //after 1/2 sec isAdding will be false
  
  }

  


  return (
    <Link to={`/products/${product._id}`}>
    <div>
            <img  src={product.image} alt='pizza' />
            <div className='text-center'>
                <h2 className='text-lg font-bold py-2'>{product.name}</h2>
                <span className='bg-gray-200 my-1 rounded-full text-sm px-4'>{product.size}</span>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <span>₹ {product.price}</span>
                <button disabled={isAdding}  onClick={ (e) => { addToCart(e, product) } }
                className={`${isAdding ? 'bg-green-500' : 'bg-orange-500' } text-white py-1 px-4 rounded-full font-bold `}>Add{isAdding ? 'ed' : ''}</button>
            </div>

          
    </div>
    </Link>
  )
}

export default Product
