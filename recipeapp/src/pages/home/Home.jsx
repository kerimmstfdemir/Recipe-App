import Header from "../../components/header/Header";
import SearchForm from "../../components/header/SearchForm";

const Home = ({authentication}) => {

  return (
    <div>
      <Header />
      <SearchForm authentication={authentication}/>
    </div>
  )
}

export default Home;