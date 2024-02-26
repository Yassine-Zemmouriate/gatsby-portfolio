import * as React from 'react';
import {Avatar, Stack, Button, CardActionArea, Chip} from "@mui/material";
import styled from "styled-components";

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LevelField from "../utils/LevelField";
import {convertPxtoRem} from "../utils/utils";
import {BootstrapTooltip} from "./RightColumn";
import {useState} from "react";

export interface SideBarProps {
    width : string;
}

function primaryAvatarStyle(width :  number, height : number) {

    return({
               backgroundColor: "rgb(240, 240, 246)",
               width: `${convertPxtoRem(width)}rem`,
               height: `${convertPxtoRem(height)}rem`,
               marginTop: `${convertPxtoRem(50)}rem`,
               marginBottom: `${convertPxtoRem(31)}rem`
           })
}

const stackStyle = {
    paddingBottom: `${convertPxtoRem(25)}rem`,
    borderBottom: "1.5px solid #F0F0F6",
    width: `${convertPxtoRem(220)}rem`
}

const socialMediaStyle = {
    backgroundColor : "#FFB400",
    width: `${convertPxtoRem(24)}rem`,
    height: `${convertPxtoRem(24)}rem`,
    cursor: "pointer"
}

const iconStyle = {
    width: `${convertPxtoRem(14)}rem`,
    height: `${convertPxtoRem(14)}rem`,
    color : "white"
}

export const cvButtonStyle = {
    marginTop : `${convertPxtoRem(25)}rem`,
    marginBottom : `${convertPxtoRem(25)}rem`,
    color : "black",
    backgroundColor : "#FFB400",
    borderRadius : "0px"
}

const dataJSON = {
    "age": "23",
    "adress" : "Metz, France",
    "permis" : "B",
    "phone" : "07 66 52 62 43",
    "status" : "En alternance",
    "email" : "yassinezemmouriate@gmail.com"
}

const languages = [
    {
        value : 100,
        title : "Français"
    },
    {
        value : 80,
        title : "Anglais"
    },
    {
        value : 100,
        title : "Arabe"
    }
]

const skills = [
    {
        title : "HTML",
        src : "images/html.png"
    },
    {
        title : "CSS",
        src : "images/css.png"
    },
    {
        title : "Javascript",
        src : "images/js.png"
    },
    {
        title : "Typescript",
        src : "images/ts.png"
    },
    {
        title : "ReactJS",
        src : "images/reactjs.png"
    },
    {
        title : "Django Rest Framework",
        src : "images/drf.png"
    },
    {
        title : "Gatsby",
        src : "images/gatsby.png"
    },
    {
        title : "Java",
        src : "images/java.png"
    },
    {
        title : "Docker",
        src : "images/docker.png"
    },
    {
        title : "Kubernetes",
        src : "images/k8s.png"
    },
    {
        title : "CI/CD pipeline",
        src : "images/cicd.png"
    },
    {
        title : "Git",
        src : "images/git.png"
    },
    {
        title : "C++",
        src : "images/cpp.png"
    },
    {
        title : "Cuda",
        src : "images/cuda.jpeg"
    },
    {
        title : "Python",
        src : "images/python.png"
    },
    {
        title : "Android Studio",
        src : "images/androidstudio.png"
    },
    {
        title : "React Native",
        src : "images/react-native.png"
    },
]

const devweb = skills.slice(0, 7);
const software = skills.slice(7, 12);
const gpu = skills.slice(12, 14);
const datascience = skills.slice(14, 15)
const appmobile = skills.slice(15, 17);

