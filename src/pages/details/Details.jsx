import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useLocation } from "react-router-dom";
import cook from "../../assets/cook.svg";
import { DetailsHeaderImgStyled, DetailsHeaderDıvStyled, DetailsInclusiveDiv } from "./Details.styled";

const Details = () => {
  const navigate = useNavigate();
  const { state: detailsFood } = useLocation();

  const { totalNutrients: { CA, CHOCDF, CHOLE, ENERC_KCAL, FAT, FE, PROCNT, MG, NA, VITB12, ZN } } = detailsFood

  return (
    <>
      <DetailsHeaderDıvStyled>
        <h3>{detailsFood.label}</h3>
        <DetailsHeaderImgStyled src={cook} />
      </DetailsHeaderDıvStyled>
      <DetailsInclusiveDiv className="d-flex justify-content-center">
        <Card className="d-flex flex-row justify-content-around align-items-center detail-card" style={{ width: "90%", minWidth:"54.56rem", border: "7px solid #3E6F6B", borderRadius: "25px" }}>
          <Card.Text className="d-flex flex-column align-items-center justify-content-center nutrients-text" style={{width:"33%"}}>
            <div className="text-center mt-2 mb-2">
              <h3><u>Nutrients</u></h3>
            </div>
            <ul>
              <div>
              <li><b>{ENERC_KCAL.label} : </b> {ENERC_KCAL.quantity.toFixed(3)} {ENERC_KCAL.unit}</li>
              <li><b>{FAT.label} : </b> {FAT.quantity.toFixed(3)} {FAT.unit}</li>
              <li><b>{CA.label} : </b> {CA.quantity.toFixed(3)} {CA.unit}</li>
              <li><b>{PROCNT.label} : </b> {PROCNT.quantity.toFixed(3)} {PROCNT.unit}</li>
              <li><b>{CHOCDF.label} : </b> {CHOCDF.quantity.toFixed(3)} {CHOCDF.unit}</li>
              <li><b>{CHOLE.label} : </b> {CHOLE.quantity.toFixed(2)} {CHOLE.unit}</li>
              </div>
              <div>
              <li><b>{FE.label} : </b> {FE.quantity.toFixed(3)} {FE.unit}</li>
              <li><b>{MG.label} : </b> {MG.quantity.toFixed(3)} {MG.unit}</li>
              <li><b>{NA.label} : </b> {NA.quantity.toFixed(3)} {NA.unit}</li>
              <li><b>{VITB12.label} : </b> {VITB12.quantity.toFixed(3)} {VITB12.unit}</li>
              <li><b>{ZN.label} : </b> {ZN.quantity.toFixed(3)} {ZN.unit}</li>
              </div>
            </ul>
          </Card.Text>
          <Card.Img  className="ml-3 mr-3 food-img" style={{ width:"20rem", height: "17.78rem", borderRadius: "15px" }} variant="top" src={detailsFood.image} />
          <Card.Text className="mt-4 mb-3 mr-2 doings" style={{width:"33%"}}>
            {detailsFood.ingredientLines.map((item) => {
              return (
                <>
                  <li>{item}</li>
                </>
              )
            })}
          </Card.Text>
        </Card>
      </DetailsInclusiveDiv>
      <div className="text-center mt-3">
        <Button style={{backgroundColor:"#023059", border:"2px solid white", width:"9rem", height:"3rem", fontSize:"1.3rem", fontWeight:"400", letterSpacing:"2px"}} onClick={() => navigate(-1)}>Back</Button>
      </div>
    </>
  );
};

export default Details;
