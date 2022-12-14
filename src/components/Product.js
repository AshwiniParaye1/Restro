import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../pages/CartContext';


const Product = (props) => {

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

    // const cart = {
    //     items: {

    //       '60c67bdff5ee510015f3dda8': 2,
    //       '60c67b95f5ee510015f3dda5': 3

    //     },

    //     totalItems: 5

    // }
  
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
                <button onClick={ (e) => { addToCart(e, product) } }
                className=' bg-orange-500 text-white py-1 px-4 rounded-full font-bold hover:bg-orange-700'>Add</button>
            </div>

           
    
    </div>
    </Link>
  )
}

export default Product
