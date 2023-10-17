import React from "react";
import { useState, useRef } from "react";
// import backArrow from "src/assets/arrow-rotate-left-solid.svg"

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  function checkEquality() {
    if (dataLength === 9 && !checkWin(data)) {
      titleRef.current.innerHTML = `Mince égalité,<span> 'Reset' pour rejouer!</span>`;
    }
  }

  const titleRef = useRef(null);
  const playerRef = useRef(null);

  let box1 = [null];
  let box2 = [null];
  let box3 = [null];
  let box4 = [null];
  let box5 = [null];
  let box6 = [null];
  let box7 = [null];
  let box8 = [null];
  let box9 = [null];

  let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  function handleClick(e, exemple) {
    if (lock) {
      return null;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="src/assets/circle.png" alt="O" />`;
      data[exemple] = "o";
      setCount(count + 1);
      playerRef.current.innerHTML = ` Prochain joueur : X `;
    } else {
      e.target.innerHTML = `<img src="src/assets/cross.png" alt="X" />`;
      data[exemple] = "x";
      setCount(count + 1);
      playerRef.current.innerHTML = `Prochain joueur : O `;
    }
    checkWin(data);
    console.log(data)
    console.log(dataLength)
  }

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    }
  };

  const dataLength = data.reduce((acc, str) => acc + str.length, 0);

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = ` Tic Tac Toe <span>Wild</span>`;
    boxArray.map((e) => {
      e.current.innerHTML = "";
    });
  };
  const won = (winner) => {
    setLock(true);
    // setTimeout(() => {alert("Won !!!!")}, 500)
    if (winner === "x") {
      titleRef.current.innerHTML = `Victoire pour : <img src="src/assets/cross.png"/>`;
    } else if (winner === "o") {
      titleRef.current.innerHTML = `Victoire pour : <img src="src/assets/circle.png"/> `;
    }
  };
  
  return (
    <>
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe <span>Wild</span>
      </h1>
      {checkEquality()}
      <div className="container">
        <div className="board">
          <div className="row">
            <div
              className="boxes"
              ref={box1}
              onClick={(e) => handleClick(e, 0)}
            ></div>
            <div
              className="boxes"
              ref={box2}
              onClick={(e) => handleClick(e, 1)}
            ></div>
            <div
              className="boxes"
              ref={box3}
              onClick={(e) => handleClick(e, 2)}
            ></div>
          </div>
          <div className="row">
            <div
              className="boxes"
              ref={box4}
              onClick={(e) => handleClick(e, 3)}
            ></div>
            <div
              className="boxes"
              ref={box5}
              onClick={(e) => handleClick(e, 4)}
            ></div>
            <div
              className="boxes"
              ref={box6}
              onClick={(e) => handleClick(e, 5)}
            ></div>
          </div>
          <div className="row">
            <div
              className="boxes"
              ref={box7}
              onClick={(e) => handleClick(e, 6)}
            ></div>
            <div
              className="boxes"
              ref={box8}
              onClick={(e) => handleClick(e, 7)}
            ></div>
            <div
              className="boxes"
              ref={box9}
              onClick={(e) => handleClick(e, 8)}
            ></div>
          </div>
          <div className="nextPlayer" ref={playerRef}></div>
          <button
            onClick={() => {
              reset();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
