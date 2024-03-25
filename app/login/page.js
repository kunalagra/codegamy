"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);

    await signIn('credentials', {email, password, callbackUrl: '/'});
    setLoginInProgress(false);
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email" 
            placeholder="email"
            value={email}
            disabled={loginInProgress}
            onChange={(ev) => setEmail(ev.target.value)}
            className="shadow-sm p-4 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password" 
            placeholder="password"
            value={password}
            disabled={loginInProgress}
            onChange={(ev) => setPassword(ev.target.value)}
            className="shadow-sm p-4 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="text-center mb-4">
          <button
            type="submit"
            disabled={loginInProgress}
            className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-auto"
          >
            Login
          </button>
        </div>
        <div className="text-center text-gray-700">
          Don't have an account?{' '}
          <a href="/register" className="underline">Register here &raquo;</a>
        </div>
      </form>
    </section>
  );
}