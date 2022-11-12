import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import MainContext from "./context/MainContext";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PrivateRouter from "./router/PrivateRouter";

function App() {
  return (
    <BrowserRouter>
    <MainContext>
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Login />} />
        </Route>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      </MainContext>
    </BrowserRouter>
  );
}

export default App;
