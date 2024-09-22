import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAuth from "../hooks/useAuth";

import { imageUpload } from "../api/utils/utils";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const image_url = await imageUpload(data.photoURL[0]);
    console.log(image_url);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "SignUp Successfull",
        showConfirmButton: false,
        timer: 1500,
      });
      updateUserProfile(data.name, image_url)
        .then(() => {
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="font-[sans-serif] backdrop-blur-xl shadow-lg  bg-gradient-to-r from-[#310534] via-[#46125a] to-[#411915] text-yellow-50">
  <div className="min-h-screen flex flex-col items-center justify-center py-6 ">
    <div className="grid md:grid-cols-2 items-center max-w-6xl w-full">
      <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
        <form className="space-y-4 " onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8 text-yellow-50">
            <h3 className=" text-3xl font-extrabold">Sign in</h3>
            <p className=" text-sm mt-4 leading-relaxed">
              Sign in to your account and explore a world of possibilities. Your journey begins here.
            </p>
          </div>

          <div className="form-control text-yellow-50">
            <label className="label">
              <span className="label-text text-yellow-50">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
            {errors.name && <span className="text-red-600">Name is required</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-yellow-50">Photo URL</span>
            </label>
            <input
              type="file"
              {...register("photoURL", { required: true })}
              placeholder="Photo URL"
              className="input input-bordered"
            />
            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-yellow-50">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
            {errors.email && <span className="text-red-600">Email is required</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-yellow-50">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              placeholder="Password"
              className="input input-bordered"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">Password must be less than 20 characters</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one uppercase, one lowercase, one number, and one special character.
              </p>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-6">
            <input className="btn bg-[#FF6F61] text-yellow-50" type="submit" value="Sign Up" />
          </div>
        </form>
      </div>

      <div className=" ">
        <img
          src="https://readymadeui.com/login-image.webp"
          className="  min-h-[650px]  mx-auto block object-cover"
          alt="Dining Experience"
        />
      </div>
    </div>
  </div>
</div>
  );
};

export default SignUp;
