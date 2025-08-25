import Footer from "@/Pages/Home/Footer";
import Navbar from "@/Pages/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col min-h-screen bg-green-50">
        <Navbar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default AppLayout;
