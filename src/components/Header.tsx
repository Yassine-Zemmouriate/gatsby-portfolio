import * as React from 'react';
import styled from "styled-components";

export interface HeaderProps {

}
const Header : React.FC<HeaderProps> = () => {
    return (
        <Container>
            Header
        </Container>);
}

export default Header;

const Container = styled.div`
    height : 100px;
    width : 100%;
    background-color: cornflowerblue;
`;