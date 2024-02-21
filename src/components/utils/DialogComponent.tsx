import React from 'react';
import {
    createTheme,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    ThemeProvider,
    IconButton
} from '@mui/material';

import CloseIcon from "@mui/icons-material/Close";

interface DialogComponentProps {
    title : string;
    contentText : string;
    open : boolean;
    handleClose : () => void;
}

const theme = createTheme({
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)'
                }
            }
        }
    }
})

const DialogComponent : React.FC<DialogComponentProps> = ({ title = "", contentText = "", open, handleClose }) => {
  return (
      <ThemeProvider theme={theme}>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
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
        <DialogContentText>
            {contentText}
        </DialogContentText>
      </DialogContent>
    </Dialog>
          </ThemeProvider>
  );
};

export default DialogComponent;
