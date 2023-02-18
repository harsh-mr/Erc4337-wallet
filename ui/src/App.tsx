import BasicTabs from "./TabPanel";
import WalletConnector from "./WalletConnector";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Auth, useAuth } from "@arcana/auth-react";

const onLogin = () => {
  // Route to authenticated page
  alert("Logged In");
};

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function App() {
  const auth = useAuth();
  return (
    <ThemeProvider theme={darkTheme}>
      {auth.loading ? (
        "Loading"
      ) : auth.isLoggedIn ? (
        <p>Logged In</p>
      ) : (
        <div>
          <Auth externalWallet={true} theme={"light"} onLogin={onLogin} />
        </div>
      )}
      <CssBaseline />
      <BasicTabs />
      <WalletConnector />
    </ThemeProvider>
  );
}
