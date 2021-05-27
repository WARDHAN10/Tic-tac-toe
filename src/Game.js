import React, { useState } from "react";
import Dashboard from "./Dashboard";

import "./styles.css";
function Game(props) {
  const [Count, setCount] = useState(0);
  const [O, setO] = useState(0);
  const [W, setW] = useState(0);
  const [Disable, setDisable] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
    btn5: false,
    btn6: false,
    btn7: false,
    btn8: false,
    btn9: false,
  });
  const [Content, setContent] = useState({
    but1: "",
    but2: "",
    but3: "",
    but4: "",
    but5: "",
    but6: "",
    but7: "",
    but8: "",
    but9: "",
  });
  const [win, setWin] = useState("");
  const { btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9 } = Disable;
  const { but1, but2, but3, but4, but5, but6, but7, but8, but9 } = Content;

  const matchOver = () => {
    return (
      setWin(""),
      setCount(0),
      setDisable({
        ...Disable,
        btn1: false,
        btn2: false,
        btn3: false,
        btn4: false,
        btn5: false,
        btn6: false,
        btn7: false,
        btn8: false,
        btn9: false,
      }),
      setContent({
        ...Content,
        but1: "",
        but2: "",
        but3: "",
        but4: "",
        but5: "",
        but6: "",
        but7: "",
        but8: "",
        but9: "",
      })
    );
  };
  const Reset = () => {
    return (
      setW(0),
      setO(0),
      setWin(""),
      setCount(0),
      setDisable({
        ...Disable,
        btn1: false,
        btn2: false,
        btn3: false,
        btn4: false,
        btn5: false,
        btn6: false,
        btn7: false,
        btn8: false,
        btn9: false,
      }),
      setContent({
        ...Content,
        but1: "",
        but2: "",
        but3: "",
        but4: "",
        but5: "",
        but6: "",
        but7: "",
        but8: "",
        but9: "",
      })
    );
  };
  const Owin = () => {
    if (
      (but1 == "O" && but2 == "O" && but3 == "O") ||
      (but4 == "O" && but5 == "O" && but6 == "O") ||
      (but7 == "O" && but2 == "O" && but3 == "O") ||
      (but1 == "O" && but4 == "O" && but7 == "O") ||
      (but2 == "O" && but5 == "O" && but8 == "O") ||
      (but3 == "O" && but6 == "O" && but9 == "O") ||
      (but1 == "O" && but5 == "O" && but9 == "O") ||
      (but3 == "O" && but5 == "O" && but7 == "O")
    ) {
      setWin("O");
      setO(O + 1);
      return matchOver(), console.log("O wins");
    }
  };
  const Xwin = () => {
    if (
      (but1 == "X" && but2 == "X" && but3 == "X") ||
      (but4 == "X" && but5 == "X" && but6 == "X") ||
      (but7 == "X" && but2 == "X" && but3 == "X") ||
      (but1 == "X" && but4 == "X" && but7 == "X") ||
      (but2 == "X" && but5 == "X" && but8 == "X") ||
      (but3 == "X" && but6 == "X" && but9 == "X") ||
      (but1 == "X" && but5 == "X" && but9 == "X") ||
      (but3 == "X" && but5 == "X" && but7 == "X")
    ) {
      setWin("X");
      setW(W + 1);
      return matchOver(), console.log("X wins");
    }
  };

  const Draw = () => {
    if (Count == 9 && win == "") {
      return setWin("Draw");
    }
  };

  const Start = () => {
    return matchOver();
  };
  return (
    <>
      <div className="container">
        {win === "Draw" && (
          <button type="button" class="btn btn-dark btn-lg btn-block btn2">
            DRAW!!{" "}
          </button>
        )}
        <br />
        <button className="btn btn-light mx-1 my-2">W - {W}</button>
        <button className="btn btn-light mx-1 my-2">O - {O}</button>
        <div className="row">
          {Draw()}
          {Owin()} {Xwin()}{" "}
          <button
            disabled={btn1}
            onClick={() => {
              console.log("clicked btn 1");
              if (!btn1) {
                setCount(Count + 1);
              }
              if (Count == 0) {
                setContent({ ...Content, but1: "X" });
              } else if (Count == 1) {
                setContent({ ...Content, but1: "O" });
              } else if (Count != 0 && Count % 2 == 0) {
                setContent({ ...Content, but1: "X" });
              } else if (Count != 0 && Count % 2 != 0) {
                setContent({ ...Content, but1: "O" });
              }

              setDisable({ ...Disable, btn1: true });
            }}
            className="box"
            style={{
              borderRight: "4px grey solid",
              borderBottom: "4px grey solid",
            }}
          >
            {but1}
          </button>
          <button
            disabled={btn2}
            onClick={() => {
              console.log("clicked btn 2");
              if (!btn2) {
                setCount(Count + 1);
              }
              if (Count == 0) {
                setContent({ ...Content, but2: "X" });
              } else if (Count == 1) {
                setContent({ ...Content, but2: "O" });
              } else if (Count != 0 && Count % 2 == 0) {
                setContent({ ...Content, but2: "X" });
              } else if (Count != 0 && Count % 2 != 0) {
                setContent({ ...Content, but2: "O" });
              }

              setDisable({ ...Disable, btn2: true });
            }}
            className="box"
            style={{
              borderRight: "4px grey solid",
              borderBottom: "4px grey solid",
            }}
          >
            {but2}
          </button>
          <button
            disabled={btn3}
            onClick={() => {
              console.log("clicked btn 3");
              if (!btn3) {
                setCount(Count + 1);
              }
              if (Count == 0) {
                setContent({ ...Content, but3: "X" });
              } else if (Count == 1) {
                setContent({ ...Content, but3: "O" });
              } else if (Count != 0 && Count % 2 == 0) {
                console.log("this is the fuynctin", Count);
                setContent({ ...Content, but3: "X" });
              } else if (Count != 0 && Count % 2 != 0) {
                setContent({ ...Content, but3: "O" });
              }

              setDisable({ ...Disable, btn3: true });
            }}
            className="box"
            style={{
              borderBottom: "4px grey solid",
            }}
          >
            {but3}
          </button>
          <button
            disabled={btn4}
            onClick={() => {
              console.log("clicked btn 4");
              if (!btn4) {
                setCount(Count + 1);
              }
              if (Count == 0) {
                setContent({ ...Content, but4: "X" });
              } else if (Count == 1) {
                setContent({ ...Content, but4: "O" });
              } else if (Count != 0 && Count % 2 == 0) {
                setContent({ ...Content, but4: "X" });
              } else if (Count != 0 && Count % 2 != 0) {
                setContent({ ...Content, but4: "O" });
              }

              setDisable({ ...Disable, btn4: true });
            }}
            className="box"
            style={{
              borderRight: "4px grey solid",
              borderBottom: "4px grey solid",
            }}
          >
            {but4}
          </button>
          <button
            disabled={btn5}
            onClick={() => {
              console.log("clicked btn 5");
              if (!btn5) {
                setCount(Count + 1);
              }
              if (Count == 0) {
                setContent({ ...Content, but5: "X" });
              } else if (Count == 1) {
                setContent({ ...Content, but5: "O" });
              } else if (Count != 0 && Count % 2 == 0) {
                setContent({ ...Content, but5: "X" });
              } else if (Count != 0 && Count % 2 != 0) {
                setContent({ ...Content, but5: "O" });
              }

              setDisable({ ...Disable, btn5: true });
            }}
            className="box"
            style={{
              borderRight: "4px grey solid",
              borderBottom: "4px grey solid",
            }}
          >
            {but5}
          </button>
          <button
            disabled={btn6}
            onClick={() => {
              console.log("clicked btn 6");
              if (!btn6) {
                setCount(Count + 1);
              }
              if (Count == 0) {
                setContent({ ...Content, but6: "X" });
              } else if (Count == 1) {
                setContent({ ...Content, but6: "O" });
              } else if (Count != 0 && Count % 2 == 0) {
                setContent({ ...Content, but6: "X" });
              } else if (Count != 0 && Count % 2 != 0) {
                setContent({ ...Content, but6: "O" });
              }

              setDisable({ ...Disable, btn6: true });
            }}
            className="box"
            style={{ borderBottom: "4px grey solid" }}
          >
            {but6}
          </button>
          <button
            disabled={btn7}
            onClick={() => {
              console.log("clicked btn 7");
              if (!btn7) {
                setCount(Count + 1);
              }
              if (Count == 0) {
                setContent({ ...Content, but7: "X" });
              } else if (Count == 1) {
                setContent({ ...Content, but7: "O" });
              } else if (Count != 0 && Count % 2 == 0) {
                setContent({ ...Content, but7: "X" });
              } else if (Count != 0 && Count % 2 != 0) {
                setContent({ ...Content, but7: "O" });
              }

              setDisable({ ...Disable, btn7: true });
            }}
            className="box"
            style={{
              borderRight: "4px grey solid",
            }}
          >
            {but7}
          </button>
          <button
            disabled={btn8}
            onClick={() => {
              console.log("clicked btn 8");
              if (!btn8) {
                setCount(Count + 1);
              }
              if (Count == 0) {
                setContent({ ...Content, but8: "X" });
              } else if (Count == 1) {
                setContent({ ...Content, but8: "O" });
              } else if (Count != 0 && Count % 2 == 0) {
                setContent({ ...Content, but8: "X" });
              } else if (Count != 0 && Count % 2 != 0) {
                setContent({ ...Content, but8: "O" });
              }

              setDisable({ ...Disable, btn8: true });
            }}
            className="box"
            style={{
              borderRight: "4px grey solid",
            }}
          >
            {but8}
          </button>
          <button
            disabled={btn9}
            onClick={() => {
              console.log("clicked btn 9");
              if (!btn9) {
                setCount(Count + 1);
              }
              if (Count == 0) {
                setContent({ ...Content, but9: "X" });
              } else if (Count == 1) {
                setContent({ ...Content, but9: "O" });
              } else if (Count != 0 && Count % 2 == 0) {
                setContent({ ...Content, but9: "X" });
              } else if (Count != 0 && Count % 2 != 0) {
                setContent({ ...Content, but9: "O" });
              }

              setDisable({ ...Disable, btn9: true });
            }}
            className="box"
            style={{}}
          >
            {but9}
          </button>
        </div>
        <button className="btn btn-warning mx-1" onClick={Reset}>
          RESET
        </button>
        <button
          className="btn btn-danger mx-1"
          onClick={() => {
            window.close();
          }}
        >
          QUIT
        </button>
        {win === "Draw" && (
          <button
            type="button"
            onClick={Start}
            class="btn btn-success btn-lg btn-block btn2"
          >
            Start!!{" "}
          </button>
        )}
      </div>
    </>
  );
}

export default Game;
