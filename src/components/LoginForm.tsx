"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

type LoginSchema = z.infer<typeof loginSchema>;

const providers = [
  {
    name: "google",
    color: "white",
    bgColor: "bg-white",
    icon: "/google.svg",
    title: "Sign in with Google",
  },
  {
    name: "github",
    color: "white",
    bgColor: "bg-black",
    icon: "/github.svg",
    title: "Sign in with Github",
  },
  {
    name: "discord",
    color: "white",
    bgColor: "bg-[#5865F2]",
    icon: "/discord.svg",
    title: "Sign in with Discord",
  },
];

const LoginForm = () => {
  const router = useRouter();

  const [authError, setAuthError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    console.log(data);

    setLoading(true); // Start loading

    const signInData = await signIn("credentials", {
      email: data?.email,
      password: data?.password,
      redirect: false,
    });

    setLoading(false); // End loading

    if (signInData?.error) {
      console.log(signInData.error);
      setAuthError("Invalid email or password. Please try again.");
    } else {
      router.refresh();
      router.push("/dashboard/projects");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="grid grid-cols-1 min-h-screen place-items-center bg-[#242323] md:grid-cols-2">
      <div className="absolute left-3 top-4 sm:left-6 sm:top-6">
        <Link href="/" className="group flex items-center gap-2 sm:gap-4">
          <FontAwesomeIcon icon={faArrowLeft} color="white" />
          <h1 className="text-white">Home</h1>
        </Link>
      </div>

      <div className="col-span-1">
        <div className="text-white w-[360px] md:w-[450px] max-w-md">
          <h1 className="text-5xl font-semibold mb-4">Login</h1>
          <p className="font-medium text-md text-gray-400 my-4">
            Welcome back! Please enter your details.
          </p>
          {authError && (
            <div className="bg-error p-3 rounded mb-2">
              <p className="text-sm">{authError}</p>
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="text-gray-400 text-md font-medium mb-2">
                Email
              </label>
              <label
                className={`input input-bordered input-primary ${
                  errors.email && "input-error"
                } w-full bg-transparent flex items-center gap-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  className="grow"
                  type="text"
                  id="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </label>

              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="mb-8 relative">
              <label className="text-gray-400 text-md font-medium mb-2">
                Password
              </label>
              <div className="relative mt-1">
                <label
                  className={`input input-bordered input-primary ${
                    errors.password && "input-error"
                  } w-full bg-transparent flex items-center gap-2`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    className="grow"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                </label>
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-400"
                  onClick={togglePasswordVisibility}
                />
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <button className="btn btn-primary w-full" type="submit">
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-gray-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-gray-400">
              or
            </div>

            <div className="flex justify-center gap-4 my-5">
              {providers.map(({ name, bgColor, icon, title }, index) => (
                <button
                  key={index}
                  className={`w-16 p-4 rounded-xl flex justify-center items-center active:scale-95 active:duration-75 transition-all hover:opacity-75 ${bgColor}`}
                  onClick={() =>
                    signIn(name, { callbackUrl: "/dashboard/projects" })
                  }
                  title={title}
                  type="button"
                >
                  <Image
                    src={icon}
                    width={24}
                    height={24}
                    alt={`${name} Logo`}
                  />
                </button>
              ))}
            </div>

            <p className="text-center text-sm font-medium mt-8">
              Don&apos;t have an account?&nbsp;
              <Link className="text-primary hover:underline" href="/signup">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="col-span-1 hidden md:flex">
        <img src="/teamwork.svg" alt="teamwork image" />
      </div>
    </div>
  );
};

export default LoginForm;
