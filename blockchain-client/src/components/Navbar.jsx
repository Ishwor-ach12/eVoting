
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