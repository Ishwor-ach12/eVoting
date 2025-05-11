import { useState } from "react";
import { ethers } from "ethers";
import VotingABI from "../contract/VotingABI.json";

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

const Reveal = () => {
  const [candidateIndex, setCandidateIndex] = useState("");
    const [secret, setSecret] = useState("");
    const [status, setStatus] = useState("");
    const [candidates, setCandidates] = useState([
      { name: "Bob", index: 0 },
      { name: "Alice", index: 1 },
      { name: "Charlie", index: 2 }
    ]);

  const handleRevealVote = async (e) => {
    e.preventDefault();
    try {
      if (!window.ethereum) {
        setStatus("MetaMask not detected");
        return;
      }
  
      // Use ethers.BrowserProvider instead of Web3Provider
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner(); // Add await here
      const address = await signer.getAddress();
  
      const contract = new ethers.Contract(CONTRACT_ADDRESS, VotingABI, signer);

      //check if voting is closed
      const isVotingOpen = await contract.votingOpen(); // assuming public variable
      if (isVotingOpen) {
        setStatus("❌ You cannot reveal your vote while voting is still open.");
        return;
      }
  
      // Check if the voter is registered
      const isRegistered = await contract.isVoterRegistered(address);
      if (!isRegistered) {
        setStatus("❌ You are not registered to vote.");
        return;
      }
  
      if (!candidateIndex || !secret) {
        setStatus("Please select a candidate and enter your secret");
        return;
      }
  
      const tx = await contract.revealVote(Number(candidateIndex), secret);
      setStatus("Revealing vote...");
      await tx.wait();
      setStatus("✅ Vote revealed successfully!");
      setCandidateIndex("");
      setSecret("");
    } catch (err) {
      console.error(err);
      setStatus("❌ Error: " + (err.reason || err.message));
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl mt-15">
      {/* Card replacement */}
      <div className="mx-auto max-w-2xl bg-white rounded-lg border-2 border-gray-200 shadow-sm px-7">
        {/* CardHeader replacement */}
        <div className=" p-6">
          <h2 className="text-4xl font-semibold text-center">Reveal Your Vote</h2>
        </div>
        
        {/* CardContent replacement */}
        <div className="p-3">
          <div className="text-center mb-8">
            <p className="text-3xl">Remember your secret!</p>
          </div>
          
          <form onSubmit={handleRevealVote} className="space-y-6">
            <div className="mb-10">
              <label htmlFor="candidate" className="block mb-3 text-2xl">Select Candidate:</label>
              {/* Select replacement */}
              <select
                id="candidate"
                value={candidateIndex}
                onChange={(e) => setCandidateIndex(e.target.value)}
                className="w-full px-3 py-4 text-xl border-1 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">--Select a candidate--</option>
                {candidates.map((c) => (
                  <option key={c.index} value={c.index}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="secret" className="block mb-3 text-2xl">Enter Your Secret:</label>
              {/* Input replacement */}
              <input 
                id="secret" 
                type="text"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="Your secret phrase or number"
                className="w-full px-3 py-4 text-xl border-1 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            {/* Button replacement */}
            <button
              type="submit"
              className="w-full px-4 py-4 text-2xl bg-black text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-5 mb-5 font-semibold cursor-pointer"
            >
              Reveal Vote
            </button>
            {status && <p className="mt-4 text-center text-lg text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reveal;