import React from 'react';
import Web3 from 'web3';
//import abi from './abi';
import testContract from "./abi/testContract";
import arbitrageur from "./abi/arbitrageur";


async function initBlockchain() {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545" );

  console.log(web3);

  const network = await web3.eth.net.getNetworkType();
  const accounts = await web3.eth.getAccounts();
  //const contract = web3.eth.contract("0xAa89Ce572c82C0DfC540119F4e62415a00d82c12");
  console.log("network:", network);
  //console.log("accounts:", accounts);
/*var contract = new web3.eth.Contract(abi3, '0x0EE6480a342d95936d60f7037a73D65f69794656', {
    from: '0x44D00123d264Ba3Fb253563B6Fe34c142618d77A', // default from address
    // default gas price in wei, 20 gwei in this case
  });*/

  // const contract  = new web3

  /*const config = {
        */

  /*contract.methods.testCall().call().then((r) =>{

        console.log("r: ", r);
    });;*/



}


const onClick = async () => {
  /*testContract.methods.testCall().call().then((r) =>{
    console.log("r: ", r);
  }).catch((e)=>{console.error(e)});*/

  arbitrageur.methods.makeArbitrage("1000000000000000000").send().then((r)=>{
    console.log("r2: ", r);
  })
};




function App() {

  initBlockchain();
  return (
    <div className="container">
        <h1>Hello World!</h1>
          <button onClick={onClick}> Test</button>
    </div>
  );
}

export default App;
