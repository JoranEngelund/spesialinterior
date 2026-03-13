import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
