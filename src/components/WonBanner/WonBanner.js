import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfGuesses, handleRestart }) {
  return (
    <Banner status={"happy"} action={handleRestart} actionText={"Restart game"}>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>
        {numOfGuesses} {numOfGuesses > 1 ? "guesses" : "guess"}
      </strong>
      .
    </Banner>
  );
}

export default WonBanner;
