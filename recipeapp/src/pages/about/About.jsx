import coding from "../../assets/coding.svg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AboutStyledDiv, AboutStyledH2 } from "./About.styled"; 

const About = () => {
  return (
    <>
    
    <AboutStyledDiv className="d-flex flex-row align-items-center">
      <Card style={{ width: "80vw", height:"70vh", margin:"1rem 7rem", display:"flex", flexDirection:"column", alignItems:"center", }}>
      <AboutStyledH2>About Software Developer</AboutStyledH2>
        <Card.Img variant="top" src={coding} style={{width:"50%"}}/>
        <Card.Body style={{display:"flex", flexDirection:"column", justifyContent:"center", height:"100%"}}>
          <Card.Title className="text-center">Kerim Mustafa DEMİR</Card.Title>
          <Card.Text style={{height:"100%"}}>
            <p> Hi everyone 👋 </p>
            <p> I'm Kerim. </p>
            <p> I'm interested in Full Stack Development and continue to learn languages in this field. </p>
            <p>You can contact me from the following links.</p>
            <p>Happy Coding...</p>
            <Button variant="primary">Go somewhere</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </AboutStyledDiv>
    </>
  );
};

export default About;
