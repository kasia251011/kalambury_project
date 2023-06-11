import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { Slogan } from '../../../../feature/services/types/Slogan';
import { useDeleteSloganMutation } from '../../../../feature/services/sloganApi';

const DeleteSlogan = (slogan: Slogan) => {
  const [open, setOpen] = useState(false);
  const [deleteSlogan] = useDeleteSloganMutation();

  const handleDelete = () => {
    deleteSlogan(slogan._id ?? '');
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton edge="end" color="error" onClick={handleOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete slogan: {slogan.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure, you want to delete this slogan? All slogans related to it will be also
            deleted
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleDelete} autoFocus color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteSlogan;
