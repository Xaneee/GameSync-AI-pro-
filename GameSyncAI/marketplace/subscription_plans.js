import Web3 from "web3";

const web3 = new Web3("https://your-blockchain-node.com");

export async function subscribeUser(user, plan) {
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    return await contract.methods.subscribe(user, plan).send({ from: user });
}

console.log("🚀 Web3 Subscription Plans Loaded");
