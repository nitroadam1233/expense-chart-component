import { Box } from '@mui/material';
import { ReactComponent as CircleIcon } from "../../../images/logo.svg";
import React from 'react'

const Logo = () => {
  return (
    <Box
        sx={{
            mr: 4
        }}
    >
        <CircleIcon />
    </Box>
  )
}

export default Logo