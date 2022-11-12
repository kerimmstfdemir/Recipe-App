import styled from "styled-components";

export const LoginStyled = styled.body`
    width: 100vw;
    height: 100vh;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    background-image: url("https://picsum.photos/1600/900");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LoginDivStyled = styled.div`
    border: 4px solid white;
    border-radius: 50%;
    background-color: green;
    opacity: 0.80;
    width: 30rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LoginImgStyled = styled.img`
    width: 25%;
    margin-bottom: 1rem;
`

export const LoginPStyled = styled.p`
    font-size: 2rem;
`