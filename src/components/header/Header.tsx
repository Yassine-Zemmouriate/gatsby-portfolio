import * as React from 'react';
import styled from "styled-components";
import {convertPxtoRem} from "../utils/data";

export interface HeaderProps {

}
const Header : React.FC<HeaderProps> = () => {
    return (
        <Container id={"section-0"}>
            <TextField>
                <Title>Yassine Zemmouriate <JobTitle>Consultant Data Scientist & FullStack Developer</JobTitle></Title>
                <Description>
                    Bonjour 👋 ! Je suis Yassine Zemmouriate, un étudiant en alternance passionné par les sciences des données et le développement web et mobile. Avec une solide expérience en apprentissage en projets innovants, je crée des solutions numériques que ça soit en rapport avec le Data science ou Sotware Engineering. Bienvenue sur mon portfolio créé par mes soins !
                </Description>
            </TextField>
            <ImageField>
                <img src={"images/output.png"} alt={"yassine"} height={"100%"} width={"100%"} style={{objectFit : "contain"}} />
            </ImageField>
        </Container>);
}

export default Header;

const Container = styled.div`
    height: 30rem;
    width: 100%;
    padding-left: ${convertPxtoRem(30)}rem;
    display: flex;
    gap: 2%;
    border-radius: ${convertPxtoRem(5)}rem;
    background-image: url("images/header.png");
    backdrop-filter: blur(10px);
    background-position: center;
    background-size: 100% 100%;
`;

const TextField = styled.div`
    width: 60%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-bottom-left-radius: 5px;
`;

const Title = styled.div`
    font-size : ${convertPxtoRem(48)}rem;
    font-style: normal;
    margin-bottom: ${convertPxtoRem(20)}rem;
`;

const JobTitle = styled(Title)`
    color : #FFB400;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    color: #767676;
    line-height: 2rem;
`;

const ImageField = styled.div`
    display: flex;
    background-color: transparent;
    width: 38%;
    height: 100%;
    border-bottom-right-radius: ${convertPxtoRem(5)}rem ;
    text-align: center;
    align-items: center;
    justify-content: center;
    object-fit: contain;
`;