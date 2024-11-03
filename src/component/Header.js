import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [isLogin, setLogin] = useState(true);
  const onlineStatus = useOnlineStatus();

  const {name,setName}=useContext(UserContext)

  return (
    <header className="header flex justify-between items-center shadow-md p-4 bg-white sticky top-0 z-10">
      {/* Logo Section */}
      <div className="header__logo-container flex items-center gap-3">
        <img
          src={LOGO_URL}
          alt="Tiffin Logo"
          className="w-12 h-12 border-2 border-yellow-400 rounded-full shadow-md hover:scale-105 transition-transform duration-200"
        />
        <h1 className="text-2xl font-bold text-yellow-600">Tiffin Service</h1>
      </div>

      {/* Navigation Links */}
      <ul className="header__nav hidden md:flex items-center space-x-6 text-lg font-medium text-gray-700">
        <li className="flex items-center gap-2">
          Status: <span>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</span>
        </li>
        <li>
          <Link to="/" className="hover:text-yellow-600 transition duration-200">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-600 transition duration-200">About Us</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-600 transition duration-200">Contact Us</Link>
        </li>
        <li>
          <Link to="/grocers" className="hover:text-yellow-600 transition duration-200">Grocers</Link>
        </li>
        <li
          onClick={() => setLogin(!isLogin)}
          className="cursor-pointer hover:text-yellow-600 transition duration-200"
        >
          {isLogin ? name : "Logout"}
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="flex md:hidden">
        <button className="p-2 text-gray-700 hover:text-yellow-600">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
