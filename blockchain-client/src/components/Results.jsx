import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import VotingABI from "../contract/VotingABI.json";

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

const Results = () => {
  // Mock data for demonstration, in a real app this would come from blockchain
  // const electionResults = [
  //   { id: 1, name: "Bob", index: 0, votes: 0 },
  //   { id: 2, name: "Alice", index: 1, votes: 0 },
  //   { id: 3, name: "Charlie", index: 2, votes: 0 },
  // ];

  const [electionResults, setElectionResults] = useState([
  { id: 1, name: "Bob", index: 0, votes: 0 },
  { id: 2, name: "Alice", index: 1, votes: 0 },
  { id: 3, name: "Charlie", index: 2, votes: 0 },
  ]);

  const [voteCounts, setVoteCounts] = useState({
    Bob: "0",
    Alice: "0",
    Charlie: "0",
  });

  const [winner, setWinner] = useState(null);
  const[winnerVote, setwineerVote] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchVoteCounts = async () => {
    try {
      if (!window.ethereum) {
        setStatus("MetaMask not detected");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        VotingABI,
        signer
      );

      // Get all candidates data at once
      const [names, counts] = await contract.getAllCandidates();
      
      // Update election results
      const updatedResults = electionResults.map((candidate, index) => ({
        ...candidate,
        votes: Number(counts[index]) // Convert from BigInt to Number
      }));

      // Find winner
      const maxVotes = Math.max(...counts.map(c => Number(c)));
      setwineerVote(maxVotes);
      const winnerIndex = counts.findIndex(c => Number(c) === maxVotes);
      const winnerName = names[winnerIndex];

      setElectionResults(updatedResults);
      setWinner(winnerName);
      setStatus("Results fetched successfully!");
    } catch (err) {
      console.error(err);
      setStatus("❌ Error: " + (err.reason || err.message));
    }
  };

  fetchVoteCounts();
  console.log("hello")
  }, []);

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* Card replacement */}
      <div className="bg-white rounded-lg border-2 border-gray-200 shadow-sm mt-15">
        {/* CardHeader replacement */}
        <div className=" p-6 text-center mt-5">
          <h2 className="text-4xl font-bold">Results Page</h2>
          <p className="text-3xl text-gray-500 mt-3">Transparency Matters</p>
        </div>

        {/* CardContent replacement */}
        <div className="p-6 mb-5">
          <div className="border-1 border-gray-200 rounded-lg p-8">
            <h3 className="text-3xl font-semibold mb-6">Election Result</h3>
            <div className="space-y-4">
              {electionResults.map((candidate) => (
                <div
                  key={candidate.id}
                  className="flex justify-between items-center border-b-1 border-gray-200 py-5"
                >
                  <span className="font-semibold text-2xl">
                    {candidate.name}
                  </span>
                  <span className="font-bold text-2xl">
                    {candidate.votes} votes
                  </span>
                </div>
              ))}
            </div>
            {winnerVote != 0 &&  winner && (
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-green-600">
                  Winner: {winner}
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
