import * as React from 'react';
import styled from "styled-components";
import {
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    List,
    ListItem,
    ListItemText,
    Chip,
    Stack,
    Button, Avatar
} from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import PlayArrowTwoToneIcon from '@mui/icons-material/PlayArrowTwoTone';

import Header from '../header/Header';
import Section from "../utils/Section";
import DialogComponent from "../utils/DialogComponent";
import { useState } from "react";
import ItemList from "../utils/ItemList";
import {certificats, fields, formations, jobs} from "../utils/data";
import {convertPxtoRem, device} from "../utils/utils";
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export interface MiddleColumnProps {
    width: string;
}

type ThemeProps = "dark" | "light";
export const ImageContainer = styled.div`
    display : flex;
    justify-content: space-between;
    height: ${convertPxtoRem(70)}rem;
    width: 30%;
    object-fit: fill;
`;

function avatarStyle(width :  number, height : number) {

    return({
               backgroundColor: "rgb(240, 240, 246)",
               width: `${convertPxtoRem(width)}rem`,
               height: `${convertPxtoRem(height)}rem`,
                marginLeft : "6px"
           })
}

const listStyle = {
    borderRadius: `${convertPxtoRem(6)}rem`,
    backgroundColor: "#FFFFFF",
    width: "100%",
    paddingTop: "0px",
    paddingLeft: `${convertPxtoRem(37)}rem`,
    paddingRight: `${convertPxtoRem(29)}rem`,
    paddingBottom: "0px"
}

const MiddleColumn: React.FC<MiddleColumnProps> = ({ width }) => {

    const [isOpen, setOpen] = useState<string | null>(null);
    const [theme, setTheme] = useState<ThemeProps>("light");

    const handleClick = (id: string) => {
        setOpen(id);
    }

    const handleClose = () => {
        setOpen(null);
    }

    return (
        <Container width={width}>
            <MobileHeaderContainer>
                <Avatar sx={avatarStyle(50, 50)}><img src={"images/output.png"} alt={"yassine"} height={"100%"} width={"100%"} style={{objectFit : "contain"}} /></Avatar>
                <div>
                    { theme === "light" ? <LightModeIcon sx={{color : "#FFB400", marginRight : "6px"}} onClick={() => setTheme(currentTheme => (currentTheme === 'light' ? "dark" : "light"))} /> : <DarkModeIcon sx={{color : "#FFB400", marginRight : "6px"}} onClick={() => setTheme(currentTheme => (currentTheme === 'light' ? "dark" : "light"))} />}
                    <MenuIcon sx={{marginRight : "20px"}}/>
                </div>
            </MobileHeaderContainer>
            <Header />
            <Section id={"section-moi"} title={"À propos de moi"} description={""}>
                <List sx={{...listStyle, padding : "20px 30px", textAlign : "justify", lineHeight : "30px"}}>
                    Bonjour 👋 ! Je suis Yassine Zemmouriate, un étudiant en alternance passionné par les sciences des données et le développement web et mobile. Avec une solide expérience en apprentissage en projets innovants, je crée des solutions numériques que ça soit en rapport avec le Data science ou Sotware Engineering. Bienvenue sur mon portfolio créé par mes soins !
                </List>
            </Section>
            <Section id={"section-1"} title={"Mes Diplômes & Formations"} description={""}>
                <List sx={listStyle}>
                    {formations.map((element, index) => (
                        <ItemList
                            id={`formation-id-${element.id}`}
                            handleClick={() => handleClick(`formation-id-${element.id}`)}
                            location={element.location}
                            status={element.status}
                            date={element.date}
                            title={element.title}
                            image={element.img}
                            city={element.city}
                            open={isOpen === `formation-id-${element.id}`}
                            handleClose={handleClose}
                            style={index === formations.length - 1 ? {borderBottom : "none"} : {}}
                        />
                    ))}
                </List>
            </Section>
            <Section id={"section-2"} title={"Mes Expériences Professionnelles"} description={""}>
                <List sx={listStyle}>
                    {jobs.map((element, index) => (
                        <ItemList
                            id={`job-id-${element.id}`}
                            handleClick={() => handleClick(`job-id-${element.id}`)}
                            location={element.location}
                            status={element.status}
                            date={element.date}
                            title={element.title}
                            image={element.img}
                            city={element.city}
                            open={isOpen === `job-id-${element.id}`}
                            handleClose={handleClose}
                            style={index === jobs.length - 1 ? {borderBottom : "none"} : {}}
                            clickable={true}
                            dialogContent={element.dialogContent}
                        />
                    ))}
                </List>
            </Section>
            <Section id={"section-3"} title={"Mes Certificats"} description={""}>
                <List sx={listStyle}>
                    {certificats.map((element, index) => (
                        <ItemList 
                            id={`certificat-id-${element.id}`}
                            location={element.location}
                            status={element.status}
                            date={element.date}
                            title={element.title}
                            image={element.img}
                            height={"60%"}
                            width={"60%"}
                            open={isOpen === `certificat-id-${element.id}`}
                            handleClose={handleClose}
                            clickable={true}
                            handleClick={() => handleClick(`certificat-id-${element.id}`)}
                            style={index === certificats.length - 1 ? {borderBottom : "none"} : {}}
                            dialogContent={element.dialogContent}
                        />
                    ))}
                </List>
            </Section>
            <Section id={"section-4"} title={"Mes Expériences Académiques"} description={""}>
                <ContentContainer>
                    {fields.map((elmnt, idx) => (
                        <Card variant={"outlined"} sx={cardStyle} key={`card-${elmnt.id}`}>
                            <CardActionArea sx={{ width: "100%", height: "100%" }} onClick={() => handleClick(`card-${elmnt.id}`)}>
                                <CardMedia>
                                    {elmnt.icon}
                                </CardMedia>
                                <CardContent>
                                    <CardTitle>{elmnt.title}</CardTitle>
                                </CardContent>
                            </CardActionArea>
                            <DialogComponent title={elmnt.title} contentText={elmnt.description} open={isOpen === `card-${elmnt.id}`} handleClose={handleClose} />
                        </Card>
                    ))}
                </ContentContainer>
            </Section>
            
        </Container>
    )
}
export default MiddleColumn;

const Container = styled.div<{ width: string }>`
    width : ${props => props.width};
    background-color : #F0F0F6;
    height : 100%;
    text-align: center;
`;

const MobileHeaderContainer = styled.div`
    display: none;
    @media screen and ${device.smalltablet} {
        width : 100%;
        height: ${convertPxtoRem(60)}rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        margin-bottom: ${convertPxtoRem(20)}rem;
        border-radius: 500px;
    }
`;

const ContentContainer = styled.div`
    width : 100%;
    height : 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: ${convertPxtoRem(20)}rem;
    column-gap: ${convertPxtoRem(20)}rem;
`;

const CardTitle = styled.div`
    font-size: ${convertPxtoRem(18)}rem;
    font-family: Inter, sans-serif;
    font-style: normal;
`;

export const cardStyle = {
    height: `${convertPxtoRem(225)}rem`,
    width: "40%",
}

