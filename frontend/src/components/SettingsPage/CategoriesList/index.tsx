import { Box, List, Typography } from '@mui/material';
import './style.scss';
// import { useGetCategoriesQuery } from '../../../feature/services/api';
import CategoryItem from './CategoryItem';
import { Category } from '../../../feature/services/types/Category';
import AddCategory from './Actions/AddCategory';

const categories: Category[] = [
  {
    _id: '1',
    name: 'Zwierzęta'
  },
  {
    _id: '1',
    name: 'Filmy'
  },
  {
    _id: '1',
    name: 'Bajki'
  }
];

const CategoriesList = () => {
  // const { data: categories } = useGetCategoriesQuery();

  return (
    <Box className="categories-list">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">Categories</Typography>
        <AddCategory />
      </Box>
      <List>
        {categories?.map((category) => (
          <CategoryItem key={category._id} {...category} />
        ))}
      </List>
    </Box>
  );
};

export default CategoriesList;
