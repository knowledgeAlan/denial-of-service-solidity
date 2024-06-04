require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  etherscan:{
    apiKey:"7JPUU12VSIADTA3UEMVTZWZG68NCVFDJQA",
  },
  networks:{
    sepolia: {
      url: "https://sepolia.infura.io/v3/"+{process.env.ALCHEMY_API_KEY},
      accounts:[{process.env.SEPOLIA_PRIVATE_KEY}]
    }
  }
};
