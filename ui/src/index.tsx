import './index.css';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { AuthProvider, CHAIN } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import App from './App';

const appAddress = "f162a4f56924d1c356c05266b09ddb76500d6da9"
const auth = new AuthProvider(`${appAddress}`, { //required
  network: 'testnet', //defaults to 'testnet'
  // position: 'right', //defaults to right
  theme: 'dark', //defaults to dark
  alwaysVisible: true, //defaults to true which is Full UI mode
  chainConfig: {
    chainId: CHAIN.ETHEREUM_GOERLI, //defaults to CHAIN.ETHEREUM_MAINNET
    rpcUrl: 'https://side-divine-patina.ethereum-goerli.discover.quiknode.pro/da5d7e1f010d66a6c052c2aac2bb66b14516754d/', //defaults to 'https://rpc.ankr.com/eth'
  },
}) // required
const initAuth = async () => {
  await auth.init()
  await auth.connect();
}
try {
  initAuth();
} catch (e) {
  // Handle exception case
  console.error(e)
  alert("An error occurred")
}

render(
  <ProvideAuth provider={auth}>
    <App />,
  </ProvideAuth>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
