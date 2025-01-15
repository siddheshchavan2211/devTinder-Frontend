import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
