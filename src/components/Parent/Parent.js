import { Box } from "@mui/material";
import React from 'react';
import Header from "../Header/Header";
import Main from "../Main/Main";

const ParentContainer = () => {
  return (
    <Box 
        sx={{
            width: "100%",
            height: 800,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"   
        }}
    >
        <Header />
        <Main />
    </Box>
  )
}

export default ParentContainer