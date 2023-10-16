import React from "react";
import { useState } from "react";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  function handleClick(e, exemple) {
    if (lock) {
      return null;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="src/assets/circle.png" alt="O" />`;
      data[exemple] = "o";
      setCount(count + 1);
    } else {
      e.target.innerHTML = `<img src="src/assets/cross.png" alt="X" />`;
      data[exemple] = "x";
      setCount(count + 1);
    }
    {
      checkWin(data);
    }
  }

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data);
    }
  };

  const won = () => {
    setLock(true);
    setTimeout(() => {alert("Won !!!!")}, 500)
  };

  return (
    <>
      <h1 className="title">
        Tic Tac Toe <span>Wild</span>
      </h1>
      <div className="container">
        <div className="board">
          <div className="row">
            <div className="boxes" onClick={(e) => handleClick(e, 0)}></div>
            <div className="boxes" onClick={(e) => handleClick(e, 1)}></div>
            <div className="boxes" onClick={(e) => handleClick(e, 2)}></div>
          </div>
          <div className="row">
            <div className="boxes" onClick={(e) => handleClick(e, 3)}></div>
            <div className="boxes" onClick={(e) => handleClick(e, 4)}></div>
            <div className="boxes" onClick={(e) => handleClick(e, 5)}></div>
          </div>
          <div className="row">
            <div className="boxes" onClick={(e) => handleClick(e, 6)}></div>
            <div className="boxes" onClick={(e) => handleClick(e, 7)}></div>
            <div className="boxes" onClick={(e) => handleClick(e, 8)}></div>
          </div>
          <button>Reset</button>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
