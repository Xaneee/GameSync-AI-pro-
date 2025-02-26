import Web3 from "web3";

const web3 = new Web3("https://your-blockchain-node.com");

export async function purchaseNFT(buyer, assetId, price) {
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    await contract.methods.purchaseAsset(buyer, assetId, price).send({ from: buyer });
}

console.log("🚀 Web3 NFT Transactions Module Loaded");
