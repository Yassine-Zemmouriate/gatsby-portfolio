import * as React from 'react';
import {Avatar, Stack} from "@mui/material";
import styled from "styled-components";

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LevelField from "./LevelField";

export interface SideBarProps {

}

const primaryAvatarStyle = {
    bgcolor: "#FFB400",
    width: "150px",
    height: "150px",
    marginTop: "50px",
    marginBottom: "31px",
    cursor: "pointer"
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

const dataJSON = {
    "age": "23",
    "adress" : "76 rue Sente à My 57070 Metz",
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

const SideBar : React.FC<SideBarProps> = () => {
    return (
        <Container>
            <AvatarField>
                <Avatar sx={primaryAvatarStyle}>YZ</Avatar>
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
                {languages.map((element) => <LevelField value={element.value} title={element.title}/>)}
            </LanguagesField>
        </Container>
    )
}

export default SideBar;

const LanguageTitle = styled.div`
    font-size : 18px;
    padding-bottom : 15px;
`;

const Container = styled.div`
    height : 100%;
    width : 305px;
    background-color: #FFF;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: start;
    display: flex;
    margin-bottom: 15px;
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

const InfosField = styled.div`
    width: 80%;
    padding-top: 25px;
    padding-bottom: 13px;
    border-bottom: 1px solid #F0F0F6;
`;

const LanguagesField = styled(InfosField)`
    padding-top : 12px;
    padding-bottom: 13px;
    border-bottom: 1px solid #F0F0F6;
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
