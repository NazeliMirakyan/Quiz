import "../index.scss";

const Result = ({ correct, questions }) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt=''/>
      <h2>
        You gave {correct} correct answers out of {questions.length} questions.
      </h2>
      <a href="/">
        <button>Try again</button>
      </a>
    </div>
  );
};
export default Result;
