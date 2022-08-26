import './App.css';
import './css/gallery_v1_style.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from  './pages/Home'
import ShoppingBag from './components/ShoppingBag'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>            
            {/* only show routes (or separate pages) - see Header.js to see hashlinks in a SPA */}
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ShoppingBag />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
