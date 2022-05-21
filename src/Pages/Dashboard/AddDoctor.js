import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const [loading, setLoading] = useState(false);
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

  // ad0433ded1d1e3a975fb04874b910948
  const imgbbKey = "ad0433ded1d1e3a975fb04874b910948";

  const onSubmit = async (data) => {
    setLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    await fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          console.log(result.data.url);
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            category: data.category,
            img,
          };
          // Add Doctor To Database
          fetch(`https://caring-doctors-portal.herokuapp.com/add-doctor`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                setLoading(false);
                toast.success("Doctor Added Successfully");
              }
            });
          reset();
        }
      });
  };

  if (loading) {
    return <Loading />;
  }

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

            {/* Image */}
            <div className="form-control my-6">
              <label className="label">
                <span className="label-text">Upload Image</span>
              </label>
              <input
                type="file"
                className="cursor pointer w-full"
                {...register("image")}
              />
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
