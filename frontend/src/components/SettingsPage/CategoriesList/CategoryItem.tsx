import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Category } from '../../../feature/services/types/Category';
import DeleteCategory from './Actions/DeleteCategory';
import EditCategory from './Actions/EditCategory';

const CategoryItem = (category: Category) => {
  return (
    <ListItem
      disablePadding
      secondaryAction={
        <>
          <EditCategory {...category} />
          <DeleteCategory {...category} />
        </>
      }>
      <ListItemButton>
        <ListItemText primary={category.name} />
      </ListItemButton>
    </ListItem>
  );
};

export default CategoryItem;
