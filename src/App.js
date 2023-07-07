import {Routes, Route} from "react-router-dom"
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Coaching } from "./Pages/Coaching";
import { Ourvision } from './Pages/Ourvision';
import "./index.css";

function App() {
  return (
    <div className="pageWrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Ourvision />} />
        <Route path="/coaching" element={<Coaching/>}/>
      </Routes>
    </div>
  );
}

export default App;