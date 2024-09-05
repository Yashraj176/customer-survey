import React, { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import QuestionScreen from "./QuestionScreen";
import ThankYouScreen from "./ThankYouScreen";

const App = () => {
  const [screen, setScreen] = useState("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      text: "How satisfied are you with our products?",
      type: "rating",
      scale: 5,
    },
    {
      id: 2,
      text: "How fair are the prices compared to similar retailers?",
      type: "rating",
      scale: 5,
    },
    {
      id: 3,
      text: "How satisfied are you with the value for money of your purchase?",
      type: "rating",
      scale: 5,
    },
    {
      id: 4,
      text: "On a scale of 1-10 how would you recommend us to your friends and family?",
      type: "rating",
      scale: 10,
    },
    {
      id: 5,
      text: "What could we do to improve our service?",
      type: "text",
    },
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answer }));
  };

  const submitSurvey = () => {
    setScreen("thankYou"); // Switch to ThankYouScreen
    // Save answers to local storage or database here
    console.log("Survey submitted:", answers);
  };

  const goToWelcomeScreen = () => {
    setScreen("welcome");
    setCurrentQuestionIndex(0); // Reset the survey
    setAnswers({});
  };

  const startSurvey = () => setScreen("questions");

  return (
    <div>
      {screen === "welcome" && <WelcomeScreen startSurvey={startSurvey} />}
      {screen === "questions" && (
        <QuestionScreen
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          handleAnswer={handleAnswer}
          answers={answers}
          submitSurvey={submitSurvey}
        />
      )}
      {screen === "thankYou" && <ThankYouScreen goToWelcomeScreen={goToWelcomeScreen} />}
    </div>
  );
};

export default App;
