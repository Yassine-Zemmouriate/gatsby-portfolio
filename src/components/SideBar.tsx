import * as React from 'react';
import {Avatar, Stack} from "@mui/material";
import { deepOrange, deepPurple } from '@mui/material/colors';
import styled from "styled-components";

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export interface SideBarProps {

}

const SideBar : React.FC<SideBarProps> = () => {
    return (
        <Container>
            <AvatarField>
                <Avatar sx={{ bgcolor: "#FFB400", width: "150px", height: "150px", marginTop: "50px", marginBottom: "31px" }}>YZ</Avatar>
                <NameField>yassine zemmouriate</NameField>
                <JobField>Data Scientist & Développeur Full-Stack </JobField>
                <Stack direction={"row"} spacing={2}>
                    <Avatar sx={{ bgcolor : "#FFB400", width: "24px", height: "24px"}}>
                        <FacebookRoundedIcon sx={{width: "14px", height: "14px"}} />
                    </Avatar>
                    <Avatar sx={{ bgcolor : "#FFB400", width: "24px", height: "24px"}}>
                        <XIcon sx={{width: "14px", height: "14px"}} />
                    </Avatar>
                    <Avatar sx={{ bgcolor : "#FFB400", width: "24px", height: "24px"}}>
                        <LinkedInIcon sx={{width: "14px", height: "14px"}} />
                    </Avatar>
                    <Avatar sx={{ bgcolor : "#FFB400", width: "24px", height: "24px"}}>
                        <YouTubeIcon sx={{width: "14px", height: "14px"}} />
                    </Avatar>

                </Stack>
            </AvatarField>
        </Container>
    )
}

export default SideBar;

const Container = styled.div`
    height : 100%;
    width : 305px;
    background-color: #FFF;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    display: flex;
    margin-bottom: 15px;
`;

const NameField = styled.div`
    font-family: Inter,sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 123.6%; /* 22.248px */
    text-transform: capitalize;
    width: 100%;
    text-align: center;
`;

const JobField = styled(NameField)`
    color: #767676;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px; /* 160% */
    text-transform: capitalize;
`;
const AvatarField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
