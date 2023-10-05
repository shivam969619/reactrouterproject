import React from 'react';

function Login() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center mb-6 text-blue-600">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg focus:outline-none transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
