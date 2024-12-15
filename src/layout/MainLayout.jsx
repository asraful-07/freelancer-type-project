import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Toast Notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
