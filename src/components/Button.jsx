import image from "../assets/pngegg (1).png";
import { NavLink } from "react-router-dom";

export default function Button({ label, path }) {
  return (
    <NavLink to={path}>
      <button className="bg-gray-600 text-white py-2 px-4 rounded-md mb-2">
        {label}
      </button>
    </NavLink>
  );
}
