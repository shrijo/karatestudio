import { Outlet } from "react-router";
import Header from "../components/Header/Header";

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
