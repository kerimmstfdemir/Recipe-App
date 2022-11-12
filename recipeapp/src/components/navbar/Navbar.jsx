import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/MainContext";
import { NavBarStyled, NavBarLinkStyled } from "./Navbar.styled";

const Navbar = () => {
    const [state, dispatch] = useContext(LoginContext);
    console.log(state);
  return (
    <NavBarStyled>
      <div>RECIPE APP</div>
      <NavBarLinkStyled>
        <Link to="/about">ABOUT</Link>
        <a href="https://github.com/kerimmstfdemir" target="blank">GITHUB</a>
        <Link to={"/"}>LOGOUT</Link>
      </NavBarLinkStyled>
    </NavBarStyled>
  );
};

export default Navbar;
