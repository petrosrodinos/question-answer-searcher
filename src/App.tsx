import { useState, useEffect } from "react";
import { blockchain } from "./assets/questions/blockchain";
import { personal } from "./assets/questions/personal";
import { react } from "./assets/questions/react";
// import { solidity } from "./assets/questions/solidity";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { Markup } from "interweave";
import "./App.css";

const categories: any = {
  blockchain,
  personal,
  react,
  // solidity,
};

function App() {
  const [selected, setSelected] = useState<number>();
  const [selectedCategory, setSelectedCategory] = useState<any[]>(categories.react);

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
    const questionIndex = selectedCategory.findIndex((question) =>
      question.question.toLowerCase().includes(transcript.toLowerCase())
    );
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
      <div className="category-container">
        {Object.keys(categories).map((category, index) => (
          <button
            key={index}
            className="button"
            onClick={() => setSelectedCategory(categories[category])}
          >
            {category}
          </button>
        ))}
      </div>
      {selectedCategory?.map((question: any, index: number) => (
        <div
          style={selected == index ? { border: "1px solid red", padding: "5px" } : {}}
          id={index.toString()}
          key={index}
        >
          <h1>
            {index + 1}) {question.question}
          </h1>
          {/* <h2>{question.answer}</h2> */}
          <Markup content={question.answer} />
        </div>
      ))}
    </div>
  );
}

export default App;
