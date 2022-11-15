import { Link } from "react-router-dom";
import { NavBarStyled, NavBarLinkStyled } from "./Navbar.styled";
import { MainContext } from "../../context/context";
import { useContext } from "react";

const Navbar = () => {
  const {data, setData} = useContext(MainContext);
  return (
    <NavBarStyled>
      <div>RECIPE APP</div>
      <NavBarLinkStyled>
        <Link className="text-decoration-none" to="/about">ABOUT</Link>
        <a className="text-decoration-none" href="https://github.com/kerimmstfdemir" target="blank">GITHUB</a>
        <Link className="text-decoration-none" to={"/"} onClick={(e) => setData({...data, loginInformation:false, userName:"", password:"", searchFood:"", selectMeal:"breakfast", recipeFood:{}})}>LOGOUT</Link>
      </NavBarLinkStyled>
    </NavBarStyled>
  );
};

export default Navbar;
