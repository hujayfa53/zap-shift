import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { signinFunc } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    // console.log(data);
    signinFunc(data.email, data.password)
      .then((result) => {
        console.log(result);
        navigate(location?.state || '/')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl bg-sky-500 ">
        <h3 className="text-3xl text-center">Welcome Back</h3>
        <p className="text-center">Login with ZapShift</p>
        <div className="card-body">
          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">errors is happen</p>
              )}
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                className="input"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">error happen</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">6 or more </p>
              )}

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p>
              new our website?{" "}
              <Link state={location.state} className="text-red-400" to={"/register"}>
                Register
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
