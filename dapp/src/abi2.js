//import web3 from './web3';
import Web3 from 'web3';
const web3 = new Web3(window.web3.currentProvider);
const address = '0x0EE6480a342d95936d60f7037a73D65f69794656';

const abi2 = [
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

export default new web3.eth.Contract(abi2, address);
