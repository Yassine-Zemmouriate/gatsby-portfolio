import * as React from 'react';
import styled from "styled-components";
import {Card, CardContent, CardActionArea, CardMedia} from "@mui/material";

import Header from '../header/Header';
import Section from "../utils/Section";
import {DevWeb, MachineLearning} from "../utils/svgs";
import DialogComponent from "../utils/DialogComponent";
import {useState} from "react";

export interface MiddleColumnProps {
    width : string;
}

const fields = [
    {
        id : 0,
        icon : <MachineLearning color={"#FFB400"} height={"100px"} width={"100px"}/>,
        title : "Science des données et de l'Information",
        description : "Machine Learning, Deep Learning, Reinforcement Learning ...",
        dialogDescription : `
        
        `
    },
    {
        id : 1,
        icon : <DevWeb  color={"#FFB400"} height={"100px"} width={"100px"} />,
        title : "Développement Web Full Stack",
        description : "HTML, CSS, Javascipt, Reactjs, Django, DRF ...",
        dialogDescription: ""
    },
    {
        id : 2,
        icon : <DevWeb  color={"#FFB400"} height={"100px"} width={"100px"} />,
        title : "Développement Web Full Stack",
        description : "HTML, CSS, Javascipt, Reactjs, Django, DRF ...",
        dialogDescription: ""
    },
    {
        id : 3,
        icon : <DevWeb  color={"#FFB400"} height={"100px"} width={"100px"} />,
        title : "Développement Web Full Stack",
        description : "HTML, CSS, Javascipt, Reactjs, Django, DRF ...",
        dialogDescription: ""
    },
    {
        id : 4,
        icon : <DevWeb  color={"#FFB400"} height={"100px"} width={"100px"} />,
        title : "Développement Web Full Stack",
        description : "HTML, CSS, Javascipt, Reactjs, Django, DRF ...",
        dialogDescription: ""
    },
    {
        id : 5,
        icon : <DevWeb  color={"#FFB400"} height={"100px"} width={"100px"} />,
        title : "Développement Web Full Stack",
        description : "HTML, CSS, Javascipt, Reactjs, Django, DRF ...",
        dialogDescription: ""
    }
]

const MiddleColumn : React.FC<MiddleColumnProps> = ({width}) => {

    const [isOpen, setOpen] = useState<number | null>(null);

    const handleClick = (id : number) => {
        setOpen(id);
    }

    const handleClose = () => {
        setOpen(null);
    }

    return(
        <Container width={width}>
            <Header />
            <Section id={"section-1"} title={"Compétences Informatiques & Projets"} description={"Je porte deux casquettes"}>
                <ContentContainer>
                {fields.map((elmnt, idx) => (
                    <Card variant={"outlined"} sx={cardStyle} key={`card-${elmnt.id}`}>
                        <CardActionArea sx={{width : "100%", height : "100%"}} onClick={() => handleClick(elmnt.id)}>
                            <CardMedia>
                                {elmnt.icon}
                            </CardMedia>
                            <CardContent>
                                <CardTitle>{elmnt.title}</CardTitle>
                                <CardDescription>{elmnt.description}</CardDescription>
                            </CardContent>
                        </CardActionArea>
                        <DialogComponent title={elmnt.title} contentText={elmnt.dialogDescription} open={isOpen === elmnt.id} handleClose={handleClose} />
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
    background-color : #F0F0F6;
    height : 100%;
    text-align: center;
`;

const ContentContainer = styled.div`
    width : 100%;
    height : 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 20px;
    column-gap: 20px;
`;

const CardTitle = styled.div`
    font-size: 18px;
    font-family: Inter, sans-serif;
    font-style: normal;
`;

const CardDescription = styled.div`
    font-size: 15px;
    font-family: Inter, sans-serif;
    color : #767676;
    margin-top: 30px;
`;

export const cardStyle = {
    height : "225px",
    width : "40%",
}