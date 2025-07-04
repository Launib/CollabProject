import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const Modal = ({
  open,
  onClose,
  title,
  content,
  actionButtonText,
  actionButtonOnClick,
  cancelButtonText,
  disabled,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {content}
      </DialogContent>
      <DialogActions>
        <hr></hr>
        <Button
          onClick={actionButtonOnClick}
          color="secondary"
          disabled={disabled}
        >
          {actionButtonText}
        </Button>

        <Button onClick={onClose} color="white" backgroundColor="error">
          {cancelButtonText ? cancelButtonText : "Cancel"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default Modal;
