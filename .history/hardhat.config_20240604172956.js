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
      url: "https://sepolia.infura.io/v3/a5a8f893c665463b9a8d8468616523b6",
      accounts:[f514a7fba230a1a31e4f0a645825072dcb9ee46a4673906802a462dce67bf5e7]
    }
  }
};
