import Navbar from "../../components/navbar/Navbar";
import { MainContext } from "../../context/context";
import { useContext } from "react";

const Home = () => {

  const {data:{userName, loginInformation}} = useContext(MainContext);
  console.log(userName);

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default Home;