import React, {useState} from 'react';
import Web3 from 'web3';
import testContract from "./abi/testContract";
import arbitrageur from "./abi/arbitrageur";
import Header from "./components/Header";
import Main2 from "./components/Main2";
import {Hello} from "./components/Helllo";
import {ThemeProvider, createGlobalStyle} from 'styled-components'
// @ts-nocheck
import { Box, Button, Avatar , BaseStyles, theme, Form,  Heading, Card , Field, Flex,  Table, Input , Loader, Text } from "rimble-ui";


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:  border-box;
  }
  body {
    background: ${props => props.theme.background};
    font-family: ${props => props.fontFamily};
    background-color: "#999";
  }
`

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

const  App = () => {
  return (

  <Main2/>

  );
}

export default App;
