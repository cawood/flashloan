import React from 'react';
import Header from './Header';
import {Flex, Box, Button} from 'rimble-ui';
import Web3 from 'web3';
import testContract from "../abi/testContract";
import arbitrageur from "../abi/arbitrageur";

const onClick = async () => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545" );
  const accounts = await web3.eth.getAccounts();

  arbitrageur.methods.makeArbitrage("1000000000000000000").send({
    from: accounts[0]
     }).then((r)=>{
    console.log("r: ", r);
  }).catch(e => console.error(e));
};

const onClick2 = async () => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545" );
  const accounts = await web3.eth.getAccounts();

  testContract.methods.testCall().call().then((r)=>{
    console.log("r: ", r);
  }).catch(e => console.error(e));
};

const Main2 = () => {

  return(
    <div>
      <Header />
        <Flex>
          <Box p={3} width={1 / 2} color="#000" bg="#fff">
              <Button size="medium" icon="Send" mr={3} onClick={onClick2}></Button>
          </Box>
          <Box p={3} width={1 / 2} color="#000" bg="#fff">
              <Button size="medium" mr={3} onClick={onClick}>
                 Go
              </Button>
          </Box>
        </Flex>
  </div>
  );
}

export default Main2;
