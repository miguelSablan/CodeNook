import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <Navbar />
      <div className = "w-full max-w-screen-xl px-2.5 md:px-20 pb-28 pt-28 flex flex-col items-center justify-center text-center sm:pt-40 ">
            
      <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl">
        Welcome to&nbsp; 
        <span className="text-blue-700">CodeNook! </span>
        your new portal to the&nbsp;
        <span className="text-blue-700">world of tech!</span>
        {/* <h2 className = "text-2xl md:text-3xl lg:text-4xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus qui pariatur, amet possimus cumque labore hic repellat aliquam explicabo! Repudiandae dolore consectetur voluptatem ut magnam eos sequi deserunt facilis cumque.</h2> */}

      </h1>

      <p className = "mt-5 max-w-prose text-zinc-700 sm:text-lg">Find your new opportunity, team, career, and more!
      </p>
      <div className= "mt-6 flex items-center gap-8">
      <Link
          className="rounded-full border border-black bg-black px-4 py-1.5 text-xl text-white transition-all hover:opacity-75"
          href="/signup"
        >
          Join now!
        </Link>
      </div>
      {/* https://img.freepik.com/premium-vector/abstract-technology-tree_732854-8.jpg?w=1380 */}

      <div className = "mx-auto max-w-6xl px-6 lg:px-8">
        
      </div>

      </div>
      
    </main>
  );
}
