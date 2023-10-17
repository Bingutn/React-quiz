import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { index, answer, numQuestions, next, finish } = useQuiz();

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => next()}>
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => finish()}>
        Finish
      </button>
    );
}

export default NextButton;
