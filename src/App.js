import { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const options = ["rock", "paper", "scissors"];
  const [userSelection, setUserSelection] = useState("rock");
  const [botSelection, setBotSelection] = useState("rock");
  const [userScore, setUserScore] = useState(0);
  const [botScore, setBotScore] = useState(0);

  function handleClick(userChoice) {
    const botChoice = options[Math.floor(Math.random() * options.length)];
    setBotSelection(botChoice);
    setUserSelection(userChoice);
    const choiceStr = userChoice + botChoice;
    if (
      choiceStr === "rockscissors" ||
      choiceStr === "paperrock" ||
      choiceStr === "scissorspaper"
    ) {
      setUserScore(userScore + 1);
    } else if (
      choiceStr === "rockpaper" ||
      choiceStr === "paperscissors" ||
      choiceStr === "scissorsrock"
    ) {
      setBotScore(botScore + 1);
    }
  }

  return (
    <div className="App">
      <h1>Rock Paper Scissors!</h1>
      <div className="images">
        <img src={`../images/${userSelection}.png`} alt="img1" id="img1" />
        <img src={`../images/${botSelection}.png`} alt="img2" id="img2" />
      </div>
      <div className="score">
        <h2 id="score1">Player score: {userScore}</h2>
        <h2 id="score2">Computer score: {botScore}</h2>
      </div>
      <div className="buttons">
        <button
          id="button1"
          className="btn btn-primary btn-lg"
          onClick={() => handleClick("rock")}
        >
          Rock
        </button>
        <button
          id="button2"
          className="btn btn-primary btn-lg"
          onClick={() => handleClick("paper")}
        >
          Paper
        </button>
        <button
          id="button3"
          className="btn btn-primary btn-lg"
          onClick={() => handleClick("scissors")}
        >
          Scissors
        </button>
      </div>
      <div>
        <button
          id="reset"
          className="btn btn-danger"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
