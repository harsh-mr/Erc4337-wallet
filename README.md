# Zupp Wallet

""Securely Access Your Assets with Unmatched Privacy: Experience Next-Level Protection with our ZKP Based 2FA Account Abstraction Wallet""

problem it solves : Currently, the main obstacle to bringing more people on board with Web3 is the uncertainty
and fear of losing all assets due to the ease with which transfers can be made just by having
knowledge of the private key. In the past, even highly skilled developers have made
mistakes and accidentally exposed their private keys to the public, which has resulted in
unfortunate consequences. 

If there was a confirmation feature similar to 2FA in Web2 that allowed for added security without compromising anonymity,
it would be highly beneficial. Getting inspired from the eth-infinitism account abstraction implementation and 
ZKotp we  have tried to implement the same thing by confirming the initiation of a transaction only when a 
2nd factor pin is entered which is generated by the google authenticator. 

In the future, if someone's account is hacked by accident, they can be assured that our
wallet will provide an added layer of security by requiring an OTP. If the OTP is not provided,
the user will be notified of any suspicious transaction activity, allowing them to take
appropriate action.

# QuickNode
we used quicknode rpc to connect bundler with goerli chain.
The bundler packages a set of these useroperations objects into a single bundle transaction that gets included in the Ethereum chain.
These bundle transactions are handled by an “Entry point” contract that handles the deployment of the user’s wallets and takes care of User Operation objects verification by querying the deployed wallet.

# Arcana Wallet
"Our application has integrated Arcana wallet for seamless onboarding of users via social login. Additionally, by leveraging Arcana wallet, we have removed the need for external wallets and can now utilize it directly within our web application."

# Push protocol
In essence, if an incorrect OTP is entered, which could suggest potential suspicious activity, we can notify the user through a push protocol so they can take appropriate action.



<img width="1440" alt="Screenshot 2023-02-19 at 10 36 51 PM" src="https://user-images.githubusercontent.com/85721026/219967833-d3f30469-3b15-43c1-bcb3-f58c28ea3b8b.png">
<img width="1440" alt="Screenshot 2023-02-19 at 10 37 01 PM" src="https://user-images.githubusercontent.com/85721026/219967838-8e9c4a5e-a04c-4c96-924f-d8710086aded.png">
<img width="1440" alt="Screenshot 2023-02-19 at 10 37 17 PM" src="https://user-images.githubusercontent.com/85721026/219967846-8e2c4af5-6f9a-4947-8d4f-f5125a52e824.png">
