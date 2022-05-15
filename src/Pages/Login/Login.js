import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase-init";
import Loading from "../Shared/Loading";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      console.log(user);
      navigate(from, { replace: true });
    }
  }, [navigate, from, user]);

  if (loading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-3xl font-semibold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email address"
                className="input border border-neutral focus:outline-none focus:border-accent w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please provide your email",
                  },
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            {/* Password */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input border border-neutral focus:outline-none focus:border-accent w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please enter your password",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {error && <p className="text-red-500">{error.message}</p>}

            <input
              className="btn w-full btn-primary text-white"
              type="submit"
              value="Login"
            />
          </form>

          <p className="text-center mt-2">
            Don't have an account?
            <Link to="/register" className="text-accent">
              {" "}
              Create New Account
            </Link>
          </p>

          <div className="divider">OR</div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
