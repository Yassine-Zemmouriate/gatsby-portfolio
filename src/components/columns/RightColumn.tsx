import * as React from 'react';
import styled from "styled-components";
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { House, Job, Grade, Feather, Code } from "../utils/svgs";
import {useEffect, useState} from "react";
import {convertPxtoRem} from "../utils/data";

export interface RightColumnProps {
    width : string;
}

const icons = [
    {   id : 0,
        icon : <House/>,
        title : "À propos de moi"
    },
{id : 1,
    icon : <Grade/>,
    title : "Diplômes / Formations"
},
{id : 2,
    icon : <Feather/> ,
    title : "Académiques"
},
{id : 3,
    icon : <Job/>,
    title : "Professionnelles"
},
    {
        id: 4,
        icon : <WorkspacePremiumIcon />,
        title : "Certifications"
    }
]

export const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#3A3B3C",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#3A3B3C",
  },
}));

const RightColumn : React.FC<RightColumnProps> = ({width}) => {

    const [selectedId, setSelectedId] = useState<number>(0);

    const handleClick = (id : number) => {
        setSelectedId(id);
        const element = document.getElementById(`section-${id}`);
        if (element) {
            element.scrollIntoView({behavior : "smooth", block: "start", inline : "nearest"})
        }
    };

    return(
        <Container width={width}>
            <ListIcon>
                {icons.map((element) => (
                    <BootstrapTooltip key={element.id} title={element.title} placement={"top"}>
                    <IconContainer key={`icon-key-${element.id}`} color={selectedId === element.id ? "#FFB400" : "#F0F0F6"} onClick={() => handleClick(element.id)}>
                        {React.cloneElement(element.icon, { color : selectedId === element.id ? "#2B2B2B" : "#767676", sx : selectedId === element.id ? {color : "#2B2B2B"} : {color : "#767676"}})}
                    </IconContainer>
                        </BootstrapTooltip>
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
    position: fixed;
    top : 0;
    right : 0;
    height : 100%;
`;

const ListIcon = styled.div`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    height: 400px;
    justify-content: space-between;
    align-items: center;
`;

const IconContainer = styled.div<{color : string}>`
    width : ${convertPxtoRem(40)}rem;
    height: ${convertPxtoRem(40)}rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor: pointer;
`;
