import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Slogan } from '../../../feature/services/types/Slogan';
import DeleteSlogan from './Actions/DeleteSlogan';
import EditSlogan from './Actions/EditSlogan';

const SloganItem = (slogan: Slogan) => {
  return (
    <ListItem
      disablePadding
      secondaryAction={
        <>
          <EditSlogan {...slogan} />
          <DeleteSlogan {...slogan} />
        </>
      }>
      <ListItemButton>
        <ListItemText primary={slogan.name} />
      </ListItemButton>
    </ListItem>
  );
};

export default SloganItem;
