import { Link, NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // console.log(user);

  const handleSignOut = () => {
    signOutUser()
      .then((request) => {
        console.log(request.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-700" : "")}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-700" : "")}
          to={"/blog"}
        >
          Blog
        </NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-green-700" : "")}
              to={"/updateProfile"}
            >
              Update Profile
            </NavLink>
          </li>
          <li>
            <button onClick={handleSignOut}>Log Out</button>
          </li>
        </>
      ) : (
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-700" : "")}
            to={"/login"}
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar z-10 relative h-24 bg-black px-3 lg:px-10 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"} className=" font-extrabold text-xl lg:text-4xl">
            Sedona<span className="text-green-700 font-bold ">.</span>{" "}
            <span className="text-green-700">Realty</span>
          </Link>
          <div className="border-l-2 hidden lg:flex border-white ml-3 pl-3">
            Unique Places to Stay
          </div>
        </div>
        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu-horizontal gap-3">{navLinks}</ul>
          </div>
          {user ? (
            <div className="mx-10 overflow-hidden btn-circle ">
              <Link
                to={"/updateProfile"}
                // data-tip={user.displayName}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
                className=""
              >
                <Tooltip id="my-tooltip" />

                <img
                  className="rounded-full h-full w-full"
                  src={user.photoURL}
                  alt="Tailwind CSS Navbar component"
                />
              </Link>
            </div>
          ) : (
            <div className="btn mx-10 btn-ghost border-white text-2xl btn-circle">
              <Link
                to={"/login"}
                // data-tip="Login"
                // data-tooltip-id="my-tooltip"
                // data-tooltip-content="Login"
                // className="flex items-center justify-center"
              >
                {/* <Tooltip style={{ fontSize: '15px' }} id="my-tooltip" /> */}
                <CiUser />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
