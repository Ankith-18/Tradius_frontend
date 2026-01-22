import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLanding = location.pathname === "/";
  const { isAuthenticated, logout, user } = useAuth();
  const [open, setOpen] = useState(false);

  const initials =
    user?.email?.charAt(0).toUpperCase() || "U";

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully 👋");
    setOpen(false);
    navigate("/");
  };

  return (
    <nav
      className={`sticky top-0 z-50 ${
        isLanding ? "bg-white/80 backdrop-blur" : "bg-white"
      } border-b`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          Tradius
        </Link>

        {/* Right Section */}
        {!isAuthenticated ? (
          /* ================= LOGGED OUT ================= */
          <div className="flex items-center gap-6">
            <Link
              to="/login"
              className="text-sm font-medium text-gray-600 hover:text-black transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="text-sm font-medium bg-black text-white px-5 py-2 rounded-lg
                         hover:bg-gray-800 hover:scale-[1.03]
                         transition-all"
            >
              Sign up
            </Link>
          </div>
        ) : (
          /* ================= LOGGED IN ================= */
          <div className="relative">
            {/* Avatar */}
            <button
              onClick={() => setOpen(!open)}
              className="h-10 w-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-600
                         flex items-center justify-center text-white font-semibold
                         shadow hover:scale-105 transition"
            >
              {initials}
            </button>

            {/* Dropdown */}
            {open && (
              <div
                className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl
                           border border-gray-100 overflow-hidden"
              >
                <Link
                  to="/profile"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Profile
                </Link>

                <Link
                  to="/discover"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm hover:bg-gray-50"
                >
                  Discover
                </Link>

                <div className="border-t" />

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-sm text-red-600
                             hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
