import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RecipeCard = ({ recipeFood }) => {
  console.log(recipeFood);

  return (
    <div className="d-flex flex-row justify-content-center flex-wrap">
      {recipeFood.hits?.map((item) => {
        const {recipe:{image, label}} = item;
        return (
          <>
            <Card className="d-flex justify-content-center align-items-center" style={{ width: "18rem", margin: "2rem" }}>
                <div style={{height:"4.5rem", margin:"0.8rem 0rem"}} className="d-flex flex-row justify-content-center align-items-center">
                    <Card.Title className="text-center">{label}</Card.Title>
                </div>
              <Card.Img style={{width:"12rem", height:"12rem"}} variant="top" src={image} />
              <Button className="mt-3 mb-3" variant="primary">View More</Button>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default RecipeCard;
