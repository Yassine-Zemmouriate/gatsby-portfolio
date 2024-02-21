import * as React from 'react';
import styled from "styled-components";
import {Card, CardContent, CardActionArea, CardMedia, DialogContent, List, ListItem} from "@mui/material";

import Header from '../header/Header';
import Section from "../utils/Section";
import {DevWeb, MachineLearning} from "../utils/svgs";
import DialogComponent from "../utils/DialogComponent";
import {useState} from "react";
import Typography from "@mui/material/Typography";

export interface MiddleColumnProps {
    width : string;
}

const ImageContainer = styled.div`
    display : flex;
    justify-content: space-between;
    height: 70px;
    width: 30%;
    object-fit: fill;
`;

const listItemStyle = {
    position : "relative",
    display : "flex",
    justifyContent : "space-between",
    alignItems : "center",
    gap : "2%",
    marginBottom : "10px"
}

const fields = [
    {
        id : 0,
        icon : <MachineLearning color={"#FFB400"} height={"100px"} width={"100px"}/>,
        title : "Machine Learning",
        description :
                <List>
                    <ListItem>
                        <Typography>
                            - Exploration et analyse des données
                        </Typography>
                    </ListItem>
                    <ListItem sx={{...listItemStyle, flexDirection : "column"}}>
                        <Typography>
                            - Apprentissage supervisé : Régression logistique, Random forest, Decision tree, SVM
                        </Typography>
                        <Typography>
                            - Apprentissage non supervisé : Vector quantization, clustering, PCA
                        </Typography>
                    </ListItem>
                    <ListItem sx={listItemStyle}>
                        <Typography sx={{width : "70%"}}>
                            - Création de modèles de Machine Learning (Régression Logistique, SVM, Random Forest, ...) avec la bibliothèque scikit-learn
                        </Typography>
                        <ImageContainer>
                            <img src={"images/sklearn.png"} />
                        </ImageContainer>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            - Tester des modèles : Confusion Matrix, F1 score, ...
                        </Typography>
                    </ListItem>
                </List>
    },
    {
        id : 1,
        icon : <MachineLearning color={"#FFB400"} height={"100px"} width={"100px"}/>,
        title : "Deep Learning",
        description : <List>
                    <ListItem>
                        <Typography>
                            - Exploration et analyse des données
                        </Typography>
                    </ListItem>
                    <ListItem sx={{...listItemStyle, flexDirection : "column"}}>
                        <Typography>
                            - Apprentissage supervisé : Régression logistique, Random forest, Decision tree, SVM
                        </Typography>
                        <Typography>
                            - Apprentissage non supervisé : Vector quantization, clustering, PCA
                        </Typography>
                    </ListItem>
                    <ListItem sx={listItemStyle}>
                        <Typography sx={{width : "70%"}}>
                            - Création de modèles de Machine Learning (Régression Logistique, SVM, Random Forest, ...) avec la bibliothèque scikit-learn
                        </Typography>
                        <ImageContainer>
                            <img src={"images/pytorch.png"} />
                        </ImageContainer>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            - Tester des modèles : Confusion Matrix, F1 score, ...
                        </Typography>
                    </ListItem>
                </List>
    },
    {
        id : 2,
        icon : <MachineLearning color={"#FFB400"} height={"100px"} width={"100px"}/>,
        title : "Reinforcement Learning",
        description : "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id : 3,
        icon : <MachineLearning color={"#FFB400"} height={"100px"} width={"100px"}/>,
        title : "Natural Language Processing",
        description : "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id : 4,
        icon : <DevWeb  color={"#FFB400"} height={"100px"} width={"100px"} />,
        title : "FullStack Development",
        description : "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id : 5,
        icon : <MachineLearning color={"#FFB400"} height={"100px"} width={"100px"}/>,
        title : "Data Engineering",
        description : "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id : 6,
        icon : <MachineLearning color={"#FFB400"} height={"100px"} width={"100px"}/>,
        title : "Ingénierie d'Applications Logicielles",
        description : "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id : 7,
        icon : <DevWeb  color={"#FFB400"} height={"100px"} width={"100px"} />,
        title : "Mobile Development",
        description : "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id : 8,
        icon : <MachineLearning color={"#FFB400"} height={"100px"} width={"100px"}/>,
        title : "Big Data",
        description : "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id : 9,
        icon : <MachineLearning color={"#FFB400"} height={"100px"} width={"100px"}/>,
        title : "Programmation GPU",
        description : "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
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
            <Section id={"section-1"} title={"Compétences Informatiques & Projets"} description={""}>
                <ContentContainer>
                {fields.map((elmnt, idx) => (
                    <Card variant={"outlined"} sx={cardStyle} key={`card-${elmnt.id}`}>
                        <CardActionArea sx={{width : "100%", height : "100%"}} onClick={() => handleClick(elmnt.id)}>
                            <CardMedia>
                                {elmnt.icon}
                            </CardMedia>
                            <CardContent>
                                <CardTitle>{elmnt.title}</CardTitle>
                            </CardContent>
                        </CardActionArea>
                        <DialogComponent title={elmnt.title} contentText={elmnt.description} open={isOpen === elmnt.id} handleClose={handleClose} />
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
    font-style: normal;
`;

const CardDescription = styled.div`
    font-size: 15px;
    font-style: italic;
    color : #767676;
    margin-top: 30px;
`;

export const cardStyle = {
    height : "225px",
    width : "40%",
}
