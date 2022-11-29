/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-ethers')
require('@nomicfoundation/hardhat-chai-matchers')
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
};

const GOERLI_PRIVATE_KEY = "0548b6d1049cffbcaafdb3f6bd67fc7c771e6051171036be1759c3e17b205545";
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/f6dbb6e12bcf435cae15586ee0435192`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
