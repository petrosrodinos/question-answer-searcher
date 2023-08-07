import { useState } from "react";
import { questions } from "./questions";
import "./App.css";

function App() {
  const [input, setInput] = useState<string>("");

  const handleClick = () => {
    const questionIndex = questions.findIndex((question) =>
      question.question.toLowerCase().includes(input.toLowerCase())
    );
    console.log(questionIndex);
    if (questionIndex > -1) {
      window.location.hash = questionIndex.toString();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  return (
    <div className="container">
      <input type="text" onChange={handleChange} value={input} />
      <button onClick={handleClick}>find</button>
      {questions.map((question, index) => (
        <div id={index.toString()} key={index}>
          <h1>{question.question}</h1>
          <h2>{question.answer}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
