import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Category } from '../../../feature/services/types/Category';
import DeleteCategory from './Actions/DeleteCategory';
import EditCategory from './Actions/EditCategory';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryItem = (category: Category) => {
  const navigate = useNavigate();
  const { id } = useParams<string>();

  const selectCategory = () => {
    navigate(`${category._id}`);
  };

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <>
          <EditCategory {...category} />
          <DeleteCategory {...category} />
        </>
      }>
      <ListItemButton onClick={selectCategory} selected={id == category._id}>
        <ListItemText primary={category.name} />
      </ListItemButton>
    </ListItem>
  );
};

export default CategoryItem;
