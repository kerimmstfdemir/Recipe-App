/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import { NavBarStyled, NavBarLinkStyled } from "./Navbar.styled";
import { MainContext } from "../../context/context";
import { useContext } from "react";
import "./navbar.css";
import recipeappnav from "../../assets/recipeapp-nav.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { data, setData } = useContext(MainContext);
  const navigate = useNavigate();
  return (
    <NavBarStyled>
      <div className="navbar-left" onClick={() => navigate("/home")}>
        <img src={recipeappnav} style={{width:"3.5rem", height:"3rem", paddingBottom:"0.2rem"}} />
        <div className="recipeapp-home">RECIPE APP</div>
      </div>
      <NavBarLinkStyled>
        <Link className="text-decoration-none link" to="/about">ABOUT</Link>
        <a className="text-decoration-none link" href="https://github.com/kerimmstfdemir" target="blank">GITHUB</a>
        <Link className="text-decoration-none link" to={"/"} onClick={(e) => setData({ ...data, loginInformation: false, userName: "", password: "", searchFood: "", selectMeal: "breakfast", recipeFood: {} })}>LOGOUT</Link>
      </NavBarLinkStyled>
    </NavBarStyled>
  );
};

export default Navbar;
