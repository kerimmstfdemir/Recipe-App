import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PrivateRouter from "./router/PrivateRouter";
import { MainContext } from "./context/context";
import { useState } from "react";
import Details from "./pages/details/Details";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [data, setData] = useState({
    loginInformation: false,
    userName: "",
    password: "",
    searchFood: "",
    selectMeal: "breakfast",
    recipeFood: {}
  });

  const [authentication, setAuthentication] = useState({
    APP_ID: process.env.REACT_APP_APP_ID,
    APP_KEY: process.env.REACT_APP_APP_KEY,
  });

  return (
    <BrowserRouter>
      <MainContext.Provider value={{ data, setData, authentication }}>
        {data.loginInformation && <Navbar />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRouter />}>
            <Route path="" element={<Home />} />
          </Route>

          <Route path="/about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>

          <Route path="/details" element={<PrivateRouter />}>
            <Route path="" element={<Details />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MainContext.Provider>
    </BrowserRouter>
  );
}

export default App;
