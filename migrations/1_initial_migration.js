const Migrations = artifacts.require("Migrations");
let defaultAccount = '0x44D00123d264Ba3Fb253563B6Fe34c142618d77A';

module.exports = deployer => {
  deployer.deploy(Migrations);
};
