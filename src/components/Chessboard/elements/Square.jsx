import PropTypes from "prop-types";

const Square = ({ color }) => {
  return <div className={`box-border h-16 w-16 bg-${color}-500`}>{color}</div>;
};

Square.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Square;
