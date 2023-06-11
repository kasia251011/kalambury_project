import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Outlet, useNavigate } from 'react-router-dom';
import CategoriesList from './CategoriesList';

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <Box className="settings-page">
      <Box className="header">
        <IconButton color="primary" onClick={() => navigate('/')}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box padding="25px">
        <Typography variant="h4">Settings</Typography>
        <Typography marginBottom="25px" variant="subtitle2">
          Manage Categories And Slogans
        </Typography>
        <Box display="flex" gap="25px">
          <CategoriesList />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsPage;
