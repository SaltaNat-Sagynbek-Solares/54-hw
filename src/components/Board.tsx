import SingleSquare  from "./SingleSquare.tsx";

interface  Square{
  id: string;
  hasItem: boolean;
  clicked: boolean;
}

interface BoardProps {
  squares: Square [];
  onSquareClick: (id: string) => void;
}

const Board = ({ squares, onSquareClick} : BoardProps) => {

  return (
    <div className="board">
      {squares.map(square => (
        <SingleSquare key={square.id}
          id={square.id}
          hasItem={square.hasItem}
          clicked={square.clicked}
          onClick={() => onSquareClick(square.id)}
        />
      ))}
    </div>
  );
  };

export default Board;