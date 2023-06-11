import { Box, Card, CardContent, List, Typography } from '@mui/material';
import './style.scss';
import CategoryItem from './CategoryItem';
import AddCategory from './Actions/AddCategory';
import { useGetCategoriesQuery } from '../../../feature/services/categoryApi';

const CategoriesList = () => {
  const { data: categories } = useGetCategoriesQuery();

  return (
    <Card sx={{ width: '400px' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Categories</Typography>
          <AddCategory />
        </Box>
        <List>
          {categories?.map((category) => (
            <CategoryItem key={category._id} {...category} />
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CategoriesList;
