import { useQuiz } from "../contexts/QuizContext";

function Options({ question }) {
  const { answer, choice } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => choice(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
