import React, { useState } from "react";
import useAuth from "../context/auth/hook";

const Login = () => {
  const { login } = useAuth();
  const [data, setData] = useState({ email: "", password: "" });

  const handleOnChange = (key) => (event) => {
    setData((oldData) => ({ ...oldData, [key]: event.target.value }));
  };

  const handleLogin = () => {
    login(data);
  };
  return (
    <div className="w-full max-w-sm m-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 text-center text-black text-4xl font-bold">
          Login
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-2xl font-bold mb-2"
            for="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            onChange={handleOnChange("email")}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-2xl font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            onChange={handleOnChange("password")}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xl">
        &copy; 2022 Created by Herdian Permana (152235865101-461)
      </p>
    </div>
  );
};

export default Login;
