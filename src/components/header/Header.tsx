import * as React from 'react';
import styled from "styled-components";
import {convertPxtoRem, device} from "../utils/utils";

export interface HeaderProps {

}
const Header : React.FC<HeaderProps> = () => {
    return (
        <Container id={"section-0"}>
            <TextField>
                <Title>Yassine Zemmouriate <JobTitle>Consultant Data Scientist & FullStack Developer</JobTitle></Title>
            </TextField>
            {/* <ImageField>
                <img src={"images/output.png"} alt={"yassine"} height={"100%"} width={"100%"} style={{objectFit : "contain"}} />
            </ImageField> */}
        </Container>);
}

export default Header;

const Container = styled.div`
    height: 30rem;
    width: 100%;
    display: flex;
    gap: 2%;
    border-radius: 12px;
    background-image: url("images/header.png");
    backdrop-filter: blur(10px);
    background-position: center;
    background-size: 100% 100%;
    justify-content: center;
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
    margin-bottom: ${convertPxtoRem(20)}rem;
    @media screen and ${device.maxSmallTablet} {
        font-size: 25px;
    }
`;

const JobTitle = styled(Title)`
    color : #FFB400;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    color: #767676;
    line-height: 2rem;
    padding : 5px;
    text-align: left;
    @media screen and ${device.smalltablet} {
        font-size: ${convertPxtoRem(10)}rem;
        line-height: 1rem;
    }
`;

const ImageField = styled.div`
    display: flex;
    background-color: transparent;
    width: 38%;
    height: 100%;
    border-bottom-right-radius: ${convertPxtoRem(5)}rem ;
    text-align: center;
    align-items: center;
    justify-content: center;
    object-fit: contain;
`;