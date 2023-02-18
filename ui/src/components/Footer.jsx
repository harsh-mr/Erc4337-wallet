import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          px: 18,
          py: 2,
          mt: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
        style={{
          background: "linear-gradient(90deg, #EF14A9, #BE14EC)",
        }}
      >
        <Typography variant="h6" sx={{ color: "#FFF", fontSize: "1rem" }}>
          Copyright &#169; 2022
        </Typography>
        <Typography variant="h6" sx={{ color: "#FFF", fontSize: "1rem" }}>
          All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
