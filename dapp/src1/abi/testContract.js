//import web3 from './web3';
import Web3 from 'web3';
const web3 = new Web3(window.web3.currentProvider);
const address = '0xEeB0D19BF489cc23dcC35084854Ee890aC437f19';

const testContract = [
  {
    "constant": true,
    "inputs": [],
    "name": "testCall",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

export default new web3.eth.Contract(testContract, address);
