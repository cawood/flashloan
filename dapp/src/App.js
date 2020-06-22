import React from 'react';
import Web3 from 'web3';
import testContract from "./abi/testContract";
import arbitrageur from "./abi/arbitrageur";
import { Box, Button, Avatar , Heading, Text } from "rimble-ui";

const onClick = async () => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545" );
  const accounts = await web3.eth.getAccounts();

  console.log("accounts: ", accounts);

  arbitrageur.methods.makeArbitrage("1000000000000000000").send({
    from: accounts[0]
     }).then((r)=>{
    console.log("r2: ", r);
  })
};

function App() {

  return (
    <div className="container">
      <div className="row">
         <div className="col-sm">
           One of three columns
         </div>
         <div className="col-sm">
         <Avatar src="https://airswap-token-images.s3.amazonaws.com/ETH.png" />
         </div>
         <div className="col-sm">

         </div>
       </div>
       <div className="row">
          <div className="col-sm">
             One of three columns
          </div>
          <div className="col-sm">
            <Avatar src="https://airswap-token-images.s3.amazonaws.com/DAI.png" />
          </div>
          <div className="col-sm">
          
           </div>
        </div>
        <div className="row">
           <div className="col-sm">
              One of three columns
           </div>
           <div className="col-sm">
            <button onClick={onClick}> Test Arb</button>
           </div>
           <div className="col-sm">

            </div>
         </div>
    </div>
  );
}

export default App;
