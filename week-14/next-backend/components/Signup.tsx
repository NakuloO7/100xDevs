"use client";
import { signup } from "@/app/actions/user";
import axios from "axios";
import { useState } from "react";

export default function SignupComponent() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
        >
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">Sign Up</div>
            </div>
            <div className="pt-2">
              <input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2"
              />
              <button
                type="button"
                onClick={async()=>{
                    signup(email, password);
                }}
                className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Sign Up
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
