import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Root() {
  return (
    <div className="mx-auto max-w-7xl regular_font">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
