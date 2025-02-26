import Web3 from "web3";

const web3 = new Web3("https://your-blockchain-node.com");

export async function distributeNFTRoyalties(creator, salePrice) {
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    return await contract.methods.distributeRoyalties(creator, salePrice).send({ from: creator });
}

console.log("🚀 Web3 NFT Royalties Distribution Loaded");
