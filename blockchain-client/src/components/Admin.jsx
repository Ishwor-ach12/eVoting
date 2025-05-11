import { useState } from "react";
import { ethers } from "ethers";
import VotingABI from "../contract/VotingABI.json";

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;
console.log("Contract Address from ENV:", import.meta.env.VITE_REACT_APP_CONTRACT_ADDRESS);

const Admin = () => {
  const [voterAddress, setVoterAddress] = useState("");
  const [status, setStatus] = useState("");
  const[openedStatus, setopenedStatus] = useState("");

  const handleRegister = async(e) => {
    e.preventDefault();
    if (!window.ethereum) {
      setStatus("Please install MetaMask");
      return;
    }

    try {
      // Request access to wallet
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, VotingABI, signer);

      const tx = await contract.registerVoter(voterAddress);
      setStatus("Transaction sent. Waiting for confirmation...");
      await tx.wait();
      setStatus(`✅ Voter ${voterAddress} registered successfully`);
      setVoterAddress(""); // Reset input
    } catch (error) {
      console.error(error);
      setStatus(`❌ Error: ${error.reason || error.message}`);
    }
  };

  const handleStartVoting = async() => {
    if (!window.ethereum) {
    setopenedStatus("Please install MetaMask");
    return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, VotingABI, signer);

      const tx = await contract.startVoting();
      setopenedStatus("Starting voting...");
      await tx.wait();
      setopenedStatus("✅ Voting has started!");
    } catch (error) {
      console.error(error);
      setopenedStatus(`❌ Error: ${error.reason || error.message}`);
    }
  };

  const handleCloseVoting = async () => {
    if (!window.ethereum) {
    setopenedStatus("Please install MetaMask");
    return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, VotingABI, signer);

      const tx = await contract.closeVoting();
      setopenedStatus("Closing voting...");
      await tx.wait();
      setopenedStatus("✅ Voting has been closed!");
    } catch (error) {
      console.error(error);
      setopenedStatus(`❌ Error: ${error.reason || error.message}`);
    }
  };

  return (
    <div className="container mx-auto p-10 max-w-7xl mt-10">
      <h1 className="text-5xl font-bold mb-10">Admin Page</h1>
      
      {/* Card replacement */}
      <div className="bg-white rounded-lg border-gray-200 border-2 shadow-md mb-8">
        {/* CardHeader replacement */}
        <div className=" p-6">
          <h2 className="text-4xl font-semibold">Welcome to Admin Dashboard</h2>
        </div>
        
        {/* CardContent replacement */}
        <div className="p-6">
          <div className="space-y-6">
            {/* Register Voter Section */}
            <div className="border-1 border-gray-200 rounded-lg p-6 mb-10">
              <h2 className="text-3xl font-semibold mb-6">Register a Voter</h2>
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label htmlFor="voterAddress" className="block mb-3 text-2xl">
                    Enter voter wallet address:
                  </label>
                  <input
                    id="voterAddress"
                    type="text"
                    value={voterAddress}
                    onChange={(e) => setVoterAddress(e.target.value)}
                    placeholder="0x..."
                    className="text-xl w-full px-3 py-3 border-1 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-xl  font-bold px-6 py-4 bg-black text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer mt-4"
                >
                  Register
                </button>
                {status && (
                  <p className="mt-4 text-lg text-center text-gray-700">{status}</p>
                )}
              </form>
            </div>
            
            {/* Voting Control Section */}
            <div className="border-1 border-gray-200   rounded-lg p-6 flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-semibold py-6">Voting Control</h2>
              </div>
              <div className="space-x-4">
                <button
                  onClick={handleStartVoting}
                  className="px-6 py-3 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-xl cursor-pointer"
                >
                  Start Voting
                </button>
                <button
                  onClick={handleCloseVoting}
                  className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-xl cursor-pointer"
                >
                  Close Voting
                </button>
              </div>
            </div>
            {openedStatus && (
                  <p className="mt-4 text-lg text-center text-gray-700">{openedStatus}</p>
                )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;