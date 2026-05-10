import SingleSquare  from "./SingleSquare.tsx";
import "./Board.css"

interface  Square{
  id: string;
  hasItem: boolean;
  clicked: boolean;
}

interface BoardProps {
  squares: Square [];
  onSquareClick: (id: string) => void;
  gameOver: boolean;
}

const Board = ({ squares, onSquareClick, gameOver} : BoardProps) => {

  return (
    <div className="board">
      {squares.map(square => (
        <SingleSquare key={square.id}
          id={square.id}
          hasItem={square.hasItem}
          clicked={square.clicked}
          onClick={() => !square.clicked && !gameOver && onSquareClick(square.id)}
        />
      ))}
    </div>
  );
  };

export default Board;