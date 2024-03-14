import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container mx-auto mt-8 p-8">
      <h2 className="text-2xl font-semibold mb-4">Log In</h2>
      <div className='border border-slate-950 p-8'>
  <form className="flex flex-col">
    <div className="flex flex-col mb-4">
    <label htmlFor="email" className="hidden">
        username/Email
      </label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Username/Email"
        className=" mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
      />
    </div>

    <div className="flex flex-col mb-4">
      <label htmlFor="email" className="hidden">
        Password
      </label>
      <input
        type="password"
        name="email"
        id="password"
        placeholder="Password"
        className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
      />
    </div>
<div>
    <button
      type="submit"
      className="w-32 align-middle bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-orange-800"
    >
      Log In
    </button>
</div>
  </form>
</div>

      <p className="mt-4">
        Don't have an account?{' '}
        <Link to="/register" className="text-orange-700 font-medium">
          Register here
        </Link>
      </p>
    </div>
  );
}

export default Login;
