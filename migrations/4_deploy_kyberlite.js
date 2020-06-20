const KyberLiteBase = artifacts.require("KyberLiteBase");

module.exports = deployer => {
  deployer.deploy(KyberLiteBase);
};
