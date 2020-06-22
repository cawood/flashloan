import React, {useState} from 'react';
import Web3 from 'web3';
import testContract from "./abi/testContract";
import arbitrageur from "./abi/arbitrageur";
import { Box, Button, Avatar , Field,  Table, Input , Loader, Heading, Text } from "rimble-ui";
var i;
const setDataInput2 = (e) =>  e;

const onClick = async () => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545" );
  const accounts = await web3.eth.getAccounts();
  console.log("input2: ", i);
  arbitrageur.methods.makeArbitrage(i).send({
    from: accounts[0]
     }).then((r)=>{
    console.log("r: ", r);
  }).catch(e => console.error(e));
};

function  App() {
  const [input2, setInput2] = useState('');
  i = input2;
  return (
    <div className="container">
    <Heading as={"h1"}>Flashloan arbitrage {input2}</Heading>
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
              <Input id="input2" type="number" required={true} placeholder="e.g. 10000000000000" onChange={event => setInput2(event.target.value)}/>
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


    </div>
  );
}

export default App;
