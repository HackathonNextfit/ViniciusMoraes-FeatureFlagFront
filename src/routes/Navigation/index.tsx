import { BrowserRouter, Routes, Route } from "react-router-dom";    
import Inicio from "../../pages/Inicio";    

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
