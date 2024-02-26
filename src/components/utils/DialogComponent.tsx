import React from 'react';
import {
    createTheme,
    Dialog,
    DialogTitle,
    DialogContent,
    ThemeProvider,
    IconButton, Breakpoint, ListItem, ListItemText
} from '@mui/material';

import CloseIcon from "@mui/icons-material/Close";
import ListItemIcon from "@mui/material/ListItemIcon";
import PlayArrowTwoToneIcon from "@mui/icons-material/PlayArrowTwoTone";
import {ImageContainer} from "../columns/MiddleColumn";
import {listItemStyle} from "./data";

interface DialogComponentProps {
    title : string;
    contentText : string | React.ReactNode;
    open : boolean;
    maxWidth? : false | Breakpoint;
    handleClose : () => void;
}

const theme = createTheme({
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(0, 0, 0, 0.05)'
                }
            }
        }
    }
})

const textStyle = {
    fontFamily : "'Inter', sans-serif"
}

export const ListItemDialog: React.FC<{ description: string, img? : string }> = ({ description, img }) => (
    <ListItem>
        <ListItemIcon>
            <PlayArrowTwoToneIcon sx={{ color: "#FFB400" }} />
        </ListItemIcon>
        <ListItemText sx={listItemStyle}>
            {description}
        </ListItemText>
        <ImageContainer>
            {img && <img src={img} alt={img}/>}
        </ImageContainer>
    </ListItem>
);

const DialogComponent : React.FC<DialogComponentProps> = ({ title = "", contentText = "", open, handleClose, maxWidth="md" }) => {
  return (
      <ThemeProvider theme={theme}>
    <Dialog open={open} onClose={handleClose} scroll={"paper"} maxWidth={maxWidth} aria-labelledby="responsive-dialog-title">
      <DialogTitle sx={textStyle}>{title}</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      <DialogContent>
            {contentText}
      </DialogContent>
    </Dialog>
          </ThemeProvider>
  );
};

export default DialogComponent;
