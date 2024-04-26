import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Register = () => {
  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-white p-2">
        <div className="bg-white text-[#6f68d1] p-4 py-6 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to E-Commerce</h2>
          <p className="text-sm mb-4 font-medium">
            Please register your account
          </p>
          <form>
            <div className="flex flex-col w-full gap-4 mb-3">
              <input
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                required
              />
              <input
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
              />
              <input
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>

            <div className="flex items-center w-full gap-3 mb-3">
                <input className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500" type="checkbox" name="checkbox" id="checkbox" />
                <label className="font-semibold" htmlFor="checkbox">I agree to privacy policy & terms</label>
            </div>

            <button className="bg-[#6f68d1] text-white w-full hover:shadow-blue-300 p-2 rounded font-semibold">Sign Up</button>
            <div className="flex items-center my-4 gap-3 justify-center">
                <p>Already have an account ? <Link className="font-bold" to="/login">Sign In</Link></p>
            </div>

            <div className="w-full flex justify-center items-center mb-3">
                <div className="w-[45%] bg-slate-700 h-[1px]"></div>
                <div className="w-[10%] flex justify-center items-center">
                    <span className="pb-1">Or</span>
                </div>
                <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>

            <div className="flex justify-center items-center gap-3">
                <div className="w-[135px] h-[35px] flex rounded-md bg-white shadow-lg hover:shadow-blue-500/50 justify-center cursor-pointer items-center">
                    <span><FaGoogle /></span>
                </div>
                <div className="w-[135px] h-[35px] flex rounded-md bg-white shadow-lg hover:shadow-blue-500/50 justify-center cursor-pointer items-center">
                    <span><FaFacebook /></span>
                </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
