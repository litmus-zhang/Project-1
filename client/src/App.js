import React, { useEffect, useState } from "react";
import getEthers from "./getEthers";
import { Contract, utils } from "ethers";
import Token from "./contracts/Token.sol/Token.json";
import "./App.css";

function App() {
  const [ethBalance, setEthBalance] = useState(0);
  const [balance, setBalance] = useState(0);
  const [methods, setMethods] = useState({});
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const getData = async () => {
      const provider = await getEthers();
      const signer = provider.getSigner();
      const address = signer.getAddress();
      const bal = await provider.getBalance(address);
      const balance = utils.formatEther(bal);
      const contract = new Contract(
        "0x5FbDB2315678afecb367f032d93F642f64180aa3",
        Token.abi,
        provider
      );
      setMethods(contract.connect(signer));
      const tokenBalance = (await contract.balanceOf(address)).toString();
      setBalance(tokenBalance);
      setEthBalance(balance);
      contract.on("Transfer", async (from, to, amount, event) => {
        const bal = await provider.getBalance(address);
        const balance = utils.formatEther(bal);
        const tokenBalance = (await contract.balanceOf(address)).toString();
        setBalance(tokenBalance);
        setEthBalance(balance);
      });
    };

    getData().then(() => {
      console.log("Data has been obtained");
    });
  }, []);

  return (
    <div className="App">
      <div className="centralDiv">
        <p className="balance">ETH Balance: {ethBalance}</p>
        <p className="balance">Token Balance: {balance}</p>
        <input className="input" onChange={(e) => setAddress(e.target.value)} />
        <input className="input" onChange={(e) => setAmount(e.target.value)} />
        <button
          className="button"
          onClick={async () => {
            await methods.transfer(address, amount);
          }}
        >
          Transfer
        </button>
      </div>
    </div>
  );
}

export default App;
