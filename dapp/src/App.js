import React from 'react';
import Web3 from 'web3';
import abi from './abi';


async function initBlockchain() {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545" );
  const network = await web3.eth.net.getNetworkType();
  const accounts = await web3.eth.getAccounts();
  //const contract = web3.eth.contract("0xAa89Ce572c82C0DfC540119F4e62415a00d82c12");
  //console.log("network:", network);
  //console.log("accounts:", accounts);
  var contract = new web3.eth.Contract(abi, '0x93309C93A22445504A6273020427d6E0379d77BB', {
    from: '0x44D00123d264Ba3Fb253563B6Fe34c142618d77A', // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
  });


  contract.methods.flashLoan(1000000000000000000000, "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD");

}


function App() {

  initBlockchain();
  return (
    <div className="container">
        <h1>Hello World!</h1>
    </div>
  );
}

export default App;
