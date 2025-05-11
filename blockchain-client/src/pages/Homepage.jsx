import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl text-center"
      >
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          🗳️ Blockchain Voting DApp
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Secure, Transparent, and Anonymous Voting Powered by Ethereum
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link to="/register-voter">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-300"
            >
              👤 Register Voter
            </motion.button>
          </Link>
          <Link to="/commit-vote">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-3 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-300"
            >
              🔒 Commit Vote
            </motion.button>
          </Link>
          <Link to="/reveal-vote">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-3 bg-yellow-500 text-white rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition duration-300"
            >
              🔓 Reveal Vote
            </motion.button>
          </Link>
          <Link to="/results">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-3 bg-red-500 text-white rounded-lg font-semibold shadow-md hover:bg-red-600 transition duration-300"
            >
              🏆 View Results
            </motion.button>
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Powered by <span className="font-medium">Smart Contracts</span> on Ethereum
        </p>
      </motion.div>
    </div>
  );
}
