import Web3 from "web3";

const web3 = new Web3("https://your-blockchain-node.com");

export async function processInAppPurchase(user, itemId, price) {
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    return await contract.methods.buyItem(user, itemId, price).send({ from: user });
}

console.log("🚀 Web3 In-App Purchases System Loaded");
