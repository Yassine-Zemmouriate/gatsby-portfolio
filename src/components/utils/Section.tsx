import * as React from 'react';
import styled from "styled-components";
import {convertPxtoRem} from "./utils";

interface SectionProps {
    id : string;
    title : string;
    description : string;
    children? : React.ReactNode;
}

const Section : React.FC<SectionProps> = ({id, title, description, children}) => {

    return(
        <Container id={id}>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <ChildrenContainer>
                {children}
            </ChildrenContainer>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: transparent;
    margin-top: ${convertPxtoRem(35)}rem;
    margin-bottom: ${convertPxtoRem(60)}rem;
    padding-top: ${convertPxtoRem(15)}rem;
`;

const Title = styled.div`
    font-size : ${convertPxtoRem(32)}rem
`;

const Description = styled.div`
    margin-top: ${convertPxtoRem(25)}rem;
    font-size: ${convertPxtoRem(15)}rem;
    color : #767676;
    font-style: italic;
`;

const ChildrenContainer = styled.div`
    margin-top: ${convertPxtoRem(50)}rem;
    height : auto;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;




export default Section;