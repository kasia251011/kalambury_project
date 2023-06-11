import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import { useState } from 'react';
import { useAddSloganMutation, useGetCategoriesQuery } from '../../../feature/services/api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Slogan } from '../../../feature/services/types/Slogan';

const AddSlogan = () => {
  const [addSlogan] = useAddSloganMutation();
  const { register, handleSubmit } = useForm<Slogan>();
  const { data: categories } = useGetCategoriesQuery();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave: SubmitHandler<Slogan> = (slogan: Slogan) => {
    setOpen(false);
    addSlogan(slogan);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Add Slogan
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(handleSave)}>
          <DialogTitle>Add slogan</DialogTitle>
          <DialogContent>
            {!categories || categories?.length == 0 ? (
              <DialogContentText>There is no category! First add one!</DialogContentText>
            ) : (
              <>
                <DialogContentText>Add new slogan to category!</DialogContentText>
                <Box className="cell">
                  <InputLabel className="label">Procedure</InputLabel>
                  <Select
                    size="small"
                    {...register('categoryId')}
                    defaultValue={categories?.[0]._id}>
                    {categories?.map((category) => (
                      <MenuItem key={category.name} value={category._id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                <TextField
                  {...register('name')}
                  autoFocus
                  margin="dense"
                  label="Category Name"
                  fullWidth
                  variant="outlined"
                />
              </>
            )}
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

export default AddSlogan;
