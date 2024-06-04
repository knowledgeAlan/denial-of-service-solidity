require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  etherscan:{
    apiKey:process.env.ETHERSCAN_API_KEY,
  },
  networks:{
    sepolia: {
      url: process.env.ALCHEMY_API_KEY,
      accounts:[process.env.SEPOLIA_PRIVATE_KEY]
    }
  }
};
