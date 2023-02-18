import './index.css';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import App from './App';

const appAddress = "f162a4f56924d1c356c05266b09ddb76500d6da9"
const provider = new AuthProvider(`${appAddress}`) // required
render(
  <ProvideAuth provider={provider}>
    <App />,
  </ProvideAuth>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
