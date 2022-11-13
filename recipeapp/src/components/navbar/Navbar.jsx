import { Link } from "react-router-dom";
import { NavBarStyled, NavBarLinkStyled } from "./Navbar.styled";

const Navbar = () => {
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
