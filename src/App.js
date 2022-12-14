import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
// import About from './pages/About.js';
import Navigation from './components/Navigation';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      
      <Router>
        
        <Navigation />

        <Routes>
          <Route path="/" element={ <Home /> }></Route>
          {/* <Route path="/About" element={ <About /> }></Route> */}
          <Route path="/products" element={ <Products /> }></Route>
          <Route path="/cart" element={ <Cart /> }></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
