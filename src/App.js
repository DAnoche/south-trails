import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import NotFound from "./404";
import Home from "./Home";
import Dashboard from "./Dashboard";
import ContactUs from "./Contact-us";
import Login from "./Login";
import Register from "./Registration";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Contact-us" element={<ContactUs />} />
        </Route>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
