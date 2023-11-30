import "../index.scss";

const Game = ({ question, handleClickAnswer, step, questions }) => {
  const precentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${10 + precentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.question}</h1>
      <h2>{question.title}</h2>
      <ul>
        {question.variants.map((text, index) => (
          <li key={text} onClick={() => handleClickAnswer(index)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Game;
