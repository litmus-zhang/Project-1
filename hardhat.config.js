require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  paths: {
    artifacts: "./client/src",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
};
