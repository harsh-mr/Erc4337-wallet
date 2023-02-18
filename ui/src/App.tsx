
import BasicTabs from "./TabPanel";
import WalletConnector from "./WalletConnector";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "./App.css";
import { Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Transfer from "./pages/Transfer";
import Navbar from "./components/Navbar";


const darkTheme = createTheme({
    palette: {
        mode: 'light',
    },
});
const theme = createTheme({
    palette: {
      primary: {
        main: "#150633",
      },
    },
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  });

export default function App() {
    return (
        <>
          
            {/* <CssBaseline /> */}
            {/* <Navbar/> */}
            <BasicTabs />
            <WalletConnector />
        </>
      
    )
}