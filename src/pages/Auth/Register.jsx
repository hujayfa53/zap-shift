import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();


  const { registerFunc, updateUserProfile } = useAuth();
  const handleRegister = (data) => {
    // console.log("after regi", data);
    const profileImg = data.photo[0];
    registerFunc(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        const formData = new FormData();
        formData.append("image", profileImg);
        const image_Url = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_img_host
        }`;
        axios.post(image_Url, formData).then((res) => {
          console.log("after image", res.data.data.url);

          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then(() => {
              console.log("user profile update");
              navigate(location?.state || '/')
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card  w-full mx-auto max-w-sm shrink-0 shadow-2xl bg-[#CAEB66] text-black">
      <h3 className="text-3xl text-center ">Create your Account</h3>
      <p className="text-center ">Add with us</p>
      <div className="card-body">
        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input"
              placeholder="Your name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Name is required!</p>
            )}

            {/* photo image */}
            <label className="label">Photo</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input"
              placeholder="Your photo"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Photo is required!</p>
            )}

            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required!</p>
            )}

            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/,
              })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required!</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be at least 6 or more
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Password must be at least one Upercase ,lowerCase and special{" "}
              </p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p>
            already at ZapShift?{" "}
            <Link state={location.state} className="text-red-400" to={"/Login"}>
              Login
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default Register;
