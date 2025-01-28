import React from 'react';
import {
    createTheme,
    Dialog,
    DialogTitle,
    DialogContent,
    ThemeProvider,
    IconButton, Breakpoint, ListItem, ListItemText
} from '@mui/material';

interface SkillProps {
    skill: string;
}

export const Skill: React.FC<SkillProps> = ({skill}) => (
    <div style={{
        color: "grey", 
        backgroundColor: 'transparent', 
        border: "1px solid black", 
        borderRadius: "10px", 
        width: "5rem", 
        height: "1rem",
        textAlign: "center",
        alignItems: "center",
        fontSize: 12
        }}>
        {skill}
    </div>
)