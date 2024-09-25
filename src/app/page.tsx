import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center md:pt-24 overflow-auto bg-[#1d1d1d] text-white">
      <Navbar />
      <div className="w-full max-w-screen-xl px-2.5 md:px-20 pb-28 pt-28 flex flex-col items-center justify-center text-center sm:pt-40">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl">
          Connect, Collaborate, and Create
          <span className="text-blue-700"> Masterpieces</span>
        </h1>

        <p className="mt-5 max-w-prose text-zinc-400 sm:text-lg">
          Empowering programmers to connect, collaborate, and unleash their
          creativity in a vibrant coding community.
        </p>

        <div className="mt-6 flex items-center gap-8">
          <Link
            className="inline-flex items-center justify-center rounded-full text-sm font-medium border border-black bg-primary px-8 h-11 text-white transition-all hover:opacity-75"
            href="/signup"
          >
            Get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-5 w-5"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        <div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-100/5 p-2 ring-1 ring-inset ring-white lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src={"/preview.png"}
                  alt="Website Preview"
                  width={1364}
                  height={866}
                  quality={100}
                  className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
        <Team />
      </div>
      <Footer />
    </main>
  );
}
