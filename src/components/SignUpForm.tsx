"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

type RegisterSchema = z.infer<typeof registerSchema>;

const SignUpForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    console.log(data);

    const response = await fetch("api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data?.username,
        email: data?.email,
        password: data?.password,
      }),
    });

    if (response.ok) {
      router.push("/login");
    } else {
      console.error("Registration failed.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-slate-200 p-10 rounded-md shadow-lg">
        <h1 className="text-2xl text-gray-700 font-bold mb-4 text-center">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="text-gray-700 text-md font-medium mb-2">
              Username
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              id="username"
              placeholder="johndoe"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <p className="text-md text-red-500 mt-1">
                {errors.username?.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="text-gray-700 text-md font-medium mb-2">
              Email
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              type="email"
              id="email"
              placeholder="mail@example.com"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-md text-red-500 mt-1">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="mb-8">
            <label className=" text-gray-700 text-md font-medium mb-2">
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-md text-red-500 mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>

          <button
            className="w-full bg-black text-white py-2 px-4 rounded hover:opacity-75"
            type="submit"
          >
            Sign Up
          </button>

          <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>

          <button
            className="w-full bg-black text-white py-2 px-4 rounded hover:opacity-75"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            Sign up with Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?&nbsp;
            <Link className="text-blue-500 hover:underline" href="/login">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
