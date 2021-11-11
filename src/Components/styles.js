import styled from "styled-components";

const SECTION = styled.section`
display: flex;
justify-content: center;
`
const Container = styled.div` 
border: 2px solid black;  
width: 400px;
height: 450px;
margin: 30px;
text-align: center;
background-color: springgreen;
`;
const H1 = styled.h1`
font-family: 'Roboto';
background-color: springgreen;
`;
const TEXT = styled.p`
background-color: springgreen;
`;
const SPN = styled.button`
border: 1px solid black;
cursor: pointer;
border-radius: 9px;
margin-top: 40px;
    background-color: salmon;
    padding: 10px;
    
`;
export {SECTION,Container,H1,TEXT,SPN}