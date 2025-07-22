import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Divider,
} from "@mui/material";

const Modal = ({
  open,
  onClose,
  title,
  actionButtonText,
  actionButtonOnClick,
  cancelButtonText,
  disabled,
  children,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          p: 2,
          borderRadius: 3,
          background: "radial-gradient(at right, #fff7ad, #ffa9f9)",
        },
      }}
    >
      <DialogTitle sx={{ textAlign: "center" }}>{title}</DialogTitle>
      <DialogContent>
        <Box>{children}</Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Divider />
        <Button
          onClick={actionButtonOnClick}
          color="secondary"
          disabled={disabled}
          sx={{ border: "1px solid black" }}
        >
          {actionButtonText}
        </Button>
        <Button
          onClick={onClose}
          color="white"
          sx={{ border: "1px solid black", backgroundColor: "#cc0000" }}
        >
          {cancelButtonText ? cancelButtonText : "Cancel"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default Modal;
