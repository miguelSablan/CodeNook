"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginSchema = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const router = useRouter();

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
    } else {
      router.refresh();
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-slate-200 p-10 rounded-md shadow-lg">
        <h1 className="text-2xl text-gray-700 font-bold mb-4 text-center">
          Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
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
            Login
          </button>

          <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>

          <button
            className="w-full bg-black text-white py-2 px-4 rounded hover:opacity-75"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          >
            Sign in with Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don&apos;t have an account?&nbsp;
            <Link className="text-blue-500 hover:underline" href="/signup">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
