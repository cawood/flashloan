import React, {useState} from 'react';
import Web3 from 'web3';
import testContract from "./abi/testContract";
import arbitrageur from "./abi/arbitrageur";
import Header from "./components/Header";
import Main2 from "./components/Main2";
import {Hello} from "./components/Hello";
import {ThemeProvider} from 'styled-components'
// @ts-ignore
import { Box, Button, Avatar , BaseStyles, theme, Form,  Heading, Card , Field, Flex,  Table, Input , Loader, Text } from "rimble-ui";




const onClick = async () => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545" );
  const accounts = await web3.eth.getAccounts();

  arbitrageur.methods.makeArbitrage("1000000000000000000").send({
    from: accounts[0]
  }).then((r:any)=>{
    console.log("r: ", r);
  }).catch((e:any) => console.error(e));
};

const onClick2 = async () => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545" );
  const accounts = await web3.eth.getAccounts();

  testContract.methods.testCall().call().then((r:any)=>{
    console.log("r: ", r);
  }).catch((e:any) => console.error(e));
};

const  App = () => {
  return (

    <ThemeProvider
    theme={Object.assign({}, theme, {
      colors: {
        ...theme.colors, // keeps existing colors
        text: "#EEE", // sets color for text
        background: "#222", // sets color for background
        primary: "#3259D6" // sets primary color
      },
      fontSizes: [12, 14, 16, 20, 24, 32, 48, 64], // sets font scale
      space: [0, 4, 8, 16, 32, 64, 128, 256], // sets spacing scale
    })}>
    <BaseStyles>
      <Card bg={'background'}>
        <Form display={'flex'} flexDirection={'column'}>
          <Text fontSize={4} mb={4}>
            Sign In
          </Text>
          <Form.Field label={'Username'}>
            <Form.Input type={'text'}  width={1} />
          </Form.Field>
          <Form.Field label={'Password'}>
            <Form.Input type={'password'}  width={1} />
          </Form.Field>
          <Form.Check label={'Remember Me'} mb={3} />
          <Button>Sign In</Button>
        </Form>
      </Card>
    </BaseStyles>
  </ThemeProvider>

  );
}

export default App;
