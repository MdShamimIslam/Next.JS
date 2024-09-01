

"use client";

import { doCredentialsSignIn } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const res = await doCredentialsSignIn(formData);

      if (!!res.err) {
        setError(res.err.message);
      } else {
        router.push("/booking");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl text-center mt-4 font-bold">Login now!</h1>
          <form className="card-body" onSubmit={handleLoginSubmit}>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="Password">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                id="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          {error && <p className="text-center text-red-600 mb-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
