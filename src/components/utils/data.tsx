import {Button, List, ListItem, ListItemText} from "@mui/material";
import {cvButtonStyle} from "../columns/LeftColumn";
import * as React from "react";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import {DevWeb, MachineLearning} from "./svgs";
import ListItemIcon from "@mui/material/ListItemIcon";
import PlayArrowTwoToneIcon from "@mui/icons-material/PlayArrowTwoTone";
import {convertPxtoRem} from "./utils";
import styled from "styled-components";

const ImageContainer = styled.div`
    display : flex;
    justify-content: space-between;
    height: ${convertPxtoRem(70)}rem;
    width: 30%;
    object-fit: fill;
`;
const ListItemDialog: React.FC<{ description: string, img? : string }> = ({ description, img }) => (
    <ListItem>
        <ListItemIcon>
            <PlayArrowTwoToneIcon sx={{ color: "#FFB400" }} />
        </ListItemIcon>
        <ListItemText sx={listItemStyle}>
            {description}
        </ListItemText>
        <ImageContainer>
            {img && <img src={img} alt={img}/>}
        </ImageContainer>
    </ListItem>
);
export const certificats = [
    {
        id: 0,
        location: "IBM",
        date: "Octobre 2023",
        title: "Developing AI Applications with Python & Flask",
        status: "Certificat Coursera",
        img: "images/ibm.png",
        dialogContent : {
            title : "Developing AI Applications with Python & Flask",
            contentText : <List>
                <ListItemDialog
                    description={"Décrire les étapes et les processus impliqués dans la création d'une application Python, y compris le cycle de vie du développement de l'application."}
                />
                <ListItemDialog
                    description={"Créer des modules Python, exécuter des tests unitaires et empaqueter des applications tout en garantissant les meilleures pratiques de codage PEP8"}
                />
                <ListItemDialog
                    description={"Expliquer les fonctionnalités de Flask et déployer des applications sur le Web à l'aide du framework Flask"}
                />
                <ListItemDialog
                    description={"Créer et déployer une application basée sur l'IA sur un serveur Web à l'aide des bibliothèques IBM Watson AI et Flask"}
                />
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <a href={"https://www.coursera.org/account/accomplishments/verify/T62LY63FQG78"} target={"_blank"}>
                        <Button sx={cvButtonStyle}>Voir le certificat</Button>
                    </a>
                </div>
            </List>
        }
    },
    {
        id: 1,
        location: "IBM",
        date: "Octobre 2023",
        title: "Introduction to Containers Docker, Kubernetes & OpenShift",
        status: "Certificat Coursera",
        img: "images/ibm.png",
        dialogContent : {
            title : "Introduction to Containers Docker, Kubernetes & OpenShift",
            contentText : <List>
                <ListItemDialog
                    description={"À l’aide de conteneurs, apprenez à déplacer rapidement des applications dans n’importe quel environnement."}
                />
                <ListItemDialog
                    description={"Décrire et exploiter l'architecture Kubernetes pour configurer et utiliser un système complet de gestion de conteneurs basé sur le cycle de vie."}
                />
                <ListItemDialog
                    description={"Créez des applications cloud natives à l'aide de Docker, Kubernetes, OpenShift et Istio."}
                />
                <ListItemDialog
                    description={"Créez et exploitez un fichier de déploiement YAML pour configurer et créer des ressources telles que des pods, des services, des jeux de réplicas et autres de manière déclarative."}
                />
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <a href={"https://www.coursera.org/account/accomplishments/verify/WH6NBA4AKMDL"} target={"_blank"}>
                        <Button sx={cvButtonStyle}>Voir le certificat</Button>
                    </a>
                </div>
            </List>
        }
    },
    {
        id: 2,
        location: "IBM",
        date: "Août 2023",
        title: "Introduction to DevOps",
        status: "Certificat Coursera",
        img: "images/ibm.png",
        dialogContent: {
            title: "Introduction to DevOps",
            contentText : <List>
                <ListItemDialog
                    description={"Les caractéristiques essentielles du DevOps, notamment la construction d'une culture de responsabilité partagée, de transparence et d'acceptation de l'échec."}
                />
                <ListItemDialog
                    description={"Concepts DevOps essentiels : pratiques d'ingénierie logicielle, microservices natifs du cloud, déploiements continus automatisés et création de code résilient."}
                />
                <ListItemDialog
                    description={"L'importance de l'intégration continue et de la livraison continue, de l'infrastructure en tant que code, du développement piloté par les tests, du développement piloté par le comportement."}
                />
                <ListItemDialog
                    description={"L'impact organisationnel du DevOps, notamment la suppression des silos, le travail en équipes interfonctionnelles et le partage des responsabilités."}
                />
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <a href={"https://www.coursera.org/account/accomplishments/verify/2M48FQZM2NZM"} target={"_blank"}>
                        <Button sx={cvButtonStyle}>Voir le certificat</Button>
                    </a>
                </div>
            </List>
        }
    },{
        id: 3,
        location: "IBM",
        date: "en cours",
        title: "Introduction to Cloud Computing",
        status: "Certificat Coursera",
        img: "images/ibm.png",
        dialogContent : {
            title : "Introduction to Cloud Computing",
            contentText : <List>
                <ListItemDialog
                    description={"Décrire les étapes et les processus impliqués dans la création d'une application Python, y compris le cycle de vie du développement de l'application."}
                />
                <ListItemDialog
                    description={"Créer des modules Python, exécuter des tests unitaires et empaqueter des applications tout en garantissant les meilleures pratiques de codage PEP8"}
                />
                <ListItemDialog
                    description={"Expliquer les fonctionnalités de Flask et déployer des applications sur le Web à l'aide du framework Flask"}
                />
                <ListItemDialog
                    description={"Créer et déployer une application basée sur l'IA sur un serveur Web à l'aide des bibliothèques IBM Watson AI et Flask"}
                />
            </List>
        }
    },{
        id: 4,
        location: "IBM",
        date: "en cours",
        title: "Introduction to Agile Development and Scrum",
        status: "Certificat Coursera",
        img: "images/ibm.png",
        dialogContent : {
            title : "Introduction to Agile Development and Scrum",
            contentText : <List>
                <ListItemDialog
                    description={"Décrire les étapes et les processus impliqués dans la création d'une application Python, y compris le cycle de vie du développement de l'application."}
                />
                <ListItemDialog
                    description={"Créer des modules Python, exécuter des tests unitaires et empaqueter des applications tout en garantissant les meilleures pratiques de codage PEP8"}
                />
                <ListItemDialog
                    description={"Expliquer les fonctionnalités de Flask et déployer des applications sur le Web à l'aide du framework Flask"}
                />
                <ListItemDialog
                    description={"Créer et déployer une application basée sur l'IA sur un serveur Web à l'aide des bibliothèques IBM Watson AI et Flask"}
                />
            </List>
        }
    }
]

