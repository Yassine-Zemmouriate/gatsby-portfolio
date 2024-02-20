import * as React from 'react';
import styled from "styled-components";

export interface HeaderProps {

}
const Header : React.FC<HeaderProps> = () => {
    return (
        <Container id={"section-0"}>
            <TextField>
                <Title>Yassine Zemmouriate <JobTitle>Consultant Data Scientist & FullStack Developer</JobTitle></Title>
                <Description>
                    Je suis un jeune en alternance en tant que Consultant Data Scientist chez Batt & Associés, je suis très passionné par ce domaine, et par le développement we
                </Description>
            </TextField>
            <ImageField>Image en cours de fabrication</ImageField>
        </Container>);
}

export default Header;

const Container = styled.div`
    height: 30rem;
    width: 100%;
    display: flex;
    gap: 2%;
    border-radius: 5px;
    background-image: url("images/img_1.png");
    background-position: center;
    background-size: 100% 100%;
`;

const TextField = styled.div`
    width: 60%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-bottom-left-radius: 5px;
`;

const Title = styled.div`
    font-size : 48px;
    font-style: normal;
    margin-bottom: 20px;
`;

const JobTitle = styled(Title)`
    color : #FFB400;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    color: #767676;
    line-height: 2rem;
`;

const ImageField = styled.div`
    display: flex;
    background-color: transparent;
    width: 38%;
    border-bottom-right-radius: 5px ;
    text-align: center;
    align-items: center;
    justify-content: center;
`;