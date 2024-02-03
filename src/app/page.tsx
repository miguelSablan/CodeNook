import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <Navbar />
      <h1 className="text-4xl">Landing Page</h1>
    </main>
  );
}
