import React from "react";
import { useState } from "react";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  function handleClick(e) {
    // if (lock){
    //     return 0;
    // }
    if (count % 2 === 0) {
        e.target.innerHTML = `<img src="src/assets/circle.png" alt=" O " />`
    setCount(count + 1);
    }

    else {e.target.innerHTML = `<img src="src/assets/cross.png" alt="X" />`
    setCount(count + 1);
    }
    }
  

  return (
    <>
      <h1 className="title">
        Tic Tac Toe <span>Wild</span>
      </h1>
      <div className="container">
        <div className="board">
          <div className="row">
            <div className="boxes" onClick={handleClick}></div>
            <div className="boxes" onClick={handleClick}></div>
            <div className="boxes" onClick={handleClick}></div>
          </div>
          <div className="row">
            <div className="boxes" onClick={handleClick}></div>
            <div className="boxes" onClick={handleClick}></div>
            <div className="boxes" onClick={handleClick}></div>
          </div>
          <div className="row">
            <div className="boxes" onClick={handleClick}></div>
            <div className="boxes" onClick={handleClick}></div>
            <div className="boxes" onClick={handleClick}></div>
          </div>
          <button>Reset</button>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
