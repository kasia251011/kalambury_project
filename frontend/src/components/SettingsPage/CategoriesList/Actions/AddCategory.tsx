import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material';
import { useState } from 'react';
import { useAddCategoryMutation } from '../../../../feature/services/api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Category } from '../../../../feature/services/types/Category';

const AddCategory = () => {
  const [addCategory] = useAddCategoryMutation();
  const { register, handleSubmit } = useForm<Category>();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave: SubmitHandler<Category> = (category: Category) => {
    setOpen(false);
    addCategory(category);
  };

  return (
    <>
      <Button size="small" variant="outlined" onClick={handleOpen}>
        Add Category
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(handleSave)}>
          <DialogTitle>Enter a new category name!</DialogTitle>
          <DialogContent>
            <TextField
              {...register('name')}
              autoFocus
              margin="dense"
              label="Category Name"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default AddCategory;
