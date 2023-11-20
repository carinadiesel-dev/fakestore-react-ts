import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../Navigation";

export default function Layout() {
  return (
    <>
      <NavBar />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
}
