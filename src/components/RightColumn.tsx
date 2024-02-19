import * as React from 'react';
import {Avatar, Stack, Button} from "@mui/material";
import styled from "styled-components";

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LevelField from "./LevelField";

export interface RightColumnProps {
    width : string;
}

const RightColumn : React.FC<RightColumnProps> = ({width}) => {

    return(
        <Container width={width}>
            isjdofijsod
        </Container>
    )
}

export default RightColumn;

const Container = styled.div<{width : string}>`
    width : ${props => props.width};
    background-color : #FFF;
    min-height : 100%;
`;