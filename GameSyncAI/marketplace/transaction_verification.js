import Web3 from "web3";

const web3 = new Web3("https://your-blockchain-node.com");

export async function verifyTransaction(transactionHash) {
    return await web3.eth.getTransactionReceipt(transactionHash);
}

console.log("🚀 Web3 Transaction Verification Loaded");
