import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status={"happy"}>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>
        {numOfGuesses} {numOfGuesses > 1 ? "guesses" : "guess"}
      </strong>
      .
    </Banner>
  );
}

export default WonBanner;
