import React, { useState } from "react";
import { PuzzData } from "../data";
import QuizResult from "./QuizResult";
function Puzz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const scor = () => {
    if (score === PuzzData.length - 1) {
      alert("not kill");
    } else {
      alert("lill");
    }
    };

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < PuzzData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (clickedOption === PuzzData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };
  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };
  return (
    <div>
      <div className="main">
        <h2
          style={{
            textAlign: "center",
            borderBottom: "1px solid rgba(21,21,21,0.5)",
            width: "500%",
            fontSize: "1.5vmax",
            margin: "1vmax auto",
            marginRight: "200px",
            color: "black",
            boxShadow: " 0 2px 5px ",
            fontFamily: "Segoe Script",
            fontWeight: "700px",
         marginTop: '-29px',
            backgroundColor: "white",
          }}
        >
          You have to solve critical aptitude thinking questions to beat the
          monster.
        </h2>
        <h1></h1>
      </div>

      <div className="conti">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={PuzzData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">
                {PuzzData[currentQuestion].question}
              </span>
              <img src={PuzzData[currentQuestion].img} />
            </div>
            <div className="option-container">
              {PuzzData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    className={`option-btn ${
                      clickedOption == i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Puzz;