export const jobs = [
    {
        id: 0,
        location: "Batt Advisors",
        city: "Metz - France",
        date: "Octobre 2022 - aujourd'hui",
        title: "Consultant Data Scientist - Développeur Full-Stack",
        status: "En alternance",
        img: "images/batt_advisors.png",
        dialogContent : {
            title : "Consultant Data Scientist - Développeur Full-Stack",
            contentText : <List>
                <ListItemDialog
                    description={"Traitement, analyse et visualisation de données financières et extra financières pour les clients du groupe"}
                />
                <ListItemDialog
                    description={"Relation client et agilité"}
                />
                <ListItemDialog
                    description={"Ajout d'outils dans le site interne de Batt & Associés avec Reactjs et Django Rest Framework"}
                    img={"images/drf.png"}
                />
                <ListItemDialog
                    description={"Création d'une extension de gestion des étiquettes de colis avec Tableau"}
                    img={"images/tableau.png"}
                />
                <ListItemDialog
                    description={"Ajout de l'outil Tableau Embedding v3 dans le site interne"}
                />
                <ListItemDialog
                    description={"Création d'un paquet python pour calculer les liasses fiscales des clients"}
                    img={"images/python.png"}
                />
                <div style={{display : "flex", justifyContent : "flex-end"}}>
                    <a href={"https://www.battadvisors.eu/"} target={"_blank"}>
                        <Button sx={cvButtonStyle}>Site de l'entreprise</Button>
                    </a>
                </div>
            </List>
        }
    },
    {
        id: 1,
        location: "Appunto",
        city: "Paris 15ème Arrondissement - France",
        date: "Février 2018 - Octobre 2022",
        title: "Développeur Front-end et Mobile",
        status: "En alternance",
        img: "images/appunto.jpeg",
        dialogContent : {
            title : "Développeur Front-end et Mobile",
            contentText : <List>
                <ListItemDialog
                    description={"Mise à jour du site web vitrine appunto.io avec Gatsbyjs"}
                    img={"images/gatsby.png"}
                />
                <ListItemDialog
                    description={"Ajout de l'outil Kanban dans le site interne avec Reactjs et React-Admin"}
                    img={"images/reactjs.png"}
                />
                <ListItemDialog
                    description={"Création du front d'une application pour les crèches avec React Native à partir d'un modèle Figma / Adobe Xd"}
                    img={"images/react-native.png"}
                />
                <ListItemDialog
                    description={"Rédaction d'un plan de validation et création des tests unitaires avec Jest Puppeteer"}
                    img={"images/puppeteer.png"}
                />
                <ListItemDialog
                    description={"Création du front d'un site de datavisualisation avec Recharts.js et D3.js"}
                    img={"images/d3.png"}
                />
                <div style={{display : "flex", justifyContent : "space-between"}}>
                    <a href={"pdf/reco_appunto.pdf"} target={"_blank"}>
                        <Button sx={cvButtonStyle} endIcon={<GetAppOutlinedIcon/>}>Lettre de Recommandation</Button>
                    </a>
                    <a href={"https://www.appunto.io/"} target={"_blank"}>
                        <Button sx={cvButtonStyle}>Site de l'entreprise</Button>
                    </a>
                </div>
            </List>
        }
    }
]

