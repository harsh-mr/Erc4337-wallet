import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom";
import App from "./App";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

const appAddress = "f162a4f56924d1c356c05266b09ddb76500d6da9";

const provider = new AuthProvider(`${appAddress}`); // may need to update with the app address

render(
  <ProvideAuth provider={provider}>
    <App />
  </ProvideAuth>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
