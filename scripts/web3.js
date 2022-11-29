const Web3 = require('web3')

var web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/f6dbb6e12bcf435cae15586ee0435192"));

const addr = "0x22CA7c38a1725ffB7883c18661A525ACd06052bB";
const json = require("../artifacts/contracts/BishaevAction.sol/BishaevAction.json");
const gettedContact = new web3.eth.Contract(json.abi, addr)
gettedContact.methods.getMyName().call().then(console.log)
