// This file will use the injected web3 provide
// by meta mask


// The following imports web3 library
// from installed Web3 (npm install web3@1.0.0-beta-35)
import Web3 from 'web3';

// This would inject the our installed Web3 version
// into the application, instead the version of metamask.

// see the image file in resource directory for clarity.

// Here, we are taking the metamask provider (window.web3.currentProvider)
// give the copy of the provider to our Web3 provider.
const web3 = new Web3(window.web3.currentProvider);

export default web3;
