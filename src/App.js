import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'
import About from './components/About';
import Vision from './components/Vision';
import Office from './components/Office';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Values from './components/Values';
function App() {
  return (
    <BrowserRouter>
      <div className='w-screen h-screen flex flex-col overflow-auto'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vision" element={<Vision />} />
          <Route path='values' element={<Values />} />
          <Route path='office' element={<Office />} />
        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;
