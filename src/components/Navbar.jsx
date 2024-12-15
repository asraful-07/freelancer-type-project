import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center gap-2">
          <h1></h1>
          <span className="text-xl font-bold text-gray-800 hover:text-indigo-600">
            SoloSphere
          </span>
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
                : "text-gray-600 hover:text-indigo-600 font-medium"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
                : "text-gray-600 hover:text-indigo-600 font-medium"
            }
          >
            All Jobs
          </NavLink>

          {!user && (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 bg-indigo-700 text-white font-medium rounded"
                  : "px-4 py-2 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700"
              }
            >
              Login
            </NavLink>
          )}

          {user && (
            <div className="relative dropdown">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center cursor-pointer"
              >
                <div
                  title={user?.displayName}
                  className="w-10 h-10 rounded-full overflow-hidden shadow-md"
                >
                  <img
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                    alt="User Profile"
                  />
                </div>
              </div>

              {/* Dropdown Menu */}
              <ul
                tabIndex={0}
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
              >
                <li>
                  <NavLink
                    to="/add-job"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 text-indigo-600 font-semibold bg-indigo-50"
                        : "block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                    }
                  >
                    Add Job
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-posted-jobs"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 text-indigo-600 font-semibold bg-indigo-50"
                        : "block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                    }
                  >
                    My Posted Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-bids"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 text-indigo-600 font-semibold bg-indigo-50"
                        : "block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                    }
                  >
                    My Bids
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bid-requests"
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 text-indigo-600 font-semibold bg-indigo-50"
                        : "block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                    }
                  >
                    Bid Requests
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-indigo-600 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
