import React from 'react';
import LinearProgress, { LinearProgressProps } from "@mui/material/LinearProgress";
import styled from "styled-components";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../styles/index.css'

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
export interface LevelFieldProps {
    value : number;
    title : string;
}

const LevelField : React.FC<LevelFieldProps>= ({value, title}) => {
    return(
        <Container>
            <TextField>{title}</TextField>
            <LinearProgressWithLabel className={"custom-progress-bar"} value={value} style={{backgroundColor : "transparent", border : "1px solid #FFB400"}} />
        </Container>
    )
}

export default LevelField;

const Container = styled.div`

`;

const TextField = styled.span`
    color : #767676;
    font-size: 15px;
`;