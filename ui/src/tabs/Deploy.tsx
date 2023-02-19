import { useState } from "react";
import Alert from "@mui/material/Alert";
import { deployOTP } from "../contract";
import Loading from "./components/Loading";
import { generateMerkleTree } from "../util";
import { getAaParams, setRootAndVerifier } from "../contract";
import { Box, Typography, Button } from "@mui/material";



export default function Deploy() {

    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [Deploying, setDeploying] = useState(false);

    const [address, setAddress] = useState("");
    const [secret, setSecret] = useState("");
    const [uri, setURI] = useState("");

    const [deployed, setDeployed] = useState(false);
    const [scwAddress, setScwAddress] = useState("");

    const deploy = async (event: any) => {
        event.preventDefault();
        setError(false);
        setDeployed(false);

        setDeploying(true);

        let [_uri, _secret, root] = await generateMerkleTree();
        console.log(`root: ${root}`)
        setSecret(_secret);
        setURI(_uri);
        
        setAddress(await deployOTP(root)
            .catch((error: any) => {
                setErrorMsg(error.toString());
                setError(true);
                setDeploying(false);
                throw error;
            }));
        let {smartWalletAPI, httpRpcClient, aaProvier} = await getAaParams();
        // await setRootAndVerifier(smartWalletAPI, aaProvier)
        setScwAddress(await aaProvier.getSigner().getAddress())
        setDeploying(false);
        setDeployed(true);
        event.preventDefault();
    }

    return (
        
           
        
      
      <Box sx={{ px: 12, py: 9 }}>
      {!deployed &&  
      <div>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "PatsySans",
          color: "#FFF",
          fontSize: "4rem",
          textAlign: "center",
        }}
      >
       Transfer Your <span style={{ color: "#EF14A9" }}>Ethereum Tokens</span> &{" "}
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
        Safely <span style={{ color: "#EF14A9" }}>With 2FA Verification</span> via your SCW
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          display: "block",
          fontSize: "1.1rem",
          fontFamily: "Montserrat",
          color: "#FFF",
          my: 4,
        }}
      >
        The perfect WEB 3.0 wallet for your ETH, ERC20, ERC721 and ERC1155
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
          onClick={deploy}
        >
          Get Started
        </Button>
      </Box>
      <Typography
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
        className="fa-solid fa-chevron-down"
        style={{
          display: "block",
          textAlign: "center",
          color: "#817499",
          fontSize: "0.8rem",
        }}
      ></i>
      </div>

      }

{deployed ? <figure><img style={{marginLeft:"75px"}} src={uri} width="80%" alt="" /><figcaption>QR code</figcaption></figure> : <div />}

    {Deploying ? <Loading text="Deploying OTP contract..." /> : <div />}
            {error ? <Alert severity="error" sx={{ textAlign: "left" }}>{errorMsg}</Alert> : <div />}
            {deployed ? <Typography  style={{
          display: "block",
          textAlign: "center",
          color: "#817499",
          fontSize: "2rem",
          fontWeight: "bold",
          fontFamily: "Montserrat",
        
        }}>Scan the Qr code with your Google authenticator app</Typography> : <div />}
            {deployed ? <Typography style={{
          display: "block",
          textAlign: "center",
          color: "#817499",
          fontSize: "2rem",
          fontWeight: "bold",
          fontFamily: "Montserrat",
        }}>Your wallet address: {scwAddress}</Typography> : <div />}
            {/* {deployed ? <Typography style={{
          display: "block",
          textAlign: "center",
          color: "#817499",
          fontSize: "1rem",
        }}>Please send atleast 0.1 ETH to your SCW</Typography> : <div />} */}
        
        
        
        
        </Box>






    );
}