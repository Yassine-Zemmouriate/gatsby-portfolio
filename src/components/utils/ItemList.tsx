import React, { CSSProperties } from 'react';
import styled from "styled-components";
import { CardActionArea } from "@mui/material";
import DialogComponent from "./DialogComponent";

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
    handleClose: () => void;
    handleClick: () => void;
    style? : CSSProperties;
}

const ItemList: React.FC<ItemListProps> = ({ id, location, status, city, date, description, title, image, clickable = false, open = false, handleClose, handleClick, style }) => {

    return !clickable ? (
        <Container id={id} style={style}>
            <ImageContainer>
                <img src={image} alt={image} height={"100%"} width={"100%"} style={{ objectFit: "contain" }} />
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
        </Container>
    )
        :
        (
            <Container id={id} style={{ border: "none" }}>
                <CardActionArea id={id} sx={{...containerStyle, ...style}} onClick={handleClick}>
                    <ImageContainer>
                        <img src={image} alt={image} height={"100%"} width={"100%"} style={{ objectFit: "contain" }} />
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
                <DialogComponent title={''} contentText={undefined} open={open} handleClose={handleClose} />
            </Container>
        )

}

export default ItemList;

const containerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "3%",
    borderBottom: "1px solid #F0F0F6",
    paddingBottom: "22px",
    paddingTop: "11px",
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap : 3%;
    border-bottom: 1px solid #F0F0F6;
    padding-bottom: 22px;
    padding-top: 11px;
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
    font-size: 18px;
    font-style: italic;
`;

const DescriptionContainer = styled.div`
    color : #767676;
    font-size: 15px;
    line-height: 24px;
    text-align: justify;
`;

const StatusContainer = styled.div`
    color : green;
    font-size: 15px;
    margin-bottom: 10px;
`;

const LocationContainer = styled.div`
    font-size: 18px;
    font-style: italic;
    margin-bottom: 28px;
`;

const DateContainer = styled.div`
    font-size: 10px;
    background-color: #FFB400;
    color : white;
    padding : 2px 4px 2px;
    width : auto;
`;

const ImageContainer = styled.div`
    flex : 1;
`;

const CityContainer = styled.div`
    margin-top: 10px;
    font-style: italic;
    color : #767676;
    font-size: 10px;
`;