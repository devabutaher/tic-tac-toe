import useTicTacToe from "../hooks/useTicTacToe";

const TicTacToe = () => {
  const { board, getStatusMessage, handleClick, resetGame } = useTicTacToe();

  return (
    <div className="flex flex-col items-center gap-10 py-20">
      <div className="flex items-center justify-center gap-10">
        <h1 className="text-4xl">{getStatusMessage()}</h1>
        <button
          onClick={() => resetGame()}
          className="px-4 py-2 text-3xl rounded cursor-pointer bg-slate-600"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-3 text-6xl border border-slate-500">
        {board.map((b, index) => {
          return (
            <button
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
              className="border-2 size-36 hover:bg-slate-700 border-slate-500"
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
