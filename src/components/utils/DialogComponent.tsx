import React from 'react';
import {
    createTheme,
    Dialog,
    DialogTitle,
    DialogContent,
    ThemeProvider,
    IconButton, Breakpoint
} from '@mui/material';

import CloseIcon from "@mui/icons-material/Close";

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
