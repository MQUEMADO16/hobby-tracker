import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
const MainLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
      <Header />
      
      <main className="flex-1 p-4 overflow-auto">
        {/* Main content goes here */}
      </main>
      </div>
    </div>
  );
} 

export default MainLayout;