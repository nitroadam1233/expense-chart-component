import React from 'react';
import { Box } from '@mui/material';
import Balance from './content/Balance';
import Logo from "./content/Logo";

const Header = () => {
  return (
   <Box
        sx={{
            width: 500,
            height: 125,
            backgroundColor: "hsl(10, 79%, 65%)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 5,
            mb: 4
        }}
    >
        <Balance />
        <Logo />
   </Box>
  )
}

export default Header