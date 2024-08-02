import Sidebar from "@/components/Sidebar";
import React from "react";

const Applications = () => {
  return (
    <div className="h-screen flex md:flex-row">
      <Sidebar />
      <div className="bg-[#242323] flex flex-1 flex-col min-h-screen text-white">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">Applications</h1>
        </div>

        <div className="flex flex-col flex-1 p-6">
          {/* Tabs Section */}
          <div role="tablist" className="tabs tabs-bordered">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="My Listings"
              id="tab1"
              defaultChecked
            />

            <div role="tabpanel" className="tab-content p-10">
              <p>List of projects you have listed will appear here...</p>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="My Applications"
              id="tab1"
              defaultChecked
            />

            <div role="tabpanel" className="tab-content p-10">
              <p>List of projects you have applied for will appear here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
