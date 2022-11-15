import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useLocation } from "react-router-dom";
import meal from "../../assets/meal.svg";
import { DetailsHeaderImgStyled, DetailsHeaderDıvStyled } from "./Details.styled";

const Details = () => {
  const navigate = useNavigate();
  const { state: detailsFood } = useLocation();
  
  const {totalNutrients:{CA, CHOCDF, CHOLE, ENERC_KCAL, FAT, FE, PROCNT, MG, NA, VITB12, ZN}} = detailsFood

  console.log(detailsFood);
  return (
    <>
    <DetailsHeaderDıvStyled>
      <h3>{detailsFood.label}</h3>
      <DetailsHeaderImgStyled src={meal} />
    </DetailsHeaderDıvStyled>
      <Card className="d-flex flex-row align-items-center" style={{ width: "90%" }}>
        <Card.Text>
          <p>Nutrients</p>
          <ul>
            <li>{CA.label} : {CA.quantity.toFixed(3)} {CA.unit}</li>
            <li>{CHOCDF.label} : {CHOCDF.quantity.toFixed(3)} {CHOCDF.unit}</li>
            <li>{CHOLE.label} : {CHOLE.quantity.toFixed(2)} {CHOLE.unit}</li>
            <li>{ENERC_KCAL.label} : {ENERC_KCAL.quantity.toFixed(3)} {ENERC_KCAL.unit}</li>
            <li>{FAT.label} : {FAT.quantity.toFixed(3)} {FAT.unit}</li>
            <li>{FE.label} : {FE.quantity.toFixed(3)} {FE.unit}</li>
            <li>{PROCNT.label} : {PROCNT.quantity.toFixed(3)} {PROCNT.unit}</li>
            <li>{MG.label} : {MG.quantity.toFixed(3)} {MG.unit}</li>
            <li>{NA.label} : {NA.quantity.toFixed(3)} {NA.unit}</li>
            <li>{VITB12.label} : {VITB12.quantity.toFixed(3)} {VITB12.unit}</li>
            <li>{ZN.label} : {ZN.quantity.toFixed(3)} {ZN.unit}</li>
          </ul>
        </Card.Text>
        <Card.Img style={{width:"15rem", height:"15rem"}} variant="top" src={detailsFood.image} />
          <Card.Text>
            {detailsFood.ingredientLines.map((item) => {
              return(
                <>
                <ul>
                  <li>{item}</li>
                </ul>
                </>
              )
            })}
          </Card.Text>
      </Card>

      <Button onClick={() => navigate(-1)} variant="primary">
        Back</Button>
    </>
  );
};

export default Details;
