import React from 'react'
import ProductsInfo from './ProductsInfo';

const Product = (props) => {
  
  // const [addButton,]

  return (
    <div>
            <img  src={props.image} alt='pizza' />
            <div className='text-center'>
                <h2 className='text-lg font-bold py-2'>{props.name}</h2>
                <span className='bg-gray-200 my-1 rounded-full text-sm px-4'>{props.size}</span>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <span>₹ {props.price}</span>
                <button className=' bg-orange-500 text-white py-1 px-4 rounded-full font-bold'>Add</button>
            </div>

           
    
    </div>
  )
}

export default Product
