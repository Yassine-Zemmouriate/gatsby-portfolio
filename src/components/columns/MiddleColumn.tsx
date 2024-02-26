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
    Button
} from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import PlayArrowTwoToneIcon from '@mui/icons-material/PlayArrowTwoTone';

import Header from '../header/Header';
import Section from "../utils/Section";
import DialogComponent from "../utils/DialogComponent";
import { useState } from "react";
import ItemList from "../utils/ItemList";
import {certificats, fields, formations, jobs} from "../utils/data";
import {convertPxtoRem} from "../utils/utils";

export interface MiddleColumnProps {
    width: string;
}

export const ImageContainer = styled.div`
    display : flex;
    justify-content: space-between;
    height: ${convertPxtoRem(70)}rem;
    width: 30%;
    object-fit: fill;
`;

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

    const handleClick = (id: string) => {
        setOpen(id);
    }

    const handleClose = () => {
        setOpen(null);
    }

    return (
        <Container width={width}>
            <Header />
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

