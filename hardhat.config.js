require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("hardhat-gas-reporter")
require("./tasks/block-number")
require("solidity-coverage")


const { vars } = require("hardhat/config");

const INFURA_API_KEY = vars.get("INFURA_API_KEY");

const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

const COINMARKETCAP_API_KEY = vars.get("COINMARKETCAP_API_KEY")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
      chainId:11155111
    },
    localhost:{
      url:"http://127.0.0.1:8545/",
      chainId:31337
    }
  },
  defaultNetwork: "hardhat",
  etherscan:{
    apiKey:ETHERSCAN_API_KEY
  },
  gasReporter:{
    enabled:true,
    outputFile:"gas-reporter.txt",
    noColors:true,
    currency:"USD",
    coinmarketcap:COINMARKETCAP_API_KEY,
  }
  
};
