import PropTypes from "prop-types";

const Row = ({ cols, row, setColor }) => {
  return (
    <div className="grid gap-1 grid-cols-8" key={row}>
      {cols.map((col, i) => {
        return (
          <div className={`${setColor(row, i + 1)} w-20 h-20`} key={col}></div>
        );
      })}
    </div>
  );
};

Row.propTypes = {
  cols: PropTypes.arrayOf(PropTypes.string).isRequired,
  row: PropTypes.number.isRequired,
  setColor: PropTypes.func.isRequired,
};

export default Row;
