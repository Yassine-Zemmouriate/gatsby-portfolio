import * as React from "react"
import {PageProps} from "gatsby"
import LeftColumn from "../components/columns/LeftColumn";
import MiddleColumn from "../components/columns/MiddleColumn";
import RightColumn from "../components/columns/RightColumn";
import styled from "styled-components";
import {device} from "../components/utils/utils";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Container>
            <LeftColumn width="21%"/>
            <MiddleColumn width="67%"/>
            <RightContainer>
                <RightColumn width={"8%"}/>
            </RightContainer>
        </Container>
    )
}

export default IndexPage

const Container = styled.div`
    display: flex;
    justify-content : center;
    gap: 2%;
    font-family: Inter, Roboto, sans-serif, serif;
    background-color: #F0F0F6;
    position : relative;
    max-width : 1536px;
    margin : auto;
    @media screen and ${device.smalltablet}
    {
        gap : 0;
    }`;

const RightContainer = styled.div`
    position: relative;
    width: 8%;
    height: 100%;
    
    @media screen and ${device.smalltablet} {
        display: none;
    }
`;
