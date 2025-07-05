import { BrowserRouter, Routes, Route } from "react-router-dom";    
import Inicio from "../../pages/Inicio";   
import Login from "../../pages/Login";  

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
