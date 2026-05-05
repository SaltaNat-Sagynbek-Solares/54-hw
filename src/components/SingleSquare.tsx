import type { MouseEventHandler } from "react";
import './SingleSquare.css'

interface  Square{
  id: string;
  hasItem: boolean;
  clicked: boolean;
  onClick : MouseEventHandler;
}

const SingleSquare = ({ hasItem, clicked, onClick}: Square) => {
  return (
    <div className={clicked ? "square clicked" : "square"}
    onClick={!clicked ? onClick : undefined}>
      {clicked && hasItem && <span>O</span>}
    </div>
  );
};

export default SingleSquare;