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
import { SubmitHandler, useForm } from 'react-hook-form';
import { Slogan } from '../../../../feature/services/types/Slogan';
import AddIcon from '@mui/icons-material/Add';
import { useAddSloganMutation } from '../../../../feature/services/sloganApi';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';

const AddSlogan = () => {
  const [addSlogan] = useAddSloganMutation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<Slogan>();
  const [open, setOpen] = useState(false);
  const { id } = useParams<string>();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave: SubmitHandler<Slogan> = (slogan: Slogan) => {
    slogan.categoryId = id ?? '';
    addSlogan(slogan)
      .unwrap()
      .then((res) => {
        console.log(res);
        setOpen(false);
      })
      .catch((error) => {
        console.log(error.data.error);
        setError('name', { type: 'custom', message: error.data.error });
      });
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

export default AddSlogan;
