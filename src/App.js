import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
// import About from './pages/About.js';
import Navigation from './components/Navigation';
import ProductsPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import { CartContext } from './pages/CartContext';
import { useEffect, useState } from 'react';



function App() {

  const [ cart, setCart ] = useState({});

  //fetch cart from local.storage

  useEffect (() => {

    const cart = window.localStorage.getItem('cart');
    setCart(JSON.parse(cart));

  }, []);

  useEffect (() => {

    window.localStorage.setItem('cart', JSON.stringify(cart));
    

  }, [cart]);

  // console.log(setCart)

  return (
    <div>
      
      <Router>
        
       <CartContext.Provider value={{cart, setCart}}>

       <Navigation />

          <Routes>

                <Route path="/" exact element={ <Home  /> }></Route>
                {/* <Route path="/About" element={ <About /> }></Route> */}
                <Route path="/products" exact element={ <ProductsPage /> }></Route>
                <Route path="/products/:_id" element={ <SingleProduct /> }></Route>
                <Route path="/cart" element={ <Cart /> }></Route>
            

          </Routes>
       </CartContext.Provider>
      </Router>
    </div>
  );
}

export default App;