const LeftColumn : React.FC<SideBarProps> = ({width}) => {

    const [title, setTitle] = useState<string>("Appuyer pour copier");

    const onClickEmail = () => {
        setTitle("Copié !");
        navigator.clipboard.writeText("yassinezemmouriate@gmail.com").then(() => {
            setTimeout(() => setTitle("Appuyer pour copier"), 5000)
        }).catch(err => {
            console.error("Erreur lors de la copie du texte : ", err);
        })
}

    return (
        <Container width={width}>
            <AvatarField>
                <Avatar sx={primaryAvatarStyle(150, 150)}><img src={"images/output.png"} alt={"yassine"} height={"100%"} width={"100%"} style={{objectFit : "contain"}} /></Avatar>
                <NameField>yassine zemmouriate</NameField>
                <Chip label={"Data Scientist"} sx={{marginBottom : "15px", backgroundColor : "#FFB400", color : "white"}} />
                <Chip label={"Développeur Full-Stack"} sx={{marginBottom : "15px", backgroundColor : "#FFB400", color : "white"}} />
                <Stack direction={"row"} justifyContent={"center"} spacing={2} sx={stackStyle}>
                    <Avatar sx={socialMediaStyle}>
                        <a href={"https://www.facebook.com/yassine.zemmouri.503"} target={"_blank"}>
                            <FacebookRoundedIcon sx={iconStyle} />
                        </a>
                    </Avatar>
                    <Avatar sx={socialMediaStyle}>
                        <a href={"https://www.figma.com/file/8PtfHsECf7ijwdLu3Bu3gi/Preview--V2.0.0?type=design&node-id=5402-264&mode=design&t=S071zVZFu5wKOaJ4-0"} target={"_blank"}>
                            <XIcon sx={iconStyle}/>
                        </a>
                    </Avatar>
                    <Avatar sx={socialMediaStyle}>
                        <a href={"https://www.linkedin.com/in/yassine-zemmouriate-04a0b51b5"} target={"_blank"}>
                            <LinkedInIcon sx={iconStyle}/>
                        </a>
                    </Avatar>
                    <Avatar sx={socialMediaStyle}>
                        <a href={"pdf/cv.pdf"} target={"_blank"}>
                            <YouTubeIcon sx={iconStyle}/>
                        </a>
                    </Avatar>

                </Stack>
            </AvatarField>
            <InfosField>
                <FieldContainer>
                <KeyField>Age</KeyField>
                <ValueField>{dataJSON.age}</ValueField>
            </FieldContainer>
            <FieldContainer>
                <KeyField>Adresse</KeyField>
                <ValueField>{dataJSON.adress}</ValueField>
            </FieldContainer>
            <FieldContainer>
                <KeyField>Permis</KeyField>
                <ValueField>{dataJSON.permis}</ValueField>
            </FieldContainer>
            <FieldContainer>
                <KeyField>Téléphone</KeyField>
                <ValueField>{dataJSON.phone}</ValueField>
            </FieldContainer>
                <FieldContainer>
                <KeyField>Status</KeyField>
                <ValueField style={{color : "green"}}>{dataJSON.status}</ValueField>
            </FieldContainer>
                <FieldContainer>
                <KeyField>Email</KeyField>
                <ValueField id={"email-id"} onClick={onClickEmail}>
                    <BootstrapTooltip title={title} placement={"top"}>
                    <CardActionArea style={{fontSize: "15px", width: "140px", overflow: "hidden", textOverflow: "ellipsis"}}>
                        {dataJSON.email}
                    </CardActionArea>
                    </BootstrapTooltip>
                </ValueField>
            </FieldContainer>
            </InfosField>
            <LanguagesField>
                <LanguageTitle>Languages</LanguageTitle>
                {languages.map((element, index) => <LevelField key={`language-key-${index}`} value={element.value} title={element.title}/>)}
            </LanguagesField>
            <SkillsField>
                <SkillsTitle>IT Skills</SkillsTitle>
                <div style={{color : "green", paddingTop : "30px", paddingBottom : "15px"}}>Développement Web</div>
                {devweb.map((element, index) => (
                    <div key={`skill-key-${index}`} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px"
                    }}>
                        <span style={{marginBottom: "5px", flex: 4, color: "#767676"}}>{element.title}</span>
                        <div style={{flex: 1, height: "40px", width: "40px"}}>
                            <img src={element.src} alt={element.src} height={"100%"} width={"100%"}
                                 style={{objectFit: "contain"}}/>
                        </div>
                    </div>
                ))}
                <div style={{color : "green", paddingTop : "30px", paddingBottom : "15px", borderTop : "1px solid lightgrey"}}>Data Science</div>
                {datascience.map((element, index) => (
                    <div key={`skill-key-${index}`} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px"
                    }}>
                        <span style={{marginBottom: "5px", flex: 4, color: "#767676"}}>{element.title}</span>
                        <div style={{flex: 1, height: "40px", width: "40px"}}>
                            <img src={element.src} alt={element.src} height={"100%"} width={"100%"}
                                 style={{objectFit: "contain"}}/>
                        </div>
                    </div>
                ))}
                <div style={{color : "green", paddingTop : "30px", paddingBottom : "15px", borderTop : "1px solid lightgrey"}}>Ingénierie d'Application Logicielles</div>
                {software.map((element, index) => (
                    <div key={`skill-key-${index}`} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px"
                    }}>
                        <span style={{marginBottom: "5px", flex: 4, color: "#767676"}}>{element.title}</span>
                        <div style={{flex: 1, height: "40px", width: "40px"}}>
                            <img src={element.src} alt={element.src} height={"100%"} width={"100%"}
                                 style={{objectFit: "contain"}}/>
                        </div>
                    </div>
                ))}
                <div style={{color : "green", paddingTop : "30px", paddingBottom : "15px", borderTop : "1px solid lightgrey"}}>Programmation GPU</div>
                {gpu.map((element, index) => (
                    <div key={`skill-key-${index}`} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px"
                    }}>
                        <span style={{marginBottom: "5px", flex: 4, color: "#767676"}}>{element.title}</span>
                        <div style={{flex: 1, height: "40px", width: "40px"}}>
                            <img src={element.src} alt={element.src} height={"100%"} width={"100%"}
                                 style={{objectFit: "contain"}}/>
                        </div>
                    </div>
                ))}
                <div style={{color : "green", paddingTop : "30px", paddingBottom : "15px", borderTop : "1px solid lightgrey"}}>Développement Mobile</div>
                {appmobile.map((element, index) => (
                        <div key={`skill-key-${index}`} style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "10px"
                        }}>
                            <span style={{marginBottom: "5px", flex: 4, color: "#767676"}}>{element.title}</span>
                            <div style={{flex: 1, height: "40px", width: "40px"}}>
                                <img src={element.src} alt={element.src} height={"100%"} width={"100%"}
                                     style={{objectFit: "contain"}}/>
                            </div>
                        </div>
                ))}
            </SkillsField>
            <a href={"pdf/cv.pdf"} target={"_blank"}>
                <Button sx={cvButtonStyle} endIcon={<GetAppOutlinedIcon />}>Télécharger CV</Button>
            </a>
        </Container>
    )
}

