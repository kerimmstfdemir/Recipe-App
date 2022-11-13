import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PrivateRouter from "./router/PrivateRouter";
import { MainContext } from "./context/context";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    loginInformation:false,
    userName:"",
    password:"",
    searchFood:"",
    selectMeal:"breakfast"
  })

  return (
    <BrowserRouter>
    <MainContext.Provider value={{data, setData}}>
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Login />} />
        </Route>
        <Route path="home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </MainContext.Provider>
    </BrowserRouter>
  );
}

export default App;
