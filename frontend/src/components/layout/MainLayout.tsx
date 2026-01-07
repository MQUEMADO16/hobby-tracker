import React from "react";
import Sidebar from "./Sidebar";

const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-4 overflow-auto">
        {/* Main content goes here */}
      </main>
    </div>
  );
} 

export default MainLayout;