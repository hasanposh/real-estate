import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const { createUser, signOutUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  // const location = useLocation();
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;

    if (!emailValidate.test(email)) {
      toast("Invalid email address");
      return;
    }

    if (password.length < 6) {
      toast("Password must be at least 6 characters");
      return;
    }

    if (!passwordValidate.test(password)) {
      toast(
        "Password must contain at least one Uppercase and one Lowercase letter and one number."
      );
      return;
    }
    // console.log(name, photoURL, email, password);
    createUser(email, password)
      .then((request) => {
        const user = request.user;
        updateProfile(user, { displayName: name, photoURL: photoURL }).then(
          () => {
            // console.log("Display name set successfully");
          }
        );
        // console.log(request.user);
        toast("Registered Successfully");
        signOutUser();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        // const errorMessage = error.message;
        const errorCode = error.code;
        toast(errorCode);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Sedona Realty | Registration</title>
      </Helmet>
      <div className="h-48 flex text-white justify-center items-center bg-center bg-cover  bg-[linear-gradient(45deg,rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url('/headerbanner.jpeg')]">
        <h1 className="text-2xl font-bold text-center">Registration</h1>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full  max-w-md p-8 space-y-3 rounded-xl">
          <form
            onSubmit={handleSignIn}
            noValidate=""
            action=""
            className="space-y-6"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Your Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                id="photoURL"
                placeholder="Your Photo URL"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">
                Your Mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Mail"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="relative space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <div
                className="absolute  right-3 top-9"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
              <div className="flex justify-end text-xs dark:text-gray-600">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button className="block w-full p-3 text-center bg-green-700 text-white rounded-sm">
              Register
            </button>
          </form>

          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            Already have an account?
            <Link
              to={"/login"}
              rel="noopener noreferrer"
              href="#"
              className="underline dark:text-gray-800"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
