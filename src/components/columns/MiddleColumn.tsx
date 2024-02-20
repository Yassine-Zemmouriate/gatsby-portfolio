import * as React from 'react';
import styled from "styled-components";
import {Card, CardContent, CardActionArea, CardMedia} from "@mui/material";

import Header from '../header/Header';
import Section from "../utils/Section";
import {MachineLearning} from "../../../public/static/images/svgs";

export interface MiddleColumnProps {
    width : string;
}

const fields = [
    {
        id : 0,
        icon : <MachineLearning />,
        title : "Science des données et de l'Information",
        description : "Machine Learning, Deep Learning, Reinforcement Learning ..."
    },
    {
        id : 1,
        icon : <MachineLearning />,
        title : "Développement Web Full Stack",
        description : "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    }
]

const MiddleColumn : React.FC<MiddleColumnProps> = ({width}) => {

    return(
        <Container width={width}>
            <Header />
            <Section id={"section-1"} title={"Compétences Informatiques & Projets"} description={"Dans cette section, il y'a "}>
                <ContentContainer>
                {fields.map((elmnt, idx) => (
                    <Card sx={cardStyle} key={`card-${elmnt.id}`}>
                        <CardActionArea>
                            <CardMedia>
                                <MachineLearning color={"#FFB400"} />
                            </CardMedia>
                            <CardContent>
                                <h3>{elmnt.title}</h3>
                                <p>{elmnt.description}</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
                </ContentContainer>
            </Section>
        </Container>
    )
}

export default MiddleColumn;

const Container = styled.div<{width : string}>`
    width : ${props => props.width};
    background-color : #E5E5E5;
    height : 100%;
    text-align: center;
`;

const ContentContainer = styled.div`
    width : 100%;
    height : 100%;
    display: flex;
    justify-content: space-between;
`;

export const cardStyle = {
    height : "225px",
    width : "310px"
}