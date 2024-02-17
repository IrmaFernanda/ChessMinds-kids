import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function Button({ label, path }) {
  return (
    <NavLink to={path}>
      <button className="bg-gray-800 text-[35px] text-white p-3 rounded-md">
        {label}
      </button>
    </NavLink>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};