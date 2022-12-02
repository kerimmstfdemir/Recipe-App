import styled from "styled-components";

export const DetailsHeaderImgStyled = styled.img`
  width: 10rem;
  height: 10rem;
`;

export const DetailsHeaderDıvStyled = styled.div`
width: 90%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 0rem 7rem;
`

export const DetailsInclusiveDiv = styled.div`
@media screen and (max-width: 870px) {
  .detail-card {
    flex-direction: column !important;
    /* width: 60% !important; */
    min-width: 28rem !important;
  }
  .nutrients-text {
    width: 100% !important;
    height: 33% ;
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .food-img {
    width: 25rem !important;
    height: 22.22rem !important;
  }
  .doings {
    width: 95% !important;
  }
}
`