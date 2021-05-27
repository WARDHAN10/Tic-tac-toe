import React, { useState } from "react";
import "./styles.css";
import Game from "./Game";
import Comp from "./Comp";

const Dashboard = (props) => {
  const [start, setStart] = useState(false);
  const [Mscreen, setMscreen] = useState(true);
  const [join, setjoin] = useState(false);
  const [Choose, setChoose] = useState(false);
  const [comp, setComp] = useState(false);
  const Dash = () => {
    return (
      <div className="container main">
        <div className="col-6">
          <button
            className="btn btn-primary"
            onClick={() => {
              setChoose(true);
              setMscreen(false);
            }}
          >
            START
          </button>
        </div>
        <div className="col-6">
          {" "}
          <button
            className="btn btn-danger"
            onClick={() => {
              setStart(false);
              setMscreen(false);
              setjoin(true);
            }}
          >
            JOIN
          </button>
        </div>
      </div>
    );
  };
  const Join = () => {
    return (
      <div className="container inputMain">
        <input type="text" placeholder="Enter Match ID" />
        <br />
        <button
          className="btn btn-warning"
          onClick={() => {
            setjoin(false);
            setMscreen(true);
          }}
        >
          Back
        </button>
      </div>
    );
  };

  const Choice = () => {
    return (
      <div className="container choiceMain">
        <div className="col-6">
          <button
            className="btn btn-success"
            onClick={() => {
              setStart(true);
              setMscreen(false);
              setChoose(false);
            }}
          >
            Player1 vs Player2
          </button>
        </div>
        <div className="col-6">
          {" "}
          <button
            className="btn btn-success"
            onClick={() => {
              setComp(true);
              setMscreen(false);
              setChoose(false);
            }}
          >
            Player1 vs Comp
          </button>
        </div>
      </div>
    );
  };
  return (
    <div>
      {" "}
      {Mscreen && <Dash />}
      {start && <Game />}
      {join && <Join />}
      {Choose && <Choice />}
      {comp && <Comp />}
    </div>
  );
};

export default Dashboard;
