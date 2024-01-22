import Square from "./elements/Square";

const Chessboard = () => {
  const numberSquares = 64;
  return (
    <div className="flex justify-center">
      <h1>Chessboard</h1>
      <div className="grid grid-cols-8">
        {Array.from({ length: numberSquares }).map((_, index) => (
          <Square key={index} color={"indigo"} />
        ))}
      </div>
    </div>
  );
};

export default Chessboard;
