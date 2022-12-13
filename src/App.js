import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      
      <Router>
        
        <Navigation />

        <Routes>
          <Route path="/" element={ <Home /> } exact></Route>
          <Route path="/About" element={ <About /> }></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
