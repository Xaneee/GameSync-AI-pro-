import Web3 from "web3";

const web3 = new Web3("https://your-blockchain-node.com");

export async function validateNFTTrade(buyer, seller, assetId) {
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    return await contract.methods.isTradeValid(buyer, seller, assetId).call();
}

console.log("🚀 Web3 NFT Trade Validation Loaded");
