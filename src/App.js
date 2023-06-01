import './App.css';
import Homepage from './component/pages/Homepage';
import About from './component/pages/About';
import Projects from './component/pages/Projects';
import Blogs from './component/pages/Blogs';
import Contact from './component/pages/Contact';

import Sidebar from './component/Sidebar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
