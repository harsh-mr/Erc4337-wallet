import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { getAaParams, naiveProof, blockTimestampProof } from "../contract";
import Loading from "./components/Loading";
import { Typography } from "@mui/material";
import { generateInput } from "../util";
import { ethers } from 'ethers'

export default function Verify() {

    const [otp, setOTP] = useState("");
    const [otpDisable, setOtpDisable] = useState(true);
    const [amount, setAmount] = useState("");
    const [amountDisable, setAmountDisable] = useState(true);
    const [recepient, setRecepient] = useState("");
    const [recepientDisable, setRecepientDisable] = useState(true);

    const [confirmation, setConfirmation] = useState("");
    const [success, setSuccess] = useState(false);

    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [Verifying, setVerifying] = useState(false);
    
    let scwAddress;

    const naiveProve = async (event: any) => {
        event.preventDefault();
        setError(false);
        setSuccess(false);

        setVerifying(true);
        if (localStorage.getItem("OTPhashes")) {
            let INPUT = await generateInput(otp)
                .catch((error: any) => {
                    setErrorMsg(error.toString());
                    setError(true);
                    setVerifying(false);
                    throw error;
                });
            console.log(`INPUT:`)
            console.log(INPUT)
            let res = await getAaParams()
            const aaProvider = await res.aaProvier
            const aaSigner = await aaProvider.getSigner()
            scwAddress = await aaSigner.getAddress()
            console.log(`scw address: ${scwAddress}`)
            let tx = await naiveProof(INPUT, amount, recepient)
                .catch((error: any) => {
                    setErrorMsg(error.toString());
                    setError(true);
                    setVerifying(false);
                    throw error;
                });
            console.log(tx);
            if(tx.hash){
                setConfirmation(tx.hash)
                setSuccess(true)
                
            }
            // let txConfirmation = await tx.wait();
            // setConfirmation(txConfirmation.transactionHash);
            // setSuccess(true);
        } else {
            setErrorMsg("No OTP contract address found. Deploy first.");
            setError(true);
            setVerifying(false);
            throw error;
        }

        setVerifying(false);
        event.preventDefault();
    }

    const blockProve = async (event: any) => {
        event.preventDefault();
        setError(false);
        setSuccess(false);

        setVerifying(true);
        if (localStorage.getItem("OTPhashes")) {
            let INPUT = await generateInput(otp);
            let tx = await blockTimestampProof(INPUT)
                .catch((error: any) => {
                    setErrorMsg(error.toString());
                    setError(true);
                    setVerifying(false);
                });
            let txConfirmation = await tx.wait();
            setConfirmation(txConfirmation.transactionHash);
            setSuccess(true);
        } else {
            setErrorMsg("No OTP contract address found. Deploy first.");
            setError(true);
            setVerifying(false);
        }

        setVerifying(false);
        event.preventDefault();
    }

    const aHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value !== "") {
            setOTP(event.target.value);
            setOtpDisable(false);
        }
        else {
            setOtpDisable(true);
        }
    };

    const amountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value !== "") {
            setAmount(event.target.value);
            setAmountDisable(false);
        }
        else {
            setAmountDisable(true);
        }
    };

    const checkIsEns = async (ens: any) => {
        try {
            const provider = new ethers.providers.JsonRpcProvider(
                "https://distinguished-proportionate-lambo.ethereum-goerli.discover.quiknode.pro/19075e8d1e6aa4417cc3f7df2ad82e080ef8119f/"
            );

            const address = await provider.resolveName(ens);

            if(address) {
                if(address.length === 42) return address;
                else return "no";
            }
            return "no"
                          
        } catch (err) {
            console.log(err);
        }
    }

    const recepientHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        if(event.target.value.length === 42 && ethers.utils.isAddress(event.target.value)) {
            setRecepient(event.target.value);
            console.log("yes: ", event.target.value);
            setRecepientDisable(false);
        } else {
            // let isEns: any  = await checkIsEns(event.target.value)
            // console.log("valid ens: ", isEns);
            // setRecepient(isEns);
            setRecepient(event.target.value);
            setRecepientDisable(true);
        }
    };

    const enterHandler = async (event: any) => {
        if (event.which === "13") {
            event.preventDefault();
        }
    };


    const keyHandler = async (event: any) => {
        if (['E', '+', 'Enter'].includes(event.key)) {
            event.preventDefault();
        }
    };

    return (
        // <Box
        //     component="form"
        //     sx={{
        //         "& .MuiTextField-root": { m: 1, width: "25ch" },
        //         width: "99%", maxWidth: 600, margin: 'auto'
        //     }}
        //     noValidate
        //     autoComplete="off"
        //     textAlign="center"
        // >
        //     <TextField
        //         id="input-otp"
        //         label="otp"
        //         type="number"
        //         InputLabelProps={{
        //             shrink: true,
        //         }}
        //         variant="filled"
        //         onKeyDown={keyHandler}
        //         onChange={aHandler}
        //         onKeyPress={enterHandler}
        //     /><br />
        //     <TextField
        //         id="input-amount"
        //         label="amount"
        //         type="string"
        //         InputLabelProps={{
        //             shrink: true,
        //         }}
        //         variant="standard"
        //         onChange={amountHandler}
        //         onKeyPress={enterHandler}
        //     /><br />
        //     <TextField
        //         id="input-recepient"
        //         label="recepient"
        //         // type="string"
        //         InputLabelProps={{
        //             shrink: true,
        //         }}
        //         variant="filled"
        //         onKeyDown={keyHandler}
        //         onChange={recepientHandler}
        //         onKeyPress={enterHandler}
        //     /><br />
            
        //     <Button
        //         onClick={naiveProve}
        //         disabled={otpDisable}
        //         variant="contained">
        //         Verify and Send
        //     </Button>
            
        //     <br /><br />
        //     {Verifying ? <Loading text="Verifying proof..." /> : <div />}
        //     {error ? <Alert severity="error" sx={{ textAlign: "left" }}>{errorMsg}</Alert> : <div />}
        //     {success ? <Typography>Please check your scw for confirmation {scwAddress}</Typography> : <div />}
        //     {success ? <Typography>Tx hash: {confirmation}</Typography> : <div />}
        // </Box>

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
        <Box sx={{ my: 4 }}
            component="form"
            noValidate
            autoComplete="off"
            textAlign="center"
        >
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
            {/* <input  id="input-otp"
                 type="number"
               
                
                onKeyDown={keyHandler}
                onChange={aHandler}
                onKeyPress={enterHandler} className="custom-search-input-2" /> */}

                <TextField
                id="input-otp"
                // label="otp"
                type="number"
                // InputLabelProps={{
                //     shrink: true,
                // }}
                sx={{ input: { color: 'white' } }}
                onKeyDown={keyHandler}
                onChange={aHandler}
                onKeyPress={enterHandler}
                className="custom-search-input-2"
            />
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
              {/* <input 
              id="input-amount"
                     
              type="string"
             
              onChange={amountHandler}
              onKeyPress={enterHandler}
               className="custom-search-input-2" /> */}

              <TextField
                id="input-amount"
                // label="amount"
                type="string"
                // InputLabelProps={{
                //     shrink: true,
                // }}
                // variant="standard"
                sx={{ input: { color: 'white' } }}
                onChange={amountHandler}
                onKeyPress={enterHandler}
                className="custom-search-input-2"
            />

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
                {/* <input  
                 id="input-recepient"
                        
                         type="string"
                         
                       
                         onKeyDown={keyHandler}
                         onChange={recepientHandler}
                         onKeyPress={enterHandler}
                className="custom-search-input-2" /> */}


               <TextField
                id="input-recepient"
                // label="recepient"
                type="string"
                sx={{ input: { color: 'white' } }}
                // InputLabelProps={{
                //     shrink: true,
                // }}
                // variant="filled"
                onKeyDown={keyHandler}
                onChange={recepientHandler}
                onKeyPress={enterHandler}
                className="custom-search-input-2"
            />


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
                onClick={naiveProve}
                disabled={otpDisable}
              >
                Verify and Send
              </Button>
            </Box>
          </Box>
        </Box>


        {Verifying ? <Loading text="Verifying proof..." /> : <div />}
        {error ? <Alert severity="error" sx={{ textAlign: "left" }}>{errorMsg}</Alert> : <div />}

        
        <Box>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              color: "#FFF",
              textAlign: "center",
            }}
          >
    {success ? <Typography>Please check your scw for confirmation {scwAddress}</Typography> : <div />}

          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              color: "#FFF",
              textAlign: "center",
              py: 1,
            }}
          >
           {success ? <Typography>TXN hash</Typography> : <div />}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              color: "#FFF",
              textAlign: "center",
            }}
          >
           {success ? <Typography>{confirmation}</Typography> : <div />}

          </Typography>
        </Box>
      </Box>
    </Box>
    );
}