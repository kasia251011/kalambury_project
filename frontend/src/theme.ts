/* eslint-disable no-unused-vars */
import { createTheme } from '@mui/material';
import { CSSProperties } from 'react';

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'uppercase',
            borderRadius: '80px'
          }
        }
      ]
    }
  }
});

export default theme;
