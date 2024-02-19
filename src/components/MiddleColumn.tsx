import * as React from 'react';
import {Avatar, Stack, Button} from "@mui/material";
import styled from "styled-components";

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LevelField from "./LevelField";

export interface MiddleColumnProps {
    width : string;
}

const MiddleColumn : React.FC<MiddleColumnProps> = ({width}) => {

    return(
        <Container width={width}>
            isjdofijsodifjosidjfoisdjfoisdjfosdijfoisdjfoisdjfoidsjfosdjfoisdjfoi
        </Container>
    )
}

export default MiddleColumn;

const Container = styled.div<{width : string}>`
    width : ${props => props.width};
    background-color : #FFF;
    height : 100%;
`;