export const listItemStyle = {
    fontStyle: "italic",
    fontFamily: "'Inter', sans-serif"
}

export const fields = [
    {
        id: 0,
        icon: <MachineLearning color={"#FFB400"} height={`${convertPxtoRem(100)}rem`} width={`${convertPxtoRem(100)}rem`} />,
        title: "Machine Learning",
        description:
            <List>
                <ListItemDialog description={"Exploration et analyse des données"} />
                <ListItemDialog description={"Apprentissage supervisé : Régression logistique, Random forest, Decision tree, SVM"} />
                <ListItemDialog description={"Apprentissage non supervisé : Vector quantization, clustering, PCA"} />
                <ListItemDialog description={"Apprentissage non supervisé : Vector quantization, clustering, PCA"} />
                <ListItem>
                    <ListItemIcon>
                        <PlayArrowTwoToneIcon sx={{ color: "#FFB400" }} />
                    </ListItemIcon>
                    <ListItemText sx={listItemStyle}>
                        Création d'un kanban pour la gestion des projets des clients dans le site interne de la startup avec Reactjs et React-Admin
                    </ListItemText>
                    <ImageContainer>
                        <img src={"images/sklearn.png"} />
                    </ImageContainer>
                </ListItem>
                <ListItemDialog description={"Tester des modèles : Confusion Matrix, F1 score, ..."} />
            </List>
    },
    {
        id: 1,
        icon: <MachineLearning color={"#FFB400"} height={`${convertPxtoRem(100)}rem`} width={`${convertPxtoRem(100)}rem`} />,
        title: "Deep Learning",
        description: <List>
            <ListItemDialog description={"Exploration et analyse des données"} />
            <ListItemDialog description={"Apprentissage supervisé : Régression logistique, Random forest, Decision tree, SVM"} />
            <ListItemDialog description={"Apprentissage non supervisé : Vector quantization, clustering, PCA"} />
            <ListItemDialog description={"Apprentissage non supervisé : Vector quantization, clustering, PCA"} />
            <ListItem>
                <ListItemIcon>
                    <PlayArrowTwoToneIcon sx={{ color: "#FFB400" }} />
                </ListItemIcon>
                <ListItemText sx={listItemStyle}>
                    Création de modèles de Machine Learning (Régression Logistique, SVM, Random Forest, ...) avec la bibliothèque scikit-learn
                </ListItemText>
                <ImageContainer>
                    <img src={"images/sklearn.png"} />
                </ImageContainer>
            </ListItem>
            <ListItemDialog description={"Tester des modèles : Confusion Matrix, F1 score, ..."} />
        </List>
    },
    {
        id: 2,
        icon: <MachineLearning color={"#FFB400"} height={`${convertPxtoRem(100)}rem`} width={`${convertPxtoRem(100)}rem`} />,
        title: "Reinforcement Learning",
        description: "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id: 3,
        icon: <MachineLearning color={"#FFB400"} height={`${convertPxtoRem(100)}rem`} width={`${convertPxtoRem(100)}rem`} />,
        title: "Natural Language Processing",
        description: "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id: 4,
        icon: <DevWeb color={"#FFB400"} height={`${convertPxtoRem(100)}rem`} width={`${convertPxtoRem(100)}rem`} />,
        title: "FullStack Development",
        description: "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id: 5,
        icon: <MachineLearning color={"#FFB400"} height={`${convertPxtoRem(100)}rem`} width={`${convertPxtoRem(100)}rem`} />,
        title: "Data Engineering",
        description: "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id: 6,
        icon: <MachineLearning color={"#FFB400"} height={`${convertPxtoRem(100)}rem`} width={`${convertPxtoRem(100)}rem`} />,
        title: "Ingénierie d'Applications Logicielles",
        description: "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id: 7,
        icon: <DevWeb color={"#FFB400"} height={`${convertPxtoRem(100)}rem`} width={`${convertPxtoRem(100)}rem`} />,
        title: "Mobile Development",
        description: "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id: 8,
        icon: <MachineLearning color={"#FFB400"} height={`${convertPxtoRem(100)}rem`} width={`${convertPxtoRem(100)}rem`} />,
        title: "Big Data",
        description: "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id: 9,
        icon: <MachineLearning color={"#FFB400"} height={`${convertPxtoRem(100)}rem`} width={`${convertPxtoRem(100)}rem`} />,
        title: "Programmation GPU",
        description: "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id: 10,
        icon: <MachineLearning color={"#FFB400"} height={`${convertPxtoRem(100)}rem`} width={`${convertPxtoRem(100)}rem`} />,
        title: "Modèles Statistiques",
        description: "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    },
    {
        id: 11,
        icon: <MachineLearning color={"#FFB400"} height={`${convertPxtoRem(100)}rem`} width={`${convertPxtoRem(100)}rem`} />,
        title: "Software Engineering",
        description: "HTML, CSS, Javascipt, Reactjs, Django, DRF ..."
    }
]

export const formations = [
    {
        id: 0,
        location: "CentraleSupélec",
        city: "Metz - France",
        date: "Septembre 2020 - Décembre 2024",
        title: "Science des Données et de l'Information",
        status: "Étudiant - Apprenti",
        img: "images/centrale.png"
    },
    {
        id: 1,
        location: "Lycée Numérique Colbert",
        city: "Tourcoing - France",
        date: "Septembre 2018 - Décembre 2020",
        title: "Classes Préparatoires aux Grandes Écoles option TSI",
        status: "Étudiant",
        img: "images/colbert.svg"
    },
    {
        id: 2,
        location: "Lycée Moulay Ismaïl",
        city: "Meknès - Maroc",
        date: "Septembre 2017 - Décembre 2018",
        title: "Baccalauréat Générale Sciences Mathématiques B option Science de l'Ingénieur",
        status: "Étudiant",
        img: "images/bac.png"
    }
]


