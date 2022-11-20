import coding from "../../assets/coding.svg";
import Card from "react-bootstrap/Card";
import { AboutStyledDiv, AboutStyledH2, AboutStyledContactLinks } from "./About.styled";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import "./about.css"

const About = () => {
  return (
    <>
      <AboutStyledDiv className="d-flex flex-row align-items-center">
        <Card
          style={{ width: "80vw", minWidth: "30.06rem", height: "75%", maxHeight: "50.125rem", margin: "1rem 7rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <AboutStyledH2>About Software Developer</AboutStyledH2>
          <Card.Img variant="top" src={coding} style={{ width: "50%", maxWidth: "35rem", minWidth: "20rem" }} />
          <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
            <Card.Title style={{fontSize:"1.7rem"}} className="font-weight-bold text-center mt-2 mb-3">Kerim Mustafa DEMİR</Card.Title>
            <Card.Text style={{ height: "100%", textAlign:"left" }}>
              <p> Hi everyone 👋 </p>
              <p> I'm Kerim. </p>
              <p>
                {" "}
                I'm interested in Full Stack Development and continue to learn
                languages in this field.{" "}
              </p>
              <p>You can contact me from the following links.</p>
              <p>Happy Coding...</p>
              <AboutStyledContactLinks>
                <a href="mailto:kerimmstfdemir@gmail.com">
                  <SiGmail className="logo-gmail logo" style={{ color: "#c5221f", cursor: "pointer" }} />
                </a>
                <a href="https://www.linkedin.com/in/krmmstfdemir/" target="blank">
                  <SiLinkedin className="logo-linkedin logo" style={{ color: "#2868b2", cursor: "pointer" }} />
                </a>
                <a href="https://github.com/kerimmstfdemir" target="blank">
                <SiGithub className="logo-gitgub logo" style={{ color:"#000", cursor: "pointer" }} />
                </a>
              </AboutStyledContactLinks>
            </Card.Text>
          </Card.Body>
        </Card>
      </AboutStyledDiv>
    </>
  );
};

export default About;
