import React from "react";

const Register = () => {
  return (
    <div>
      <div className="flex flex-col justify-center shadow-lg items-center  bg-gray-300 p-6 rounded-2xl">
        <h1 className="text-5xl font-semibold mt-4 ">Register</h1>
        <p className="mt-5">Enter your details Below</p>
        <input
          type="Name"
          className="border-b-2 outline-none focus:border-b-gray-800 py-2 px-1 mt-2"
          placeholder="Name"
        ></input>
        <input
          type="Email"
          className="border-b-2 outline-none focus:border-b-gray-800 py-2 px-1 mt-4"
          placeholder="email"
        ></input>
        <input
          type="password"
          className="mt-4 border-b-2 outline-none  py-2 px-1"
          placeholder="Password"
        ></input>
        <button className=" bg-slate-500 hover:bg-green-400 mt-4 rounded-lg  w-fit p-2 font-semibold">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
