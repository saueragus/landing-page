import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FiCopy } from "react-icons/fi";
import { api } from "../data/api.js";
import Chart from "./Chart";
import opt from "../assets/blockchain/opt.svg";
import bsc from "../assets/blockchain/bsc.svg";
import ether from "../assets/blockchain/ether.png";
import ply from "../assets/blockchain/ply.svg";
import arb from "../assets/blockchain/arb.svg";
import USDC from "../assets/tokens/USDC.svg";
import wEth from "../assets/tokens/wEth.svg";
import WMATIC from "../assets/tokens/WMATIC.svg";
import ContractDetails from "../data/ether";
import contract_ether from "../data/abi_ether.json";
import contract_matic from "../data/abi_matic.json";
import ERC20 from "../data/ERC20.json";
import { ethers } from "ethers";
import axios from "axios";
import { TaskContext } from '../context/TaskContext';


function Dash() {
  const { id, graphId } = useParams();
  const [snap, setSnap] = useState(null);
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState(null);
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [withdraw, setWithdraw] = useState("");
  const [deposit, setDeposit] = useState("");
  const { createTask } = useContext(TaskContext);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const taskResponse = await axios.get(api + `/vaults/ID/${id}`);
        setTask(taskResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching task:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchSnapData = async () => {
      try {
        const snapResponse = await axios.get(api + `/last-snapshots/${id}`);
        setSnap(snapResponse.data);
      } catch (error) {
        console.error("Error fetching snapshot:", error);
      }
    };

    fetchSnapData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataResponse = await axios.get(api + `/snapshots-vault/${id}`);
        setData(dataResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  function getContractForBlockchain(blockchain) {
    let contractABI = null;
    if (blockchain === "wEth-USDC") {
      contractABI = contract_ether;
    } else if (blockchain === "wMatic-USDC") {
      contractABI = contract_matic;
    }
    if (contractABI) {
      return new ethers.Contract(
        task.Address,
        contractABI,
        provider.getSigner()
      );
    }
    return null;
  }

  const handleRebalance = async () => {
    const contract = getContractForBlockchain(task.Name);
    console.log(contract);
    if (contract) {
      const tx = await contract.rebalance();
      await tx.wait();
      console.log("Rebalanced");
    }
  };

  const handleClose = async () => {
    const contract = await getContractForBlockchain(task.Name);
    if (contract) {
      const tx = await contract.closePosition();
      await tx.wait();
      console.log("Contract Closed");
    }
  };

  const handleOpen = async () => {
    const contract = await getContractForBlockchain(task.Name);
    if (contract) {
      const tx = await contract.openPosition();
      await tx.wait();
      console.log("Contract Open");
    }
  };

  function getImageForToken(Name) {
    if (Name === "wEth-USDC") {
      return wEth;
    } else if (Name === "wMatic-USDC") {
      return WMATIC;
    }
    return "";
  }

  function getImageForBlockchain(blockchain) {
    if (blockchain === "mainnet") {
      return ether;
    } else if (blockchain === "binance-smart-chain") {
      return bsc;
    } else if (blockchain === "polygon-main") {
      return ply;
    } else if (blockchain === "arbitrum-main") {
      return arb;
    } else if (blockchain === "optimism-main") {
      return opt;
    }
    return "";
  }

  function colorValue(vaultValue) {
    const truncatedVaultValue = vaultValue?.toFixed(2);

    if (vaultValue > task.Inversion) {
      return (
        <p className=" text-green-600">Vault Value: {truncatedVaultValue}</p>
      );
    } else if (vaultValue < task.Inversion) {
      return (
        <p className=" text-red-600">Vault Value: {truncatedVaultValue}</p>
      );
    } else if (vaultValue === task.Inversion) {
      return <p>Vault Value: {truncatedVaultValue}</p>;
    }
    return null;
  }

  function colorApy() {
    if (snap?.APY > 0) {
      return <p className="text-green-600">APY: {snap?.APY.toFixed(2)}</p>;
    } else if (snap?.APY < 0) {
      return <p className="text-red-600">APY: {snap?.APY.toFixed(2)}</p>;
    } else if (snap?.APY === 0) {
      return <p>{snap?.APY}</p>;
    }
    return null;
  }
  function roiValue(vaultValue, Inversion) {
    return ((snap?.vaultValue * 100) / task?.Inversion - 100).toFixed(2);
  }

  function colorRoi() {
    const ROI = roiValue(snap?.vaultValue, task?.Inversion);

    if (ROI > 0) {
      return <p className=" text-green-600">ROI: {ROI}%</p>;
    } else if (ROI < 0) {
      return <p className=" text-red-600">ROI: {ROI}%</p>;
    } else if (ROI === 0) {
      return <p>{ROI}</p>;
    }

    return null;
  }

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(task.Address);
    setCopied(true);
  };

  const formatTimestamp = (timestamp) => {
    const year = timestamp.substring(0, 4);
    const month = timestamp.substring(4, 6);
    const day = timestamp.substring(6, 8);
    const hour = timestamp.substring(8, 10);
    const minute = timestamp.substring(10, 12);
    const second = timestamp.substring(12, 14);
    return `${year}-${month}-${day}`;
  };

  if (loading) {
    return (
      <h1 className="text-zinc-900 dark:text-white text-center justify-center">
        Loading...
      </h1>
    );
  }

  const handleSubmitW = async (e) => {
    e.preventDefault();
    if (!task.Token0) {
      console.error("Invalid token address");
      console.log(task.Token0)
      console.log(ERC20)
      return;
    }
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const usdcContract = new ethers.Contract(task.Token0, ERC20, signer);

    const vault = getContractForBlockchain(task.Name);
    try {
      // Deposit to vault
      const withdrawTx = await vault.withdraw(withdraw*10**6);
      await withdrawTx.wait();
  
      // Limpiar el campo de retiro
      setWithdraw("");
  
      console.log("Withdraw successful");
    } catch (error) {
      console.error("Error withdrawing:", error);
    }
  };
  
  const handleSubmitD = async (e) => {
    e.preventDefault();
    if (!task.Token0) {
      console.error("Invalid token address");
      console.log(task.Token0)
      console.log(ERC20)
      return;
    }
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const usdcContract = new ethers.Contract(task.Token0, ERC20, signer);

    const vault = getContractForBlockchain(task.Name);

    try {
      // Approve USDC
      const approveTx = await usdcContract.approve(task.Address, deposit);
      await approveTx.wait();
  
      // Deposit to vault
      const depositTx = await vault.deposit(deposit*10**6);
      await depositTx.wait();
  
      // Limpiar el campo de retiro
      setDeposit("");
  
      console.log("Deposit successful");
    } catch (error) {
      console.error("Error depositing:", error);
    }
  };
  
  

  if (!task) {
    return null;
  }

  const dataWithFormattedTimestamp = data?.map((entry) => ({
    ...entry,
    timestamp: formatTimestamp(entry.timestamp),
  }));

  return (
    <div className=" text-zinc-800 dark:text-zinc-400 font-encode">
      <ContractDetails />
      <div className="flex w-full">
        <div className="mt-20 px-20">
          <div className="flex">
            <h1>Blockchain: </h1>
            <img
              src={getImageForBlockchain(task.Blockchain)}
              className=" mx-2 w-12 h-12"
            ></img>
            <h1>
              {task.Blockchain === "polygon-main" ? "Polygon" : ""}
              {task.Blockchain === "arbitrum-main" ? "Arbitrum" : ""}
              {task.Blockchain === "mainnet" ? "Ethereum" : ""}
              {task.Blockchain === "optimism-main" ? "Optimism" : ""}
              {task.Blockchain === "bsc-main" ? "BSC" : ""}
            </h1>
          </div>
          <div className="flex">
            <h1>Inversion: {task.Inversion}</h1>
            <img src={USDC} className=" mx-2 w-12 h-12"></img>
          </div>
          <div>
            <div className="flex">
              <img
                src={getImageForToken(task.Name)}
                alt="imagen de prueba"
                className="w-12 h-12"
              />
              <img src={USDC} alt="imagen de prueba" className="w-12 h-12" />
              <h1>{task.Name}</h1>
            </div>
            <h1>Range: {task.TickRange}</h1>
          </div>
          <div className="flex">
            

            
            <a
              href={`https://debank.com/profile/${task.Address}`}
              target="_blank"
              className="text-zinc-800 dark:text-zinc-400 text-xl self-center"
            >
              {task.Address}
            </a>
          </div>
          <div className="flex pt-24">
            <div>
              <h1>{colorRoi(snap?.vaultValue, task.Inversion)}</h1>
              <h1>{colorApy(snap?.APY)}</h1>

              <div>
                <div>
                  <h1>{colorValue(snap?.vaultValue)}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 mb-2 text-zinc-950">
            <div className="mb-2">
            <form 
           className="flex">
            <input
              placeholder="Place amount"
              
              onChange={(e) => setDeposit(e.target.value)}
              className="bg-white p-1.5 w-full rounded-md font-encode shadow-2xl appearance-none mr-3"
              type="number"
              value={deposit}
            ></input>
            <input
              placeholder="Place amount"
              onChange={(e) => setWithdraw(e.target.value)}
              className="bg-white p-1.5 w-full rounded-md font-encode shadow-2xl appearance-none ml-3"
              type="number"
              value={withdraw}
            ></input>
            </form>
            </div>
            <div className="grid grid-cols-2 gap-4">
            <button
              className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-md text-zinc-800 font-bold hover:scale-105 transition-all"
              onClick={handleSubmitD}
            >
              Deposit
            </button>

            <button
              className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-md text-zinc-800 font-bold hover:scale-105 transition-all"
              onClick={handleSubmitW}
            >
              Withdraw
            </button>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <Link to={`/dash/${task.ID}/graph`}>
            <Chart />
          </Link>

          <div className="justify-end">
            <div className="grid grid-cols-2 gap-4 py-2 ">
              <button
                className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-md text-zinc-800 font-bold hover:scale-105 transition-all"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-md text-zinc-800 font-bold hover:scale-105 transition-all"
                onClick={handleOpen}
              >
                Open
              </button>
            </div>

            <button
              className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-md text-zinc-800 font-bold hover:scale-105 transition-all w-full"
              onClick={handleRebalance}
            >
              Rebalance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
/*
<button
className="ml-2 mt-2 mr-2 flex dark:bg-gray-300 dark:hover:bg-gray-400 bg-gray-800 hover:bg-gray-900 text-zinc-300 py-2 px-2 rounded-md dark:text-zinc-800 font-bold hover:scale-105 transition-all"
onClick={handleCopyAddress}
>
<FiCopy />
</button>
*/