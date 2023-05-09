import { Box, Typography } from '@mui/material'
import React from 'react'


const Balance = () => {
  return (
    <Box
        sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            ml: 4
        }}
    >
        <Typography
            sx={{
                color: "white",
                fontSize: 15
            }}
        >
            My balance
        </Typography>
        <Typography
            sx={{
                color: "white",
                fontWeight: 700,
                fontSize: 28
            }}
        >
            $921.48
        </Typography>
    </Box>
  )
}

export default Balance