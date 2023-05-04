import React from "react";

function QuizResult(props) {
  return (
    <>
      <div className="show-score">
        Task Completed :{props.score}
        <br />
        Total Task :{props.totalScore}
      </div>
      <button id="next-button" onClick={props.tryAgain}>
        Try Again
      </button>
    </>
  );
}

export default QuizResult;