export default LeftColumn;

const InfosField = styled.div`
    width: 80%;
    padding-top: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid #F0F0F6;
`;

const LanguagesField = styled(InfosField)`
    padding-top : 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid #F0F0F6;
`;

const LanguageTitle = styled.div`
    font-size : 18px;
    padding-bottom : 15px;
`;

const SkillsField = styled(LanguagesField)``;
const SkillsTitle = styled(LanguageTitle)``;


const Container = styled.div<{width : string}>`
    width : ${props => props.width};
    background-color: #FFF;
    justify-content: start;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NameField = styled.div`
    font-family: Inter,sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 123.6%; /* 22.248px */
    text-transform: capitalize;
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
`;

const JobField = styled(NameField)`
    color: #FFB400;
    font-size: 12px;
    font-weight: 400;
    padding: ${convertPxtoRem(1)}rem ${convertPxtoRem(1)}rem;
    border-radius: 20px;
    background-color: #F0F0F6;
    line-height: 24px; /* 160% */
    text-transform: capitalize;
    margin-bottom: 15px;
`;
const AvatarField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FieldContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 9px;
`;

const KeyField = styled.div`
    display: flex;
    font-size: 15px;
    background-color: #FFB400;
    justify-content: center;
    align-items: center;
    height: 24px;
    padding : 2px 4px 2px;
    border-radius: 5px;
`;

const ValueField = styled.div`
    font-size: 15px;
    width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
`;
