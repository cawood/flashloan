//import web3 from './web3';
import Web3 from 'web3';
const web3 = new Web3(window.web3.currentProvider);
const address = '0x29134E073A0a18F2260bD46D8647cd2fa2cFfF8F';

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
