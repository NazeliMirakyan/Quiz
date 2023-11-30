import { useState } from "react";
import Game from "./components/Game";
import Result from "./components/Result";
import { questions } from "./questions/questions";
import "./index.scss";

const App = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const handleClickAnswer = (index) => {
    setStep(step + 1);

    if (index === questions[correct].correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          step={step}
          question={question}
          questions={questions}
          handleClickAnswer={handleClickAnswer}
        />
      ) : (
        <Result correct={correct} questions={questions} />
      )}
    </div>
  );
};

export default App;

