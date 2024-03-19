import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col item-center justify-center h-screen ">
      <div className="flex flex-col justify-center shadow-lg items-center  bg-gray-300 p-6 rounded-2xl">
        <h1 className="text-5xl font-semibold mt-4 ">Login</h1>
        <p className="mt-5">Enter your details Below</p>
        <input
          type="email"
          className="border-2 border-gray-700 rounded-lg py-2 px-1"
          placeholder="Email"
        ></input>
        <input
          type="password"
          className="mt-4 border-2 border-gray-700 rounded-lg py-2 px-1"
          placeholder="Password"
        ></input>
        <button className=" bg-slate-500 mt-4 rounded-lg w-fit p-2 font-semibold">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
