import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';


const SingleProduct = () => {

    const [singleProduct, setSingleProduct] = useState({})
    const params = useParams();
    // console.log(params)

    const navigate = useNavigate();

    useEffect(() => {

      fetch(`https://star-spark-pasta.glitch.me/api/products/${params._id}`)
      .then(response => response.json())
      .then(product => {
        setSingleProduct(product);
        
      })

    }, [params._id]);


    

  return (
    <div className='container mx-auto mt-12'>
    <button className='mb-12 font-bold bg-orange-500 text-white py-1 px-4 rounded-full font-bold hover:bg-orange-700' onClick={ () => { navigate(-1) } }>Back</button>
      <div className='flex '>
        <img src={singleProduct.image} alt='pizza' />
        <div className='ml-16'>
         <h1 className='text-xl font-bold'>{singleProduct.name}</h1> 
         <div className='text-md'>{singleProduct.size}</div>
         <div className='font-bold mt-2'>₹ {singleProduct.price}</div>
         <button className='bg-orange-500 py-1 px-8 rounded-full font-bold mt-4 text-white hover:bg-orange-700'>Add to cart</button>
        </div>

      </div>
        
    </div>
  )
}

export default SingleProduct
