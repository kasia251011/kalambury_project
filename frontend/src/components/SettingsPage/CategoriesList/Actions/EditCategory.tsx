import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField
} from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Category } from '../../../../feature/services/types/Category';
import EditIcon from '@mui/icons-material/Edit';
import { useUpdateCategoryMutation } from '../../../../feature/services/categoryApi';

const EditCategory = (category: Category) => {
  const [updateCategory] = useUpdateCategoryMutation();
  const { register, handleSubmit } = useForm<Category>({
    defaultValues: {
      name: category.name
    }
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave: SubmitHandler<Category> = (newCategory: Category) => {
    newCategory._id = category._id;
    updateCategory(newCategory);
    setOpen(false);
  };

  return (
    <>
      <IconButton edge="end" sx={{ marginRight: '10px' }} onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(handleSave)}>
          <DialogTitle>Edit Category</DialogTitle>
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

export default EditCategory;
