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
        <Link to="/about">ABOUT</Link>
        <a href="https://github.com/kerimmstfdemir" target="blank">GITHUB</a>
        <Link to={"/"} onClick={(e) => setData({...data, loginInformation:false, userName:"", password:""})}>LOGOUT</Link>
      </NavBarLinkStyled>
    </NavBarStyled>
  );
};

export default Navbar;
