import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RecipeCard = ({ recipeFood }) => {
  console.log(recipeFood);

  return (
    <div className="d-flex flex-row justify-content-center flex-wrap">
      {recipeFood.hits?.map((item) => {
        return (
          <>
              <Card className="d-flex justify-content-center align-items-center" style={{ width: "18rem", margin: "2rem" }}>
                <Card.Title>Card Title</Card.Title>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Button variant="primary">Go somewhere</Button>
              </Card>
          </>
        );
      })}
    </div>
  );
};

export default RecipeCard;
