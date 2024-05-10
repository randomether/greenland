import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// import '@openzeppelin/hardhat-defender';
import '@openzeppelin/hardhat-upgrades';

require("dotenv").config();

const PRIVATE_KEY: string = process.env.DEPLOYER_PRIVATE_KEY || '';
// const INFURA_API_KEY: string = process.env.INFURA_API_KEY || '';
// const ETHERSCAN_KEY: string = process.env.ETHERSCAN_KEY || '';
// const POLYGONSCAN_KEY: string = process.env.POLYGONSCAN_KEY || '';
// const ETH_NODE_URL: string = process.env.ETH_NODE_URL || '';
// const FORK_BLOCK: string = process.env.FORK_BLOCK || '';
const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defender: {
    apiKey: process.env.DEFENDER_KEY as string,
    apiSecret: process.env.DEFENDER_SECRET as string,
  },
  networks: {
    sepolia: {
      url: "https://ethereum-sepolia.publicnode.com",
      chainId: 11155111
    },
    optimism: {
      url: "https://mainnet.optimism.io",
      accounts: [PRIVATE_KEY],
      chainId: 10,
      timeout: 20000
    },
    // mainnet: {
    //   url: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID", // Change to your provider
    //   accounts: [process.env.DEPLOYER_PRIVATE_KEY], // Ensure this is correctly set
    //   chainId: 1, // Ethereum Mainnet
    //   gasPrice: 120000000000, // Example gas price, adjust based on current network conditions
    // }
  },
};


export default config;
