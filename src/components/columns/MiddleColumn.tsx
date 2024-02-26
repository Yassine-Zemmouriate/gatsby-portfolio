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
    Button, Avatar, Drawer, createTheme, ThemeProvider
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
import {Simulate} from "react-dom/test-utils";
import toggle = Simulate.toggle;
import {BootstrapTooltip, icons} from "./RightColumn";

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
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<number>(0);

    const handleIconsClick = (id : number) => {
        setSelectedId(id);
        const element = document.getElementById(`section-${id}`);
        if (element) {
            element.scrollIntoView({behavior : "smooth", block: "start", inline : "nearest"})
        }
    };

    const toggleDrawer = (newOpen: boolean) => {
        setDrawerOpen(newOpen);
    }
    const handleClick = (id: string) => {
        setOpen(id);
    }

    const handleClose = () => {
        setOpen(null);
    }

    const themeBackdrop = createTheme({
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(0, 0, 0, 0.05)'
                }
            }
        }
    }
})



    return (
        <Container width={width}>
            <MobileHeaderContainer>
                <Avatar sx={avatarStyle(50, 50)}><img src={"images/output.png"} alt={"yassine"} height={"100%"} width={"100%"} style={{objectFit : "contain"}} /></Avatar>
                <div>
                    { theme === "light" ? <LightModeIcon sx={{color : "#FFB400", marginRight : "6px"}} onClick={() => setTheme(currentTheme => (currentTheme === 'light' ? "dark" : "light"))} /> : <DarkModeIcon sx={{color : "#FFB400", marginRight : "6px"}} onClick={() => setTheme(currentTheme => (currentTheme === 'light' ? "dark" : "light"))} />}
                    <MenuIcon sx={{marginRight : "20px"}} onClick={() => toggleDrawer(true)}/>
                    <ThemeProvider theme={themeBackdrop}>
                    <Drawer anchor={"right"} open={drawerOpen} onClose={() => toggleDrawer(false)} PaperProps={{sx: {justifyContent: 'center', width : "6rem"}}}>
                        <ListIcon>
                        {icons.map((element) => (
                    <IconContainer key={`icon-key-${element.id}`} color={selectedId === element.id ? "#FFB400" : "#F0F0F6"} onClick={() => handleIconsClick(element.id)}>
                        {React.cloneElement(element.icon, { color : selectedId === element.id ? "#2B2B2B" : "#767676", sx : selectedId === element.id ? {color : "#2B2B2B"} : {color : "#767676"}})}
                    </IconContainer>

                ))}
                        </ListIcon>
                    </Drawer>
                        </ThemeProvider>
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
  @media screen and ${device.smalltablet} {
    width : 100%;
  }
`;

const IconContainer = styled.div<{color : string}>`
    width : ${convertPxtoRem(40)}rem;
    height: ${convertPxtoRem(40)}rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor: pointer;
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
      position: sticky;
      top: 10px;
      z-index: 1;
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

const ListIcon = styled.div`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    height: 80%;
    justify-content: space-between;
    align-items: center;
`;

export const cardStyle = {
    height: `${convertPxtoRem(225)}rem`,
    width: "40%",
}

