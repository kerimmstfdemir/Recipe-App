import Navbar from "../../components/navbar/Navbar";
import { MainContext } from "../../context/context";
import { useContext } from "react";
import Header from "../../components/header/Header";
import SearchForm from "../../components/header/SearchForm";

const Home = () => {

  const {data:{userName, loginInformation}} = useContext(MainContext);

  return (
    <div>
      <Navbar />
      <Header />
      <SearchForm />
    </div>
  )
}

export default Home;