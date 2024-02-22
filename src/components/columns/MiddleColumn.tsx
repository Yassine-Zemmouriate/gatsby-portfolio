import * as React from 'react';
import styled from "styled-components";
import {Card, CardContent, CardActionArea, CardMedia, List, ListItem, ListItemText, Chip, Stack} from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import PlayArrowTwoToneIcon from '@mui/icons-material/PlayArrowTwoTone';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

import Header from '../header/Header';
import Section from "../utils/Section";
import {DevWeb, MachineLearning} from "../utils/svgs";
import DialogComponent from "../utils/DialogComponent";
import {useState} from "react";
import ItemList from "../utils/ItemList";
import {Link} from "gatsby";
import {cvButtonStyle} from "./LeftColumn";

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

export const ListItemDialog : React.FC<{description : string}> = ({description}) => (
    <ListItem>
        <ListItemIcon>
            <PlayArrowTwoToneIcon sx={{color : "#FFB400"}} />
        </ListItemIcon>
        <ListItemText sx={listItemStyle}>
            {description}
        </ListItemText>
    </ListItem>
);

const listItemStyle = {
    fontStyle : "italic",
    fontFamily : "'Inter', sans-serif"
}

const fields = [
    {
        id : 0,
        icon : <MachineLearning color={"#FFB400"} height={"100px"} width={"100px"}/>,
        title : "Machine Learning",
        description :
                <List>
                    <ListItemDialog description={"Exploration et analyse des données"}/>
                    <ListItemDialog description={"Apprentissage supervisé : Régression logistique, Random forest, Decision tree, SVM"}/>
                    <ListItemDialog description={"Apprentissage non supervisé : Vector quantization, clustering, PCA"}/>
                    <ListItemDialog description={"Apprentissage non supervisé : Vector quantization, clustering, PCA"}/>
                    <ListItem>
                        <ListItemIcon>
                            <PlayArrowTwoToneIcon sx={{color : "#FFB400"}} />
                        </ListItemIcon>
                        <ListItemText sx={listItemStyle}>
                            Création de modèles de Machine Learning (Régression Logistique, SVM, Random Forest, ...) avec la bibliothèque scikit-learn
                        </ListItemText>
                        <ImageContainer>
                            <img src={"images/sklearn.png"} />
                        </ImageContainer>
                    </ListItem>
                    <ListItemDialog description={"Tester des modèles : Confusion Matrix, F1 score, ..."}/>
                </List>
    },
    {
        id : 1,
        icon : <MachineLearning color={"#FFB400"} height={"100px"} width={"100px"}/>,
        title : "Deep Learning",
        description : <List>
<ListItemDialog description={"Exploration et analyse des données"}/>
                    <ListItemDialog description={"Apprentissage supervisé : Régression logistique, Random forest, Decision tree, SVM"}/>
                    <ListItemDialog description={"Apprentissage non supervisé : Vector quantization, clustering, PCA"}/>
                    <ListItemDialog description={"Apprentissage non supervisé : Vector quantization, clustering, PCA"}/>
                    <ListItem>
                        <ListItemIcon>
                            <PlayArrowTwoToneIcon sx={{color : "#FFB400"}} />
                        </ListItemIcon>
                        <ListItemText sx={listItemStyle}>
                            Création de modèles de Machine Learning (Régression Logistique, SVM, Random Forest, ...) avec la bibliothèque scikit-learn
                        </ListItemText>
                        <ImageContainer>
                            <img src={"images/sklearn.png"} />
                        </ImageContainer>
                    </ListItem>
                    <ListItemDialog description={"Tester des modèles : Confusion Matrix, F1 score, ..."}/>
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
    },
    {
        id : 10,
        icon : <MachineLearning color={"#FFB400"} height={"100px"} width={"100px"}/>,
        title : "Modèles Statistiques",
        description : "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id : 11,
        icon : <MachineLearning color={"#FFB400"} height={"100px"} width={"100px"}/>,
        title : "Software Engineering",
        description : "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    }
]

const formations = [
    {
        id : 0,
        location : "CentraleSupélec",
        city : "Metz - France",
        date : "Septembre 2020 - Décembre 2024",
        title : "Science des Données et de l'Information",
        status : "Étudiant - Apprenti",
        img : "images/centrale.png"
    },
    {
        id : 1,
        location : "Lycée Numérique Colbert",
        city : "Tourcoing - France",
        date : "Septembre 2018 - Décembre 2020",
        title : "Classes Préparatoires aux Grandes Écoles option TSI",
        status : "Étudiant",
        img : "images/colbert.svg"
    },
    {
        id : 2,
        location : "Lycée Moulay Ismaïl",
        city : "Meknès - Maroc",
        date : "Septembre 2017 - Décembre 2018",
        title : "Baccalauréat Générale Sciences Mathématiques B option Science de l'Ingénieur",
        status : "Étudiant",
        img : "images/bac.png"
    }
]

const jobs = [
    {
        id : 0,
        location : "Batt Advisors",
        city : "Metz - France",
        date : "Octobre 2022 - aujourd'hui",
        title : "Consultant Data Scientist - Développeur Full-Stack",
        status : "En alternance",
        img : "images/batt_advisors.png"
    },
    {
        id : 1,
        location : "Appunto",
        city : "Paris 15ème Arrondissement - France",
        date : "Février 2018 - Octobre 2022",
        title : "Développeur Front-end et Mobile",
        status : "En alternance",
        img : "images/appunto.jpeg"
    }
]

const certificats = [
    {
        id : 0,
        location : "IBM",
        date : "Octobre 2023",
        title : "Developing AI Applications with Python & Flask",
        status : "Certificat Coursera",
        img : "images/ibm.png"
    },
    {
        id : 1,
        location : "IBM",
        date : "Octobre 2023",
        title : "Introduction to Containers Docker, Kubernetes & OpenShift",
        status : "Certificat Coursera",
        img : "images/ibm.png"
    },
    {
        id : 2,
        location : "IBM",
        date : "Août 2023",
        title : "Introduction to DevOps",
        status : "Certificat Coursera",
        img : "images/ibm.png"
    }
]

const listStyle = {
    borderRadius : "6px",
    backgroundColor : "#FFFFFF",
    width : "100%",
    paddingTop : "0px",
    paddingLeft : "37px",
    paddingRight : "29px",
    paddingBottom : "0px"
}

const MiddleColumn : React.FC<MiddleColumnProps> = ({width}) => {

    const [isOpen, setOpen] = useState<number | null>(null);

    const handleClick = (id : number) => {
        setOpen(id);
    }

    const handleCertificatClick = (element: { link: string | URL | undefined; }) => {
        window.open(element.link);
    }

    const handleClose = () => {
        setOpen(null);
    }

    return(
        <Container width={width}>
            <Header />
            <Section id={"section-1"} title={"Mes Diplômes & Formations"} description={""}>
                <List sx={listStyle}>
                    {formations.map((element, index) => (
                        <ItemList id={`formation-id-${element.id}`} location={element.location} status={element.status} date={element.date} title={element.title} image={element.img} city={element.city} />
                    ))}
                </List>
            </Section>
            <Section id={"section-2"} title={"Mes Expériences Professionnelles"} description={""}>
                <List sx={listStyle}>
                    {jobs.map((element, index) => (
                        <ItemList id={`job-id-${element.id}`} location={element.location} status={element.status} date={element.date} title={element.title} image={element.img} city={element.city} />
                    ))}
                </List>
            </Section>
            <Section id={"section-3"} title={"Mes Expériences Académiques"} description={""}>
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
            <Section id={"section-4"} title={"Mes Certificats"} description={""}>
                <List sx={listStyle}>
                    {certificats.map((element, index) => (
                        <ItemList id={`certificat-id-${element.id}`} location={element.location} status={element.status} date={element.date} title={element.title} image={element.img} />
                    ))}
                </List>
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

export const cardStyle = {
    height : "225px",
    width : "40%",
}

