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
import { Category } from '../../../../feature/services/types/Category';

const DeleteCategory = (category: Category) => {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    //TODO: delete
    console.log('Deleting ' + category._id);

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
        <DialogTitle>Delete category: {category.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure, you want to delete this category? All slogans related to it will be also
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

export default DeleteCategory;
