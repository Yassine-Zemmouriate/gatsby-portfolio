import * as React from 'react';
import {Avatar, Stack, Button} from "@mui/material";
import styled from "styled-components";

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LevelField from "./LevelField";
import { Moon, House, Job, Grade, Feather, Code } from "../images/svgs";
import {useState} from "react";

export interface RightColumnProps {
    width : string;
}

const icons = [
    { id : 0,
        icon : <House/>
},
{id : 1,
    icon : <Code color={"black"}/>
},
{id : 2,
    icon : <Grade/>
},
{id : 3,
    icon : <Job/>
},
{id : 4,
    icon : <Feather/>
}
]

const RightColumn : React.FC<RightColumnProps> = ({width}) => {

    const [mode, setMode] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<number>(0);

    const handleClick = (id : number) => setSelectedId(id);

    return(
        <Container width={width}>
            <ModeIcon>
                <Moon />
            </ModeIcon>
            <ListIcon>
                {icons.map((element) => (
                    <IconContainer key={`icon-key-${element.id}`} bgcolor={selectedId === element.id ? "#FFB400" : "#F0F0F6"} onClick={() => handleClick(element.id)}>
                        {React.cloneElement(element.icon, { color : selectedId === element.id ? "#2B2B2B" : "#767676"})}
                    </IconContainer>
                ))}
            </ListIcon>
        </Container>
    )
}

export default RightColumn;

const Container = styled.div<{width : string}>`
    width : ${props => props.width};
    flex-direction: column;
    display: flex;
    background-color : #FFF;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const ModeIcon = styled.div`   
    margin-top: 50px;
    position : absolute;
    top : 50px;
    left : 50% - 15px;
`;

const ListIcon = styled.div`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    height: 400px;
    justify-content: space-between;
    align-items: center;
`;

const IconContainer = styled.div<{bgcolor : string}>`
    width : 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${props => props.bgcolor};
    cursor: pointer;
`;
