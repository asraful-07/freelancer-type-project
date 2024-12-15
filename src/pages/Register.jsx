import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { handelRegister, manageProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handelSinUp = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;

    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }
    if (password !== conPassword) {
      setError("Passwords didn't match");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    handelRegister(email, password)
      .then((res) => {
        manageProfile(name, photoUrl);
        console.log("Registration successful:", res);
      })
      .catch((err) => {
        setError("Registration failed: " + err.message);
      });
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl p-6">
          <form onSubmit={handelSinUp} className="card-body">
            <h1 className="text-3xl font-semibold text-center mb-6">
              Register your account
            </h1>
            <div className="divider"></div>

            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered text-lg"
                required
              />
            </div>

            {/* Photo URL Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-bold">Your Photo URL</span>
              </label>
              <input
                type="url"
                name="photoUrl"
                placeholder="Enter your photo URL"
                className="input input-bordered text-lg"
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered text-lg"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered text-lg"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-bold">Confirm Password</span>
              </label>
              <input
                type="password"
                name="conPassword"
                placeholder="Confirm your password"
                className="input input-bordered text-lg"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 text-lg rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
                Register
              </button>
            </div>
            <p className="p-4 text-black text-sm">
              Don’t Have An Account?{" "}
              <Link to="/login" className="text-red-600 font-semibold">
                Login
              </Link>
            </p>
            {error && <p className="text-red-700">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
