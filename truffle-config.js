const HDWalletProvider = require("@truffle/hdwallet-provider")
require("dotenv").config()


module.exports = {
	// See <http://truffleframework.com/docs/advanced/configuration> to customize your Truffle configuration!
	// contracts_build_directory: path.join(__dirname, "client/src/contracts"),
	networks: {
	  development: {
	    host: "127.0.0.1",
	    port: 8545,
	    // gas: 20000000,
	    network_id: "*",
	    //skipDryRun: true
	  },
	  ropsten: {
	    provider: new HDWalletProvider(process.env.DEPLOYMENT_ACCOUNT_KEY, "https://ropsten.infura.io/v3/965d4b4a7c544c8bb3e3f8da9a081cc6"),
	    network_id: 3,
	    //gas: 5000000,
		gasPrice: 5000000000, // 5 Gwei
		skipDryRun: true
	  },
	  kovan: {
	    provider: new HDWalletProvider(process.env.DEPLOYMENT_ACCOUNT_KEY, "https://kovan.infura.io/v3/965d4b4a7c544c8bb3e3f8da9a081cc6"),
	    network_id: 42,
			from: "0x44D00123d264Ba3Fb253563B6Fe34c142618d77A",
	    //gas: 5000000,
		gasPrice: 5000000000, // 5 Gwei
		skipDryRun: true
	  },

	},
	compilers: {
		solc: {
			version: "^0.5.0",
		},
	},
}
