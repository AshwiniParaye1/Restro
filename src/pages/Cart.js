import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';


const Cart = () => {

  let total = 0;
  const [ products, setProducts ] = useState([]);
  const { cart, setCart } = useContext( CartContext )
  console.log(cart)

  const [ priceFetched, togglePriceFetched ] = useState(false);

  useEffect(() => {

    if (!cart.items) {
      return;
    }
    if(priceFetched){
        return;
    }

    console.log('cart', Object.keys(cart.items));
    fetch('https://star-spark-pasta.glitch.me/api/products/cart-items', {

      method: 'POST',
      headers: {

        'Content-Type': 'application/json'

      },

      body: JSON.stringify({ids: Object.keys(cart.items)})


    }).then(res => res.json())
    .then(products => {

      setProducts(products);
      togglePriceFetched(true);

    })

  }, [cart, priceFetched]);

  const getQty = (productId) => {

      return cart.items[productId];    //returning the quantity of products which we are adding

  }


  const increament = (productId) => {

      const existingQty = cart.items[productId];
      const _cart = {...cart};
      _cart.items[productId] = existingQty + 1;
      _cart.totalItems += 1;
      setCart(_cart);


  }

  const decreament = (productId) => {

    const existingQty = cart.items[productId];
    if (existingQty === 1){
      return;
    }
    const _cart = {...cart};
    _cart.items[productId] = existingQty - 1;
    _cart.totalItems -= 1;
    setCart(_cart);


}

const getSum = (productId, price) => {

  const sum = price * getQty(productId);
  total += sum;
  return sum;

}


  const handleDelete = (productId) => {

    const _cart = {...cart};    //cloning the cart using spread operator(...)
    const qty = _cart.items[productId];
    delete _cart.items[productId];
    _cart.totalItems -= qty;
    setCart(_cart);
    const updatedProductsList = products.filter( (product) => product._id !== productId );
    setProducts(updatedProductsList);

  }

  const handlePlaceOrder = () => {

    window.alert('Your Order Has Been Placed Successfully!');
    setProducts([]);
    setCart({});


  }

  return (

    products.length ?

    <div className='container mx-auto lg:w-1/2 w-full pb-24'>
      
      <h1 className='my-12 font-bold'>Cart Items</h1>
      <ul>

        {

            products.map(product => {
              return (
                <li className='mb-12' key={product._id}>
                    <div className='flex items-center justify-between'>

                        <div className='flex items-center'>
                            <img className='h-16' src={product.image} alt='pizza' />
                            <span className='font-bold ml-4 w-48'>{product.name}</span>
                        </div>

                        <div className='flex items-center'>
                          <button onClick={() => { decreament(product._id) }} className='bg-orange-500 px-4 py-2 rounded-full leading-none font-bold'>-</button>
                          <b className='px-4'>{ getQty(product._id) }</b>
                          <button onClick={() => { increament(product._id) }} className='bg-orange-500 px-4 py-2 rounded-full leading-none font-bold'>+</button>
                        </div>

                        <span>??? { getSum(product._id, product.price) }</span>

                        <button onClick={ () => { handleDelete(product._id) } } className='bg-red-600 px-4 py-2 rounded-full leading-none text-white font-bold'>Delete</button>

                    </div>
                </li>
              )
            })

        }

        

      </ul>
          <hr className='my-6' />

          <div className='text-right'>

              <b className='mr-3'>Grand Total:</b>  ??? {total}
            
          </div>

          <div className='text-right mt-6'>

              <button onClick={handlePlaceOrder} className='bg-orange-500 px-4 py-2 rounded-full leading none text-white font-bold'>Place Order</button>

          </div>

    </div>

    :         //checking if products are added or not, when no products are added Empty Cart img
              //will be shown
    <img className='mx-auto w-1/2 mt-12' src='/images/empty-cart.png' alt='empty-cart' />
  )
}

export default Cart
