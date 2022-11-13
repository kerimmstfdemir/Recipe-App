import Navbar from "../../components/navbar/Navbar";
import { MainContext } from "../../context/context";
import { useContext } from "react";
import Header from "../../components/header/Header";
import Form from "../../components/header/Form";

const Home = () => {

  const {data:{userName, loginInformation}} = useContext(MainContext);
  console.log(loginInformation);

  return (
    <div>
      <Navbar />
      <Header />
      <Form />
    </div>
  )
}

export default Home;