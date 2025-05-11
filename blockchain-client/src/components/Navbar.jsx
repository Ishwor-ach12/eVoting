// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Navbar() {
//   const location = useLocation();

//   const navLinkStyle = (path) =>
//     `px-4 py-2 rounded hover:bg-blue-600 transition ${
//       location.pathname === path ? "bg-blue-700 text-white" : "text-gray-200"
//     }`;

//   return (
//     <nav className="bg-white">
//       <div className="container mx-auto flex justify-between items-center text-black">
//         <Link to="/" className="text-white text-xl font-bold">
//           🗳️ Blockchain Voting
//         </Link>
//         <div className="space-x-2">
//           <Link to="/" className={navLinkStyle("/")}>
//             Home
//           </Link>
//           <Link to="/register-voter" className={navLinkStyle("/register-voter")}>
//             Register Voter
//           </Link>
//           <Link to="/commit-vote" className={navLinkStyle("/commit-vote")}>
//             Commit Vote
//           </Link>
//           <Link to="/reveal-vote" className={navLinkStyle("/reveal-vote")}>
//             Reveal Vote
//           </Link>
//           <Link to="/results" className={navLinkStyle("/results")}>
//             Results
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
import react from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-6 shadow-md sticky top-0 z-50">
      <div className="flex justify-between">
        <div className="font-bold text-4xl ml-20">Ballot Box</div>
        <div className="flex space-x-10 text-2xl  mr-20">
          <Link to="/admin" className="hover:bg-blue-700 px-3 py-2 rounded">Admin</Link>
          <Link to="/commit" className="hover:bg-blue-700 px-3 py-2 rounded">Commit Vote</Link>
          <Link to="/reveal" className="hover:bg-blue-700 px-3 py-2 rounded">Reveal Vote</Link>
          <Link to="/results" className="hover:bg-blue-700 px-3 py-2 rounded">Results</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;