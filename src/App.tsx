import './App.css'
import Board from "./components/Board.tsx";
import { useEffect, useState } from "react";


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

    const [squares, setSquares] = useState<Square[]>(()=>{
      const saved = localStorage.getItem('squares');
      return saved ? JSON.parse(saved) : createBoard();
    });

    const [tries, setTries] = useState<number>(() =>{
      const saved = localStorage.getItem('tries');
      return saved ? JSON.parse(saved) : 0;
    });

    useEffect(() => {
      localStorage.setItem('squares', JSON.stringify(squares));
      localStorage.setItem('tries', JSON.stringify(tries));
    }, [squares, tries]);

    const handleClick = (id: string) =>{
      setSquares(prev => prev.map(square =>
      square.id === id ? { ...square, clicked: true}: square
      ));
      setTries(prev => prev + 1);
    }

    const handleReset = () => {
      setSquares(createBoard());
      setTries(0);
      localStorage.removeItem('squares');
      localStorage.removeItem('tries');
    };

    return (
      <div className="container">
        <Board squares={squares} onSquareClick={handleClick} />
        <p>Tries: {tries}</p>
        <button className="btn-reset" onClick={handleReset}>Reset</button>
      </div>
    );

  };


export default App
