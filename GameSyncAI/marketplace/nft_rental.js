import Web3 from "web3";

const web3 = new Web3("https://your-blockchain-node.com");

export async function rentNFT(user, assetId, duration) {
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    return await contract.methods.rentAsset(user, assetId, duration).send({ from: user });
}

console.log("🚀 Web3 NFT Rental System Loaded");
