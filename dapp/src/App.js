import React from 'react';
import Web3 from 'web3';
import testContract from "./abi/testContract";
import arbitrageur from "./abi/arbitrageur";
import { Box, Button, Avatar , Field,  Table, Input , Loader, Heading, Text } from "rimble-ui";

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
    <Heading as={"h1"}>Flashloan arbitrage</Heading>
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
            <Button icon="Send" mr={3}>
              Send
          </Button>
          </div>
           <div className="col-sm">
             <Button size="medium" mr={3} onClick={onClick}>
                Go
             </Button>
           </div>
           <div className="col-sm">
            <Button>
              <Loader color="white" />
            </Button>
           </div>
         </div>
         <Box bg="white" color="white" fontSize={4} p={3} >
         <Table>
           <thead>
             <tr>
               <th>Transaction hash</th>
               <th>Value</th>
               <th>Recipient</th>
               <th>Time</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>0xeb...cc0</td>
               <td>0.10 ETH</td>
               <td>0x4fe...581</td>
               <td>March 28 2019 08:47:17 AM +UTC</td>
             </tr>
             <tr>
               <td>0xsb...230</td>
               <td>0.11 ETH</td>
               <td>0x4gj...1e1</td>
               <td>March 28 2019 08:52:17 AM +UTC</td>
             </tr>
             <tr>
               <td>0xed...c40</td>
               <td>0.12 ETH</td>
               <td>0x3fd...781</td>
               <td>March 28 2019 08:55:17 AM +UTC</td>
             </tr>
           </tbody>
         </Table>
         </Box>


    </div>
  );
}

export default App;
