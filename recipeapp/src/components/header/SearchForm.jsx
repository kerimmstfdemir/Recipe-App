import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { MainContext } from "../../context/context";
import { useContext } from "react";

const SearchForm = () => {
  const {data, data:{searchFood, selectMeal}, setData} = useContext(MainContext);
  console.log(searchFood, selectMeal);
  return (
    <Form>
      <fieldset className="d-flex flex-row justify-content-center ">
        <Form.Group className="mb-3">
          <Form.Control style={{height:"2.5rem"}} id="searchFood" placeholder="Search Food" onChange={(e) => setData({...data, searchFood:e.target.value})} />
        </Form.Group>
        <Button className="mb-3" style={{height:"2.5rem"}} type="submit">Search</Button>
        <Form.Group className="mb-3">
          <Form.Select style={{height:"2.5rem"}} id="selectMeal" onChange={(e) => setData({...data, selectMeal:e.target.value})}>
            <option value={"breakfast"}>Breakfast</option>
            <option value={"lunch"}>Lunch</option>
            <option value={"dinner"}>Dinner</option>
            <option value={"snack"}>Snack</option>
            <option value={"teatime"}>Teatime</option>
          </Form.Select>
        </Form.Group>
        
      </fieldset>
    </Form>

  );
};

export default SearchForm;
