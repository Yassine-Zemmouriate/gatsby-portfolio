import * as React from 'react';
import styled from "styled-components";
import {Button} from "@mui/material";
import {cvButtonStyle} from "../columns/LeftColumn";
import {ArrowRight, MachineLearning} from "../../../public/static/images/svgs";

export interface HeaderProps {

}
const Header : React.FC<HeaderProps> = () => {
    return (
        <Container id={"section-0"}>
            <TextField>
                <Title>Je suis Yassine Zemmouriate <JobTitle>Consultant Data Scientist & FullStack Developer</JobTitle></Title>
                <Description>
                    Je suis un jeune en alternance en tant que Consultant Data Scientist chez Batt & Associés, je suis très passionné par ce domaine, et par le développement web
                    <Button sx={{...cvButtonStyle, borderRadius : "5px", width : "auto", alignItems: 'center'}}>Hire me<ArrowRight /></Button>
                </Description>
            </TextField>
            <ImageField>Image en cours de fabrication</ImageField>
        </Container>);
}

export default Header;

const Container = styled.div`
    height : 30rem;
    width : 100%;
    background-color: #FFF;
    display: flex;
    gap : 2%;
    border-radius: 5px;
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
    font-size : 48px;
    font-style: normal;
    margin-bottom: 20px;
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
    border-bottom-right-radius: 5px ;
    text-align: center;
    align-items: center;
    justify-content: center;
`;