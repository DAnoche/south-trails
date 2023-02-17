import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import NotFound from "./404";
import Home from "./Home";
import Gallery from "./Gallery";
import Trails from "./Trails";
import Maps from "./Maps";
import Login from "./Login";
import Register from "./Registration";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Trails" element={<Trails />} />
          <Route path="/Maps" element={<Maps />} />
        </Route>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
