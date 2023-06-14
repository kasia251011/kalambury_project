import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { useAddCategoryMutation } from '../../../../feature/services/categoryApi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Category } from '../../../../feature/services/types/Category';
import AddIcon from '@mui/icons-material/Add';
import { ErrorMessage } from '@hookform/error-message';

const AddCategory = () => {
  const [addCategory] = useAddCategoryMutation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<Category>();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave: SubmitHandler<Category> = (category: Category) => {
    addCategory(category)
      .unwrap()
      .then(() => setOpen(false))
      .catch((error) => {
        console.log(error.data.error);
        setError('name', { type: 'custom', message: error.data.error });
      });
  };

  return (
    <>
      <Button size="small" variant="outlined" startIcon={<AddIcon />} onClick={handleOpen}>
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
              error={errors.name ? true : false}
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => <Typography color="error">{message}</Typography>}
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
