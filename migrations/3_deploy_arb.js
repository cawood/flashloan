const Arbitrageur = artifacts.require("Arbitrageur");

module.exports = deployer => {
  deployer.deploy(Arbitrageur);
};
