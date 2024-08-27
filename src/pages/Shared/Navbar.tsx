import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";

const Navbar = () => {
  const token = useAppSelector(useCurrentToken);
  // const user = useAppSelector(selectCurrentUser);

  let user;

  if (token) {
    user = verifyToken(token);
  }
  console.log(user);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="mx-auto container bg-[rgb(9,20,35)]  p-2">
      <div className="flex items-center justify-between py-3 px-4 md:px-0">
        <Link to="/" className="flex items-center ">
          <h3 className="font-extrabold text-white text-xl ml-6">
            Sports <span style={{ color: "#F95924" }}>Gen</span>
          </h3>
        </Link>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-[#F95924] focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Navigation Menu for Desktop and Mobile */}
        <nav className="hidden md:block">
          <ul className="md:flex md:space-x-2">
            <li>
              <NavLink
                to="/facilities"
                className={({ isActive }) =>
                  `m-6 text-white ${
                    isActive
                      ? "text-[#F95924] border-b-2 border-[#F95924]"
                      : "hover:text-[#F95924]"
                  }`
                }
              >
                Facilities
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `m-6 text-white ${
                    isActive
                      ? "text-[#F95924] border-b-2 border-[#F95924]"
                      : "hover:text-[#F95924]"
                  }`
                }
              >
                Sign up
              </NavLink>
            </li>
            {user?.role ? (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `m-6 text-white ${
                      isActive
                        ? "text-[#F95924] border-b-2 border-[#F95924]"
                        : "hover:text-[#F95924]"
                    }`
                  }
                >
                  Log Out
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `m-6 text-white ${
                      isActive
                        ? "text-[#F95924] border-b-2 border-[#F95924]"
                        : "hover:text-[#F95924]"
                    }`
                  }
                >
                  Log In
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>

      {/* Additional Mobile Menu (if needed) */}
      {isMobileMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col space-y-4 mt-2">
            <li>
              <NavLink
                to="/facilities"
                className={({ isActive }) =>
                  `block ml-6 text-white ${
                    isActive
                      ? "text-[#F95924] border-b-2 border-[#F95924]"
                      : "hover:text-[#F95924]"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Facilities
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `block m-6 text-white ${
                    isActive
                      ? "text-[#F95924] border-b-2 border-[#F95924]"
                      : "hover:text-[#F95924]"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign up
              </NavLink>
            </li>
            {user?.role ? (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `m-6 text-white ${
                      isActive
                        ? "text-[#F95924] border-b-2 border-[#F95924]"
                        : "hover:text-[#F95924]"
                    }`
                  }
                >
                  Log Out
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `m-6 text-white ${
                      isActive
                        ? "text-[#F95924] border-b-2 border-[#F95924]"
                        : "hover:text-[#F95924]"
                    }`
                  }
                >
                  Log In
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
