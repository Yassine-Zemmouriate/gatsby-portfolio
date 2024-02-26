import React, { CSSProperties } from 'react';
import styled from "styled-components";
import { CardActionArea } from "@mui/material";
import DialogComponent from "./DialogComponent";
import {convertPxtoRem} from "./utils";

interface ItemListProps {
    id: string;
    location: string;
    city?: string;
    status: string;
    date: string;
    title: string;
    description?: string | React.ReactNode;
    image?: string;
    clickable?: boolean;
    open: boolean;
    height? : string;
    width? : string;
    handleClose: () => void;
    handleClick: () => void;
    style? : CSSProperties;
    dialogContent? : {
        title : string;
        contentText : string | React.ReactNode;
    }
}

const ItemList: React.FC<ItemListProps> = ({ id, location, status, city, date, description, title, image, clickable = false, open = false, handleClose, handleClick, style , dialogContent, height = "100%", width = "100%"}) => {

    return !clickable ? (
        <Container id={id} style={style}>
            <ImageContainer>
                <img src={image} alt={image} height={height} width={width} style={{ objectFit: "contain" }} />
            </ImageContainer>
            <LeftContainer>
                <LocationContainer>
                    {location}
                </LocationContainer>
                <StatusContainer>
                    {status}
                </StatusContainer>
                <DateContainer>
                    {date}
                </DateContainer>
                <CityContainer>
                    {city}
                </CityContainer>
            </LeftContainer>
            <RightContainer>
                <TitleContainer>
                    {title}
                </TitleContainer>
                {description && <DescriptionContainer>
                    {description}
                </DescriptionContainer>}
            </RightContainer>
        </Container>
    )
        :
        (
            <Container id={id} style={{ border: "none" }}>
                <CardActionArea id={id} sx={{...containerStyle, ...style}} onClick={handleClick}>
                    <ImageContainer>
                        <img src={image} alt={image} height={height} width={width} style={{ objectFit: "contain" }} />
                    </ImageContainer>
                    <LeftContainer>
                        <LocationContainer>
                            {location}
                        </LocationContainer>
                        <StatusContainer>
                            {status}
                        </StatusContainer>
                        <DateContainer>
                            {date}
                        </DateContainer>
                        <CityContainer>{city}</CityContainer>
                    </LeftContainer>
                    <RightContainer>
                        <TitleContainer>
                            {title}
                        </TitleContainer>
                        {description && <DescriptionContainer>
                            {description}
                        </DescriptionContainer>}
                    </RightContainer>
                </CardActionArea>
                <DialogComponent title={dialogContent?.title ? dialogContent?.title : "" } contentText={dialogContent?.contentText} open={open} handleClose={handleClose} />
            </Container>
        )

}

export default ItemList;

const containerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "3%",
    borderBottom: "1px solid #F0F0F6",
    paddingBottom: `${convertPxtoRem(22)}rem`,
    paddingTop: `${convertPxtoRem(11)}rem`,
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap : 3%;
    border-bottom: 1px solid #F0F0F6;
    padding-bottom: ${convertPxtoRem(22)}rem;
    padding-top: ${convertPxtoRem(11)}rem;
`;

const LeftContainer = styled.div`
    flex : 2;
    text-align: left;
`;

const RightContainer = styled.div`
    display: flex;
    flex : 4;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

const TitleContainer = styled.div`
    font-size: ${convertPxtoRem(18)}rem;
    font-style: italic;
`;

const DescriptionContainer = styled.div`
    color : #767676;
    font-size: ${convertPxtoRem(15)}rem;
    line-height: ${convertPxtoRem(24)}rem;
    text-align: justify;
`;

const StatusContainer = styled.div`
    color : green;
    font-size: ${convertPxtoRem(15)}rem;
    margin-bottom: ${convertPxtoRem(10)}rem;
`;

const LocationContainer = styled.div`
    font-size: ${convertPxtoRem(18)}rem;
    font-style: italic;
    margin-bottom: ${convertPxtoRem(28)}rem;
`;

const DateContainer = styled.div`
    font-size: ${convertPxtoRem(10)}rem;
    background-color: #FFB400;
    color : white;
    padding : ${convertPxtoRem(2)}rem ${convertPxtoRem(4)}rem ${convertPxtoRem(2)}rem;
    width : auto;
`;

const ImageContainer = styled.div`
    flex : 1;
`;

const CityContainer = styled.div`
    margin-top: ${convertPxtoRem(10)}rem;
    font-style: italic;
    color : #767676;
    font-size: ${convertPxtoRem(10)}rem;
`;