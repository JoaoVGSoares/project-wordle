import React from "react";

function GuessList({ guesses }) {
  return (
    <div>
      <div className="guess-results">
        {guesses.map((guess, index) => (
          <p key={index} className="guess">
            {guess}
          </p>
        ))}
      </div>
    </div>
  );
}

export default GuessList;
