import { Box, Typography, Button } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Box sx={{ px: 12, py: 9 }}>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "PatsySans",
          color: "#FFF",
          fontSize: "4rem",
          textAlign: "center",
        }}
      >
        Rescue Your <span style={{ color: "#EF14A9" }}>Ethereum Tokens</span> &{" "}
        <span style={{ color: "#EF14A9" }}>Nfts</span>
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "PatsySans",
          color: "#FFF",
          fontSize: "4rem",
          textAlign: "center",
        }}
      >
        From <span style={{ color: "#EF14A9" }}>Compromised</span> Accounts
      </Typography>
      <Typography
        variant="p1"
        sx={{
          textAlign: "center",
          display: "block",
          fontSize: "1.1rem",
          fontFamily: "Montserrat",
          color: "#FFF",
          my: 4,
        }}
      >
        Beat the sweeper bot on your account and rescue assets Instantly
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <Button
          className="gradient-border"
          sx={{
            my: 2,
            color: "white",
            textTransform: "none",
            fontFamily: "Montserrat",
            fontSize: "1.1rem",
            py: 2,
            px: 8,
            borderRadius: "40px",
          }}
        >
          Get Started
        </Button>
      </Box>
      <Typography
        variant="p1"
        sx={{
          textAlign: "center",
          display: "block",
          fontSize: "0.8rem",
          fontFamily: "Montserrat",
          color: "#817499",
          mt: 4,
          mb: 1,
        }}
      >
        How We Do It
      </Typography>
      <i
        class="fa-solid fa-chevron-down"
        style={{
          display: "block",
          textAlign: "center",
          color: "#817499",
          fontSize: "0.8rem",
        }}
      ></i>
    </Box>
  );
};

export default Hero;
