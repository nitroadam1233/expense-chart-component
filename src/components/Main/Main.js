import React from 'react';
import { Box } from '@mui/material';
import SpendingHeader from './content/SpendingHeader';


const Main = () => {
  return (
    <Box
      sx={{
        width: 500,
        height: 300,
        backgroundColor: "hsl(33, 100%, 98%)",
        borderRadius: 5
      }}
    >
      <SpendingHeader />
    </Box>
  )
}

export default Main