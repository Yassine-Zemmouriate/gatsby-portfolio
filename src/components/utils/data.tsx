import {Button, List, ListItem, ListItemText} from "@mui/material";
import {cvButtonStyle} from "../columns/LeftColumn";
import * as React from "react";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import {DevWeb, MachineLearning} from "./svgs";
import ListItemIcon from "@mui/material/ListItemIcon";
import PlayArrowTwoToneIcon from "@mui/icons-material/PlayArrowTwoTone";
import {convertPxtoRem} from "./utils";
import styled from "styled-components";
import { Skill } from "./Skill";

const ImageContainer = styled.div`
    display : flex;
    justify-content: space-between;
    height: ${convertPxtoRem(70)}rem;
    width: 30%;
    object-fit: cover;
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
            {img && <img src={img} alt={img} />}
        </ImageContainer>
    </ListItem>
);
export const certificats = [
    {
        location: "Google",
        date: "Février 2025",
        title: "Google Project Management",
        status: "Certificat Professionel Coursera",
        img: "images/google.png",
        dialogContent : {
            title : "Google Project Management",
            contentText : <List>
                <ListItemDialog
                    description={"Apprenez Python - le langage de programmation le plus populaire pour la science des données et le développement de logiciels."}
                />
                <ListItemDialog
                    description={"Appliquer la logique de programmation Python Variables, structures de données, ramifications, boucles, fonctions, objets et classes."}
                />
                <ListItemDialog
                    description={"Démontrer sa maîtrise de l'utilisation des bibliothèques Python telles que Pandas et Numpy, et du développement de code à l'aide de Jupyter Notebooks."}
                />
                <ListItemDialog
                    description={"Accédez aux données et récupérez-les sur le Web à l'aide d'API et de bibliothèques Python comme Beautiful Soup."}
                />
            </List>
        }
    },
    {
        location: "IBM",
        date: "Juillet 2024",
        title: "Python for Data Science, AI & Development",
        status: "Certificat Cours Coursera",
        img: "images/ibm.png",
        dialogContent : {
            title : "Python for Data Science, AI & Development",
            contentText : <List>
                <ListItemDialog
                    description={"Apprenez Python - le langage de programmation le plus populaire pour la science des données et le développement de logiciels."}
                />
                <ListItemDialog
                    description={"Appliquer la logique de programmation Python Variables, structures de données, ramifications, boucles, fonctions, objets et classes."}
                />
                <ListItemDialog
                    description={"Démontrer sa maîtrise de l'utilisation des bibliothèques Python telles que Pandas et Numpy, et du développement de code à l'aide de Jupyter Notebooks."}
                />
                <ListItemDialog
                    description={"Accédez aux données et récupérez-les sur le Web à l'aide d'API et de bibliothèques Python comme Beautiful Soup."}
                />
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <a href={"https://coursera.org/share/b673146187ba1772b9e130580f0c4699"} target={"_blank"}>
                        <Button sx={cvButtonStyle}>Voir le certificat</Button>
                    </a>
                </div>
            </List>
        }
    },
    {
        location: "IBM",
        date: "Janvier 2025",
        title: "Application Development using Microservices and Serverless",
        status: "Certificat Cours Coursera",
        img: "images/ibm.png",
        dialogContent : {
            title : "Application Development using Microservices and Serverless",
            contentText : <List>
                <ListItemDialog
                    description={"Résumez les fondamentaux des microservices, leurs avantages et leur contraste avec les architectures monolithiques."}
                />
                <ListItemDialog
                    description={"Créez des points de terminaison d'API REST et appelez-les à l'aide de cURL et Postman ; utilisez SwaggerUI pour documenter et tester les API."}
                />
                <ListItemDialog
                    description={"Créez et déployez des microservices à l'aide de conteneurs Docker et de technologies sans serveur comme IBM Code Engine."}
                />
                <ListItemDialog
                    description={"Entraînez-vous de manière pratique avec des laboratoires et des projets utilisant un environnement cloud gratuit."}
                />
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <a href={"https://coursera.org/share/6a300a59cb9ef3090ad585bddb8fd89b"} target={"_blank"}>
                        <Button sx={cvButtonStyle}>Voir le certificat</Button>
                    </a>
                </div>
            </List>
        }
    },
    {
        location: "IBM",
        date: "Juillet 2024",
        title: "Hands-on Introduction to Linux Commands and Shell Scripting",
        status: "Certificat Cours Coursera",
        img: "images/ibm.png",
        dialogContent : {
            title : "Hands-on Introduction to Linux Commands and Shell Scripting",
            contentText : <List>
                <ListItemDialog
                    description={"Décrivez l'architecture Linux et les distributions Linux courantes et mettez à jour et installez des logiciels sur un système Linux."}
                />
                <ListItemDialog
                    description={"Exécutez des commandes courantes d'information, de fichier, de contenu, de navigation, de compression et de mise en réseau dans le shell Bash."}
                />
                <ListItemDialog
                    description={"Développer des scripts shell à l'aide de commandes Linux, de variables d'environnement, de canaux et de filtres."}
                />
                <ListItemDialog
                    description={"Planifiez des tâches cron sous Linux avec crontab et expliquez la syntaxe cron."}
                />
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <a href={"https://coursera.org/share/d4e3744c9f7025c0a5ec82827466ca4b"} target={"_blank"}>
                        <Button sx={cvButtonStyle}>Voir le certificat</Button>
                    </a>
                </div>
            </List>
        }
    },
    {
        location: "IBM",
        date: "Janvier 2025",
        title: "Getting Started with Git and GitHub",
        status: "Certificat Cours Coursera",
        img: "images/ibm.png",
        dialogContent : {
            title : "Getting Started with Git and GitHub",
            contentText : <List>
                <ListItemDialog
                    description={"Décrivez le contrôle de version et sa place dans le codage social et collaboratif et dans DevOps."}
                />
                <ListItemDialog
                    description={"Expliquez les concepts de base de Git tels que les référentiels et les branches utilisés pour le contrôle de version distribué et le codage social."}
                />
                <ListItemDialog
                    description={"Créez des référentiels et des branches GitHub et effectuez des demandes d'extraction (PR) et des opérations de fusion pour collaborer sur un projet d'équipe."}
                />
                <ListItemDialog
                    description={"Construisez votre portfolio en créant et en partageant un projet open source sur GitHub."}
                />
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <a href={"https://coursera.org/share/7702c1b571c9e2e697f77157904ae7aa"} target={"_blank"}>
                        <Button sx={cvButtonStyle}>Voir le certificat</Button>
                    </a>
                </div>
            </List>
        }
    },
    {
        location: "IBM",
        date: "Octobre 2023",
        title: "Developing AI Applications with Python & Flask",
        status: "Certificat Cours Coursera",
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
        location: "IBM",
        date: "Octobre 2023",
        title: "Introduction to Containers Docker, Kubernetes & OpenShift",
        status: "Certificat Cours Coursera",
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
    },{
        location: "IBM",
        date: "Avril 2024",
        title: "DevOps, Cloud, and Agile Foundations",
        status: "Certificat Professionnel Coursera",
        img: "images/ibm.png",
        dialogContent : {
            title : "DevOps, Cloud, and Agile Foundations",
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
                    <a href={"https://coursera.org/share/dd8edb5a8418be81d9474e5bcf9adca0"} target={"_blank"}>
                        <Button sx={cvButtonStyle}>Voir le certificat</Button>
                    </a>
                </div>
            </List>
        }
    },
]

export const jobs = [
    {
        location: "Batt Advisors",
        city: "Metz - France",
        date: "Novembre 2024 - aujourd'hui",
        title: "Consultant Data Scientist - Développeur Full-Stack",
        status: "Contrat CDI",
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
        location: "Batt Advisors",
        city: "Metz - France",
        date: "Octobre 2022 - Novembre 2024",
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
        location: "Appunto",
        city: "Paris 15ème Arrondissement - France",
        date: "Février 2021 - Octobre 2022",
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
    fontFamily: "'Inter', sans-serif"
}

export const fields = [
  {
        icon: <img src={"images/software-eng.png"} alt={"images/software-eng.png"} height={`100rem`} width={`100rem`} style={{objectFit: "contain", filter: "grayscale(100%)"}} />,
        title: "Ingénierie d'Application Logiciel",
        description:
            <List>
                <ListItem>
                    <ListItemText sx={listItemStyle}>
                        <span style={{color: "green", fontWeight: "bold"}}>Projet : </span>Créer une application Kafka qui récupère les données à partir d'une API Twitter
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PlayArrowTwoToneIcon sx={{ color: "#FFB400" }} />
                    </ListItemIcon>
                    <ListItemText sx={listItemStyle}>
                        Créer des services avec une pipeline Stream API Kafka qui récupère les tweets à partir d'une API Twitter, puis compter les #hashtags avec un agrégateur en projet Maven Java
                    </ListItemText>
                    <ImageContainer>
                        <img src={"images/kafka.png"} />
                    </ImageContainer>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PlayArrowTwoToneIcon sx={{ color: "#FFB400" }} />
                    </ListItemIcon>
                    <ListItemText sx={listItemStyle}>
                        Conteneuriser chaque service Kafka avec Docker et DockerHub (Dockerfiles)
                    </ListItemText>
                    <ImageContainer>
                        <img src={"images/docker.png"} />
                    </ImageContainer>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PlayArrowTwoToneIcon sx={{ color: "#FFB400" }} />
                    </ListItemIcon>
                    <ListItemText sx={listItemStyle}>
                        Orchestrer les conteneurs avec Kubernetes (HPA, ReplicaSet, ...), puis avec docker-compose
                    </ListItemText>
                    <ImageContainer>
                        <img src={"images/k8s.png"} />
                    </ImageContainer>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PlayArrowTwoToneIcon sx={{ color: "#FFB400" }} />
                    </ListItemIcon>
                    <ListItemText sx={listItemStyle}>
                        Créer une pipeline CI/CD pour automatiser l'intégration et le déploiement avec GitLab (JavaDoc, Unit Tests, Build, Compile LaTeX to Pdf)
                    </ListItemText>
                    <ImageContainer>
                        <img src={"images/cicd.png"} />
                    </ImageContainer>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PlayArrowTwoToneIcon sx={{ color: "#FFB400" }} />
                    </ListItemIcon>
                    <ListItemText sx={listItemStyle}>
                        Vérification de la qualité du code avec SonarQube
                    </ListItemText>
                    <ImageContainer>
                        <img src={"images/sonarqube.svg"} width={"100%"} />
                    </ImageContainer>
                </ListItem>
            </List>
    },
  {
    icon: <img src={"images/deeplearning.jpeg"} alt={"images/deeplearning.jpeg"} height={`100rem`} width={`100rem`}
               style={{objectFit: "contain"}}/>,
    title: "Deep Learning",
    description:
      <List>
        <ListItem>
          <ListItemText sx={listItemStyle}>
            <span style={{color: "green", fontWeight: "bold"}}>Projet : </span>Créer un réseau de neurones pour prédire
            la répartition des planctons (Compétition Kaggle)
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PlayArrowTwoToneIcon sx={{color: "#FFB400"}}/>
          </ListItemIcon>
          <ListItemText sx={listItemStyle}>
            Entraîner des modèles Deep Learning, puis améliorer les performances (CNN, FNN, ...)
          </ListItemText>
          <ImageContainer>
            <img src={"images/pytorch.png"}/>
          </ImageContainer>
        </ListItem>
        <ListItemDialog description={"Tester les modèles (F1 Score, Accuracy ...)"}/>
        <hr/>
        <ListItem>
          <ListItemText sx={listItemStyle}>
            <span style={{color: "green", fontWeight: "bold"}}>Projet : </span>Créer un réseau de neurones pour prédire
            la température dans une zone donnée (Compétition Kaggle)
          </ListItemText>
        </ListItem>
      </List>
  },
  {
    icon: <img src={"images/oop.jpeg"} alt={"images/oop.jpeg"} height={`100rem`} width={`100rem`}
               style={{objectFit: "contain", filter: "grayscale(100%)"}}/>,
    title: "Génie Logiciel Orienté Objet",
    description:
      <List>
        <ListItem>
          <ListItemText sx={listItemStyle}>
            <span style={{color: "green", fontWeight: "bold"}}>Projet : </span>Développement d'une solution pour
            location de vélo à Paris
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PlayArrowTwoToneIcon sx={{color: "#FFB400"}}/>
          </ListItemIcon>
          <ListItemText sx={listItemStyle}>
            Conception du logiciel en Orienté Objet (Java)
          </ListItemText>
          <ImageContainer>
            <img src={"images/java.png"}/>
          </ImageContainer>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PlayArrowTwoToneIcon sx={{color: "#FFB400"}}/>
          </ListItemIcon>
          <ListItemText sx={listItemStyle}>
            Modélisation logiciel UML avec Papyrus / Eclipse en utilisant les patrons de conception (Design Patterns)
          </ListItemText>
          <ImageContainer>
            <img src={"images/papyrus.svg"}/>
          </ImageContainer>
        </ListItem>
      </List>
  },
  {
    icon: <img src={"images/mobile.png"} alt={"images/mobile.png"} height={`100rem`} width={`100rem`}
               style={{objectFit: "contain"}}/>,
    title: "Développement Applications Mobiles",
    description:
      <List>
        <ListItem>
          <ListItemText sx={listItemStyle}>
            <span style={{color: "green", fontWeight: "bold"}}>Projet : </span>Développement d'une application mobile
            pour commander dans un restaurant
          </ListItemText>
        </ListItem>
        <ListItemDialog description={"Création d'une application android avec Android Studio"}
                        img={"images/androidstudio.png"}/>
        <ListItemDialog
          description={"Création d'une application native avec React Native à partir d'une maquette Adobe XD fournie par le client pour une crèche"}
          img={"images/react-native.png"}/>

      </List>
  },
  {
    icon: <img src={"images/webdeveloppement.jpeg"} alt={"images/webdeveloppement.jpeg"} height={`100rem`} width={`100rem`}
               style={{objectFit: "contain"}}/>,
    title: "Développement Site Web",
    description:
      <List>
        <ListItem>
          <ListItemText sx={listItemStyle}>
            <span style={{color: "green", fontWeight: "bold"}}>Projet : </span>Développement du Front-End du site
            vitrine du startup Appunto
          </ListItemText>
        </ListItem>
        <ListItemDialog
          description={"Développement d'une section pour afficher les client en React.js / Gatsby.js pour les sites statiques"}
          img={"images/gatsby.png"}/>
        <hr/>
        <ListItem>
          <ListItemText sx={listItemStyle}>
            <span style={{color: "green", fontWeight: "bold"}}>Projet : </span>Développement du Front-End d'un site pour
            visualisation des données
          </ListItemText>
        </ListItem>
        <ListItemDialog description={"Visualisation des données avec Recharts et D3.js"} img={"images/d3.png"}/>
        <hr/>
        <ListItem>
          <ListItemText sx={listItemStyle}>
            <span style={{color: "green", fontWeight: "bold"}}>Projet : </span>Développement Front-End et Back-End du
            site CRM interne de l'entreprise
          </ListItemText>
        </ListItem>
        <ListItemDialog
          description={"Création de pages en front-end pour le traitement de données comptables et sociales"}
          img={"images/reactjs.png"}/>
        <ListItemDialog description={"Traitement des données avec Django et Django Rest Framework"}
                        img={"images/drf.png"}/>
        <ListItemDialog description={"Gestion des tâches partagées avec Celery (File d'attente de tâches asynchrones)"}
                        img={"images/celery.png"}/>
        <ListItemDialog description={"Gestion de base de données clé-valeur avec Redis"} img={"images/redis.png"}/>

      </List>
  },
  {
    icon: <img src={"images/progr-gpu.png"} alt={"images/progr-gpu.png"} height={`100rem`}
               width={`100rem`}
               style={{objectFit: "contain"}}/>,
    title: "Programmation GPU",
    description:
      <List>
        <ListItem>
          <ListItemText sx={listItemStyle}>
            <span style={{color: "green", fontWeight: "bold"}}>Projet : </span> Amélioration de la performance du calcul
            pour un Kmeans avec Cuda
          </ListItemText>
        </ListItem>
        <ListItemDialog description={"Programmer côté GPU avec Cuda"} img={"images/cuda.jpeg"}/>
        <ListItemDialog
          description={"Archetecture d'un GPU Nvidia : Threads, Warps, Block, Grid, Shared Memory, Registers ..."}/>
        <ListItemDialog
          description={"Notion de coalescence / Allocation dynamique / Parallélisme des calculs / Opérations atomiques"}/>
      </List>
  },
  {
    icon: <img src={"images/bigdata.jpeg"} alt={"images/bigdata.jpeg"} height={`100rem`}
               width={`100rem`}
               style={{objectFit: "contain"}}/>,
    title: "Big Data",
    description:
      <List>
        <ListItem>
          <ListItemText sx={listItemStyle}>
            <span style={{color: "green", fontWeight: "bold"}}>Projet : </span> Exploitation du concepts Map-Reduce et
            SQL d'Apache Spark
          </ListItemText>
        </ListItem>
        <ListItemDialog
          description={"Programmer en pyspark une solution Map-Reduce qui permet de faire des calculs de moyenne sur des données en HDFS"}
          img={"images/spark.png"}/>
        <ListItemDialog description={"Exploitation des HDFS (Hadoop)"} img={"images/hadoop.png"}/>
        <ListItemDialog description={"Utilisation du concept SQL pour manipuler les données HDFS"}
                        img={"images/sql.png"}/>
        <hr/>
        <ListItem>
          <ListItemText sx={listItemStyle}>
            <span style={{color: "green", fontWeight: "bold"}}>Projet : </span> Création des pipelines pour traiter les
            données en utilisant Microsoft Azure Cloud
          </ListItemText>
        </ListItem>
        <ListItemDialog description={"Créer une pipeline pour traiter une immense quantité de données avec Azure"}
                        img={"images/azure.png"}/>
      </List>
  }
]

export const formations = [
  {
    location: "CentraleSupélec",
    city: "Metz - France",
    date: "Septembre 2020 - Décembre 2024",
    title: "Science des Données et de l'Information",
        status: "Étudiant - Apprenti",
        img: "images/centrale.png"
    },
    {
        location: "Lycée Numérique Colbert",
        city: "Tourcoing - France",
        date: "Septembre 2018 - Décembre 2020",
        title: "Classes Préparatoires aux Grandes Écoles option TSI - Mention Félicitations",
        status: "Étudiant",
        img: "images/colbert.svg"
    },
    {
        location: "Lycée Moulay Ismaïl",
        city: "Meknès - Maroc",
        date: "Septembre 2017 - Décembre 2018",
        title: "Baccalauréat Générale Sciences Mathématiques B option Science de l'Ingénieur - Mention Très Bien",
        status: "Étudiant",
        img: "images/bac.png"
    }
]

const moisMapping = {
    "Janvier": 0,
    "Février": 1,
    "Mars": 2,
    "Avril": 3,
    "Mai": 4,
    "Juin": 5,
    "Juillet": 6,
    "Août": 7,
    "Septembre": 8,
    "Octobre": 9,
    "Novembre": 10,
    "Décembre": 11
};

certificats.sort((a, b) => {
    const [moisA, anneeA] = a.date.split(" ");
    const [moisB, anneeB] = b.date.split(" ");
    
    const diffAnnee = parseInt(anneeB) - parseInt(anneeA);
    if (diffAnnee !== 0) return diffAnnee;

    return moisMapping[moisB] - moisMapping[moisA];
});
