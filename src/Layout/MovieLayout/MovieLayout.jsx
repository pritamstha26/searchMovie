import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function MovieLayout() {
  const location = useLocation();

  // Split pathname into parts for breadcrumb links
  const pathParts = location.pathname.split("/").filter(Boolean);
  const navigate = useNavigate();
  const urlPath = location.pathname.split("/");
  console.log(urlPath);
  return (
    <div>
      {/* {pathParts.map((part, index) => {
          const pathTo = "/" + pathParts.slice(0, index + 1).join("/");
          return (
            <span key={index}>
              <NavLink to={pathTo} className="text-blue-500 hover:underline">
                {part}
              </NavLink>
              {index < pathParts.length - 1 && " / "}
            </span>
          );
        })}  */}
      {/* Breadcrumb / Navbar */}
      <nav className="flex gap-2 py-2">
        {urlPath.map((val, index) => {
          const pathTo = "/" + urlPath.slice(0, index + 1).join("/");
          return (
            <span key={index}>
              <NavLink to={pathTo}>{val}</NavLink>

              {index < urlPath.length - 1 && " / "}
            </span>
          );
        })}
      </nav>

      {/* Child pages render here */}
      <Outlet />
    </div>
  );
}
