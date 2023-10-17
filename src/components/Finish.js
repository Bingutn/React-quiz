import { useQuiz } from "../contexts/QuizContext";

function Finish() {
  const { points, highscore, maxPoints, restart } = useQuiz();
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "💪";
  if (percentage >= 50 && percentage < 80) emoji = "😁";
  if (percentage >= 0 && percentage < 50) emoji = "😓";
  if (percentage === 0) emoji = "😭";

  function handleRestart() {
    restart();
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span>Your scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button className="btn btn-ui" onClick={handleRestart}>
        Restart quiz
      </button>
    </>
  );
}

export default Finish;
