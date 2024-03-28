import { Outlet } from "react-router-dom";
import { Navbar } from "../../Components";

export function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
