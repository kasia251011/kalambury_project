import { Box, Card, CardContent, List, Typography } from '@mui/material';
import SloganItem from './SloganItem';
import AddSlogan from './Actions/AddSlogan';
import { useGetSlogansByCategoryQuery } from '../../../feature/services/sloganApi';
import { useParams } from 'react-router-dom';

const SlogansList = () => {
  const { id } = useParams<string>();
  const { data: slogans } = useGetSlogansByCategoryQuery(id ?? '');

  return (
    <Card sx={{ width: '500px' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">Slogans</Typography>
          <AddSlogan />
        </Box>
        <List>
          {slogans?.map((slogan) => (
            <SloganItem key={slogan._id} {...slogan} />
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default SlogansList;
