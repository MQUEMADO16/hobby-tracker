import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Header />
      <main className="flex-1 p-4 overflow-auto">
        {/* Main content goes here */}
      </main>
    </div>
  );
} 

export default MainLayout;