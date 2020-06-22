import React from 'react';
import Web3 from 'web3';
import testContract from "./abi/testContract";
import arbitrageur from "./abi/arbitrageur";

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
        <h1>Hello World!</h1>
          <button onClick={onClick}> Test</button>
    </div>
  );
}

export default App;
