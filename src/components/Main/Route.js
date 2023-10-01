import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import About from "./About/About";
function Routee() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/About" element={<About />} />
      
      </Routes>
    </div>
  );
}

export default Routee;
