import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// The core App function that provides the content

function App() {

  return (

    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </div>
      </div>
      
    </Router>
      
  );
}

export default App;
