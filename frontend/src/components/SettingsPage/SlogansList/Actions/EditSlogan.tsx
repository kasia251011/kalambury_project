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
// import { useAddSloganMutation, useGetSloganByIdQuery } from '../../../../feature/services/api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Slogan } from '../../../../feature/services/types/Slogan';
import EditIcon from '@mui/icons-material/Edit';
import { useUpdateSloganMutation } from '../../../../feature/services/sloganApi';

const EditSlogan = (slogan: Slogan) => {
  const [updateSlogan] = useUpdateSloganMutation();
  const { register, handleSubmit } = useForm<Slogan>({
    defaultValues: {
      name: slogan.name
    }
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave: SubmitHandler<Slogan> = (newSlogan: Slogan) => {
    newSlogan._id = slogan._id;
    newSlogan.categoryId = slogan.categoryId;
    updateSlogan(newSlogan);
    setOpen(false);
  };

  return (
    <>
      <IconButton edge="end" sx={{ marginRight: '10px' }} onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(handleSave)}>
          <DialogTitle>Edit Slogan</DialogTitle>
          <DialogContent>
            <TextField
              {...register('name')}
              autoFocus
              margin="dense"
              label="Slogan Name"
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

export default EditSlogan;
