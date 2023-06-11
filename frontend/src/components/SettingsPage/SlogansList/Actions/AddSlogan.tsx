import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Slogan } from '../../../../feature/services/types/Slogan';
import AddIcon from '@mui/icons-material/Add';
import { useAddSloganMutation } from '../../../../feature/services/sloganApi';
import { useParams } from 'react-router-dom';

const AddSlogan = () => {
  const [addSlogan] = useAddSloganMutation();
  const { register, handleSubmit } = useForm<Slogan>();
  const [open, setOpen] = useState(false);
  const { id } = useParams<string>();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave: SubmitHandler<Slogan> = (slogan: Slogan) => {
    setOpen(false);
    slogan.categoryId = id ?? '';
    addSlogan(slogan);
  };

  return (
    <>
      <Button size="small" variant="outlined" startIcon={<AddIcon />} onClick={handleOpen}>
        Add Slogan
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(handleSave)}>
          <DialogTitle>Enter a new slogan name!</DialogTitle>
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

export default AddSlogan;
