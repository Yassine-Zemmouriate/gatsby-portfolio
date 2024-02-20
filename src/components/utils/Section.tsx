import * as React from 'react';
import styled from "styled-components";

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
    margin-top: 137px;
`;

const Title = styled.div`
    font-size : 32px
`;

const Description = styled.div`
    margin-top: 25px;
    font-size: 15px;
    color : #767676;
    font-style: italic;
`;

const ChildrenContainer = styled.div`
    margin-top: 50px;
    height : auto;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;




export default Section;