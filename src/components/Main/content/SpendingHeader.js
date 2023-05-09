import React from 'react';
import { Box, Typography } from '@mui/material';

const SpendingHeader = () => {
  return (
    <Box>
        <Typography 
            sx={{
                color: "hsl(25, 47%, 15%)",
                fontWeight: 700,
                fontSize: 28,
                ml: 4,
                mt: 3
            }}
        >
            Spending - Last 7 Days
        </Typography>
    </Box>
  )
}

export default SpendingHeader