import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Transaction = () => {
  return (
    <Box sx={{ px: 12, py: 3, mb: 8 }}>
      <Box
        className="gradient-border2"
        sx={{
          px: 4,
          py: 4,
          borderRadius: "20px",
          mx: 6,
          background: "rgba(29,8,71,0.5)",
        }}
      >
        <Box sx={{ my: 4 }}>
          <Typography
            
            sx={{ color: "#FFF", my: 5, fontFamily: "PatsySans" }}
          >
            Enter your OTP
          </Typography>
          <Box
            className="custom-search-2"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              my: 3,
            }}
          >
            <input type="text" className="custom-search-input-2" />
          </Box>


          <Box sx={{ my: 4 }}>
            <Typography
              
              sx={{ color: "#FFF", my: 5, fontFamily: "PatsySans" }}
            >
              Enter Amount
            </Typography>
            <Box
              className="custom-search-2"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 3,
              }}
            >
              <input type="text" className="custom-search-input-2" />
            </Box>
            <Box sx={{ my: 4 }}>
              <Typography
                
                sx={{ color: "#FFF", my: 5, fontFamily: "PatsySans" }}
              >
                Enter Recepient Address
              </Typography>
              <Box
                className="custom-search-2"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  my: 3,
                }}
              >
                <input type="text" className="custom-search-input-2" />
              </Box>
              <Button
                sx={{
                  borderRadius: "40px",
                  width: "100%",
                  textTransform: "none",
                  fontFamily: "Montserrat",
                  color: "#FFF",
                  backgroundImage: "linear-gradient(90deg, #E814B2, #E814B2)",
                  py: 2,
                }}
              >
                Verify and Send
              </Button>
            </Box>
          </Box>
        </Box>



        
        <Box>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              color: "#FFF",
              textAlign: "center",
            }}
          >
            Please Check your SCW for confirmation
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              color: "#FFF",
              textAlign: "center",
              py: 1,
            }}
          >
            Tx Hash :
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              color: "#FFF",
              textAlign: "center",
            }}
          >
            0x654sg65d4sg1gds51g51g5ds1g651sg65g4gerg48erg16584484984
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Transaction;
