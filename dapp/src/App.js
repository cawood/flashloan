import React from 'react';
import Web3 from 'web3';
import testContract from "./abi/testContract";
import arbitrageur from "./abi/arbitrageur";
import { Box, Button, Avatar , Field,  Input , Heading, Text } from "rimble-ui";

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
           From:
         </div>
         <div className="col-sm">
          <Avatar size="70px" src="https://airswap-token-images.s3.amazonaws.com/ETH.png" />
         </div>
         <div className="col-sm">
          <Field label="Amount">
            <Input type="number" required={true} placeholder="e.g. 10000000000000" />
          </Field>
         </div>
       </div>
       <div className="row">
          <div className="col-sm">
             To:
          </div>
          <div className="col-sm">
            <Avatar size="70px" src="https://airswap-token-images.s3.amazonaws.com/DAI.png" />
          </div>
          <div className="col-sm">
            <Field label="Amount">
              <Input type="number" required={true} placeholder="e.g. 10000000000000" />
            </Field>
           </div>
        </div>
        <div className="row">
        <div className="col-sm">

        </div>
           <div className="col-sm">
             <Button size="medium" mr={3} onClick={onClick}>
                Go
             </Button>
           </div>
           <div className="col-sm">
            
           </div>

         </div>
    </div>
  );
}

export default App;
