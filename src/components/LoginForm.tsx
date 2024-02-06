"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginSchema = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    console.log(data);

    const signInData = await signIn("credentials", {
      email: data?.email,
      password: data?.password,
      redirect: false,
    });

    if (signInData?.error) {
      console.log(signInData.error);
      alert("Invalid email or password. Please try again.");
    } else {
      router.refresh();
      router.push("/dashboard");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="grid place-items-center h-screen bg-gradient-to-tr from-orange-500 to-pink-500">
      <div className="bg-white px-5 md:px-10 py-20 shadow-lg rounded-3xl md:w-[450px]">
        <h1 className="text-5xl text-gray-700 font-semibold mb-4">Login</h1>
        <p className="font-medium text-md text-gray-500 my-4">
          Welcome back! Please enter your details.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="text-gray-700 text-md font-medium mb-2">
              Email
            </label>
            <input
              className="border-2 rounded w-full py-2 px-3 mt-1"
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="mb-8 relative">
            <label className="text-gray-700 text-md font-medium mb-2">
              Password
            </label>
            <div className="relative mt-1">
              <input
                className="border-2 rounded w-full py-2 px-3 pr-10"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility}
              />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>

          <button
            className="w-full bg-black text-white text-lg font-semibold py-2 px-4 rounded-lg uppercase hover:opacity-75 active:scale-95 active:duration-75 transition-all shadow-lg"
            type="submit"
          >
            Login
          </button>

          <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>

          <button
            className="w-full border py-3 px-6 rounded-full flex justify-center items-center gap-3 active:scale-95 active:duration-75 transition-all hover:opacity-75"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            <Image src="/google.svg" width={24} height={24} alt="Google Logo" />
            Continue with Google
          </button>

          <p className="text-center text-sm font-medium text-gray-600 mt-8">
            Don&apos;t have an account?&nbsp;
            <Link className="text-orange-500 hover:underline" href="/signup">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
