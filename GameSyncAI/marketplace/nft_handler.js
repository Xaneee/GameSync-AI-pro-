import Web3 from "web3";

const web3 = new Web3("https://your-blockchain-node.com");

export async function validateNFTOwnership(user, assetId) {
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    return await contract.methods.ownerOf(assetId).call() === user;
}

console.log("🚀 Web3 NFT Ownership Validation Loaded");
