import React from 'react';
import styled from "styled-components";

interface ItemListProps {
    location : string;
    city? : string;
    status : string;
    date : string;
    title : string;
    description : string;
    image? : string;
}

const ItemList : React.FC<ItemListProps> = ({location, status, city, date, description, title, image}) => {

return (
    <Container>
        <LeftContainer>
            <LocationContainer>
                {location}
            </LocationContainer>
                <div style={{display : "flex", alignItems : "center", width : "80%", justifyContent : "space-between"}}>
                    <StatusContainer>
                        {status}
                    </StatusContainer>
                    <DateContainer>
                        {date}
                    </DateContainer>
                </div>
            <CityContainer>{city}</CityContainer>
        </LeftContainer>
        <RightContainer>
            <TitleContainer>
                {title}
            </TitleContainer>
            <DescriptionContainer>
                {description}
            </DescriptionContainer>
        </RightContainer>
        <ImageContainer>
            <img src={image} alt={image} height={"100%"} width={"100%"} style={{objectFit: "contain"}}/>
        </ImageContainer>
    </Container>
)

}

export default ItemList;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap : 3%;
    border-bottom: 1px solid #F0F0F6;
    padding-bottom: 22px;
    padding-top: 11px;
`;

const LeftContainer = styled.div`
    flex : 3;
    text-align: left;
`;

const RightContainer = styled.div`
    flex : 3;
    text-align: left;
`;

const TitleContainer = styled.div`
    font-size: 18px;
    font-style: italic;
    margin-bottom: 28px;
`;

const DescriptionContainer = styled.div`
    color : #767676;
    font-size: 15px;
    line-height: 24px;
    text-align: justify;
`;

const StatusContainer = styled.div`
    font-size: 15px;
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
`;

const ImageContainer = styled.div`
    flex : 1;
`;

const CityContainer = styled.div`
    margin-top: 5px;
    font-style: italic;
    color : #767676;
    font-size: 10px;
`;