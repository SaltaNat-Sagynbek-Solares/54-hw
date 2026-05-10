import './App.css'
import Board from "./components/Board.tsx";
import { useState } from "react";


interface Square {
  id: string;
  hasItem: boolean;
  clicked: boolean;
}

  const createBoard = () : Square[] => {
    const randomIndex = Math.floor(Math.random() * 36);
    const board = Array.from({length: 36}, (_element, index) => ({
      id: `${index}`,
      hasItem: false,
      clicked: false,
    }));

    board[randomIndex].hasItem = true;
    return board;
  };

  const App = () => {

    const [squares, setSquares] = useState<Square[]>(createBoard);
    const [tries, setTries] = useState<number>(0);
    const [gameOver, setGameOver] = useState<boolean>(false);

    const handleClick = (id: string) =>{
      const clickedSquare = squares.find(square => square.id === id);
      setSquares(prev => prev.map(square =>
      square.id === id ? { ...square, clicked: true}: square
      ));
      setTries(prev => prev + 1);
      if( clickedSquare?.hasItem){
        setGameOver(true);
      }
    };

    const handleReset = () => {
      setSquares(createBoard());
      setTries(0);
      setGameOver(false);
    };

    return (
      <div className="container">
        <Board squares={squares} onSquareClick={handleClick}  gameOver={gameOver}/>
        <p>Tries: {tries}</p>
        {gameOver && <div>Found it in {tries} tries <p>restart the game </p></div>}
        <button className="btn-reset" onClick={handleReset}>Reset</button>
      </div>
    );

  };


export default App
