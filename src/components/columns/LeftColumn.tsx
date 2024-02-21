import * as React from 'react';
import {Avatar, Stack, Button} from "@mui/material";
import styled from "styled-components";

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LevelField from "../utils/LevelField";

export interface SideBarProps {
    width : string;
}

function primaryAvatarStyle(width :  number, height : number) {

    return({
               bgcolor: "#FFB400",
               width: `${width}px`,
               height: `${height}px`,
               marginTop: "50px",
               marginBottom: "31px",
               cursor: "pointer"
           })
}

const stackStyle = {
    paddingBottom: "25px",
    borderBottom: "1.5px solid #F0F0F6",
    width: "220px"
}

const socialMediaStyle = {
    bgcolor : "#FFB400",
    width: "24px",
    height: "24px",
    cursor: "pointer"
}

const iconStyle = {
    width: "14px",
    height: "14px"
}

export const cvButtonStyle = {
    marginTop : '25px',
    marginBottom : '25px',
    color : "black",
    backgroundColor : "#FFB400",
    borderRadius : "0px"
}

const dataJSON = {
    "age": "23",
    "adress" : "Metz, France",
    "permis" : "B",
    "phone" : "07 66 52 62 43",
    "status" : "En alternance"
}

const languages = [
    {
        value : 100,
        title : "Arabe"
    },
    {
        value : 100,
        title : "Français"
    },
    {
        value : 80,
        title : "Anglais"
    }
]

const skills = [
    {
        value : 100,
        title : "HTML"
    },
    {
        value : 100,
        title : "CSS"
    },
    {
        value : 100,
        title : "Javascript"
    },
    {
        value : 100,
        title : "Java"
    },
    {
        value : 100,
        title : "C++"
    },
    {
        value : 100,
        title : "Cuda"
    },
    {
        value : 100,
        title : "Python"
    },
    {
        value : 100,
        title : "ReactJS"
    },
    {
        value : 100,
        title : "Django Rest Framework"
    },
    {
        value : 100,
        title : "Docker"
    },
    {
        value : 100,
        title : "Kubernetes"
    },
    {
        value : 100,
        title : "CI/CD pipeline"
    },
    {
        value : 100,
        title : "Git"
    },
    {
        value : 100,
        title : "Gatsby"
    },
    {
        value : 100,
        title : "DevOps"
    },
]

const LeftColumn : React.FC<SideBarProps> = ({width}) => {

    return (
        <Container width={width}>
            <AvatarField>
                <Avatar sx={primaryAvatarStyle(150, 150)}>YZ</Avatar>
                <NameField>yassine zemmouriate</NameField>
                <JobField>Data Scientist & Développeur Full-Stack </JobField>
                <Stack direction={"row"} justifyContent={"center"} spacing={2} sx={stackStyle}>
                    <Avatar sx={socialMediaStyle}>
                        <FacebookRoundedIcon sx={iconStyle} />
                    </Avatar>
                    <Avatar sx={socialMediaStyle}>
                        <XIcon sx={iconStyle} />
                    </Avatar>
                    <Avatar sx={socialMediaStyle}>
                        <LinkedInIcon sx={iconStyle} />
                    </Avatar>
                    <Avatar sx={socialMediaStyle}>
                        <YouTubeIcon sx={iconStyle} />
                    </Avatar>

                </Stack>
            </AvatarField>
            <InfosField>
                <FieldContainer>
                <KeyField>Age : </KeyField>
                <ValueField>{dataJSON.age}</ValueField>
            </FieldContainer>
            <FieldContainer>
                <KeyField>Adresse : </KeyField>
                <ValueField>{dataJSON.adress}</ValueField>
            </FieldContainer>
            <FieldContainer>
                <KeyField>Permis : </KeyField>
                <ValueField>{dataJSON.permis}</ValueField>
            </FieldContainer>
            <FieldContainer>
                <KeyField>Téléphone : </KeyField>
                <ValueField>{dataJSON.phone}</ValueField>
            </FieldContainer>
                <FieldContainer>
                <KeyField>Status : </KeyField>
                <ValueField>{dataJSON.status}</ValueField>
            </FieldContainer>
            </InfosField>
            <LanguagesField>
                <LanguageTitle>Languages</LanguageTitle>
                {languages.map((element, index) => <LevelField key={`language-key-${index}`} value={element.value} title={element.title}/>)}
            </LanguagesField>
            <SkillsField>
                <SkillsTitle>Skills</SkillsTitle>
                {skills.map((element, index) => <LevelField key={`skill-key-${index}`} value={element.value} title={element.title} display={false} displaybar={false} />)}
            </SkillsField>
            <a href={"static/pdf/cv.pdf"} target={"_blank"}>
                <Button sx={cvButtonStyle} >Télécharger CV</Button>
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
    height : 100%;
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
    color: #767676;
    font-size: 15px;
    font-weight: 400;
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
    margin-bottom: 9px;
`;

const KeyField = styled.div`
    display: flex;
    font-size: 15px;
    background-color: #FFB400;
    justify-content: center;
    align-items: center;
    height: 24px;
    padding-left: 3px;
    padding-right : 3px;
`;

const ValueField = styled.div`
    font-size: 15px;
    max-width: 140px;
`;
