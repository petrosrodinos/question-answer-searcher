import { useState, useEffect } from "react";
import { questions } from "./questions";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./App.css";

function App() {
  const [selected, setSelected] = useState<number>();

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  useEffect(() => {
    SpeechRecognition.startListening({
      continuous: true,
    });
  }, []);

  useEffect(() => {
    if (!transcript) return;
    if (transcript.toLowerCase().includes("reset")) {
      handleReset();
      return;
    }
    const questionIndex = questions.findIndex((question) =>
      question.question.toLowerCase().includes(transcript.toLowerCase())
    );
    console.log(questionIndex);
    if (questionIndex > -1) {
      setSelected(questionIndex);
      window.location.hash = questionIndex.toString();
    }

    setTimeout(() => {
      handleReset();
    }, 5000);
  }, [transcript]);

  const handleReset = () => {
    resetTranscript();
    setSelected(undefined);
  };

  return (
    <div className="container">
      <div className="fixed-container">
        <p>Question: {transcript}</p>
        <button className="button" onClick={() => SpeechRecognition.startListening()}>
          start
        </button>
        <button className="button" onClick={handleReset}>
          Reset
        </button>
      </div>
      {questions.map((question, index) => (
        <div
          style={selected == index ? { border: "1px solid red" } : {}}
          id={index.toString()}
          key={index}
        >
          <h1>{question.question}</h1>
          <h2>{question.answer}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
