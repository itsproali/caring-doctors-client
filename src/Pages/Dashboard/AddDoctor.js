import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const [categories, setCategories] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  fetch("https://caring-doctors-portal.herokuapp.com/categories")
    .then((res) => res.json())
    .then((data) => setCategories(data));
  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="flex min-h-screen items-center justify-center my-4">
      <div className="card w-full sm:w-96 bg-base-100 shadow-xl border">
        <div className="card-body">
          <h2 className="text-center text-3xl font-semibold">Add New Doctor</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            {/* Name */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input border border-neutral focus:outline-none focus:border-accent w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter a name",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            {/* Email */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email address"
                className="input border border-neutral focus:outline-none focus:border-accent w-full"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please provide an email",
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

            {/* Category */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                className="select border-neutral focus:outline-none focus:border-accent w-full"
                {...register("category")}
              >
                {categories.map((category) => (
                  <option key={category._id} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="my-6">
              <label className="label">
                <span className="label-text">Select Image</span>
              </label>
              <input type="file" className="" {...register("email")} />
            </div>

            <input
              className="btn w-full btn-primary text-white"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
