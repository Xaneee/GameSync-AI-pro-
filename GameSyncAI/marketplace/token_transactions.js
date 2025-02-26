import Web3 from "web3";

const web3 = new Web3("https://your-blockchain-node.com");

export async function processTokenTransaction(sender, receiver, amount) {
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    return await contract.methods.transfer(sender, receiver, amount).send({ from: sender });
}

console.log("🚀 Web3 Secure Token Transactions Loaded");
