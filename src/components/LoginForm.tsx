"use client";

import { useState } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-slate-200 p-10 rounded-md shadow-lg">
        <h1 className="text-2xl text-gray-700 font-bold mb-4 text-center">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-gray-700 text-md font-medium mb-2">
              Email
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              type="email"
              id="email"
              name="email"
              placeholder="mail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-8">
            <label className=" text-gray-700 text-md font-medium mb-2">
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="w-full bg-black text-white py-2 px-4 rounded hover:opacity-75"
            type="submit"
          >
            Login
          </button>

          <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>

          <button className="w-full bg-black text-white py-2 px-4 rounded hover:opacity-75">
            Sign in with Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don&apos;t have an account?&nbsp;
            <Link className="text-blue-500 hover:underline" href="/signup">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
