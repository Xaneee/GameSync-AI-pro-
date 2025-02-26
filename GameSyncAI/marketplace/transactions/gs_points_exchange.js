import Web3 from "web3";

const web3 = new Web3("https://your-blockchain-node.com");

export async function exchangeGSPointsForTokens(user, gsPoints) {
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    return await contract.methods.redeemGSPoints(user, gsPoints).send({ from: user });
}

console.log("🚀 Web3 GS Points Exchange Module Loaded");
