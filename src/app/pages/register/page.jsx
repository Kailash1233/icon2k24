"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const RegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    college: yup.string().required("College name is required"),
    dept: yup.string().required("Department is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    // Replace this with your form submission logic
    console.log(data);
    // Update state to show the "Thanks for submitting" message
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 shadow-md rounded-md">
      {!submitted ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register("name")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="college" className="block mb-1">
              College
            </label>
            <input
              type="text"
              id="college"
              placeholder="Enter your college name"
              {...register("college")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            {errors.college && (
              <p className="text-red-500">{errors.college.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="dept" className="block mb-1">
              Department
            </label>
            <input
              type="text"
              id="dept"
              placeholder="Enter your Dept"
              {...register("dept")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            {errors.dept && (
              <p className="text-red-500">{errors.dept.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Thanks for submitting!</h2>
          {/* You can add additional content here */}
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
