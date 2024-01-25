import Row from "./Row";

const Board = () => {
  const rows = [8, 7, 6, 5, 4, 3, 2, 1];
  const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const setColor = (row, col) => {
    if (col % 2 === 0) {
      if (row % 2 === 0) {
        return "bg-black";
      } else {
        return "bg-white";
      }
    } else {
      if (row % 2 === 0) {
        return "bg-white";
      } else {
        return "bg-black";
      }
    }
  };

  return (
    <>
      <div className="grid gap-1 grid-cols-9">
        <div className="grid gap-1 grid-rows-8">
          {rows.map((row) => {
            return (
              <div
                key={row}
                className="flex justify-end items-center w-20 h-20 text-2xl"
              >
                {row}
              </div>
            );
          })}
          <div className="w-full h-20"></div>
        </div>
        <div className="grid gap-1 w-full h-full col-span-8">
          {rows.map((row) => {
            return <Row key={row} cols={cols} row={row} setColor={setColor} />;
          })}
          <div className="grid gap-1 grid-cols-8">
            {cols.map((col) => {
              return (
                <div key={col} className="text-center w-20 h-20 text-2xl">
                  {col}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
