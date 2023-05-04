import React, { useState } from "react";
import { QuizData } from "../data";
import QuizResult from "./QuizResult";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
const scor = () => {
  if (score === QuizData.length-1) {
    alert("not kill")
  } else {
    alert("lill");
  }
  };
  window.location.reload();

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
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
            marginRight:'200px',
            color: "black",
            boxShadow: " 0 2px 5px ",
            fontFamily: "Segoe Script",
            fontWeight: '700px',
            
            backgroundColor:'white'
          }}
        >
          There are five houses in a row, each painted a different color. The
          houses are next to each other, and their owners are from different
          countries, have different pets, and drink different beverages. Can you
          figure out the color of each house, the country each owner is from,
          the pet each owner has, and the beverage each owner drinks, using the
          following clues?
        </h2>
        <h1></h1>
      </div>
      <div className="boxx">
        <div className="clue">
          <h1>Some Clues : </h1>
          <ul>
            <li>The Norwegian lives in the first house</li>
            <li>The person who owns a bird lives in the yellow house</li>
            <li>The person who drinks coffee lives in the green house.</li>
            <li>The person who owns a dog lives in the red house.</li>
            <li>The person who drinks tea lives in the second house</li>
            <li>
              The person who owns a cat lives next to the person who drinks
              water.
            </li>
            <li>The person who drinks juice owns a snail</li>
            <li>The Japanese person owns a fish.</li>
            <li>
              The person who owns a horse lives next to the person who drinks
              coffee
            </li>
          </ul>
        </div>
        <div className="cont">
          {showResult ? (
            <QuizResult
              score={score}
              totalScore={QuizData.length}
              tryAgain={resetAll}
            />
          ) : (
            <>
              <div className="question">
                <span id="question-number">{currentQuestion + 1}. </span>
                <span id="question-txt">
                  {QuizData[currentQuestion].question}
                </span>
              </div>
              <div className="option-container">
                {QuizData[currentQuestion].options.map((option, i) => {
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
    </div>
  );
}

export default Quiz;
