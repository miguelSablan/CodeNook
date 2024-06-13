import Sidebar from "@/components/Sidebar";

export default function User({ params }: { params: { id: string } }) {
  return (
    <div className="h-screen flex md:flex-row">
      <Sidebar />
      <div className="bg-[#242323] flex flex-col flex-1 p-4 pt-20 md:p-7 text-white">
        <h1>User {params.id} profile</h1>
      </div>
    </div>
  );
}
