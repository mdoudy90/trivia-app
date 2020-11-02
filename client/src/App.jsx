import React, { useState, useEffect } from 'react';
import { QuestionView } from './components/QuestionView';
import { AnswerView } from './components/AnswerView';
import { FinishView } from './components/FinishView';
import { questionParser, answerVerifier, questionCount } from './utils';

export const App = () => {
  const [view, setView] = useState('question');
  const [points, setPoints] = useState(0);
  const [round, setRound] = useState(1);
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const submitAnswer = (choice) => {
    const result = answerVerifier(round - 1, choice);
    if (result) setPoints(points + 100);
    setIsCorrect(result);
    setView('answer');
  };

  const incrementRound = () => {
    if (round < questionCount) {
      setRound(round + 1);
      setView('question');
    } else {
      setView('finished');
    }
  }

  const resetGame = () => {
    setPoints(0);
    setRound(1);
    setView('question');
  }

  useEffect(() => {
    const { question, choices } = questionParser(round - 1);
    setQuestion(question);
    setChoices(choices);
  }, [round]);

  return (
    <>
      {view === 'question' &&
      <QuestionView
        question={question}
        choices={choices}
        submitAnswer={submitAnswer}
        points={points}
        round={round}
      />}
      {view === 'answer' &&
      <AnswerView
        question={question}
        isCorrect={isCorrect}
        round={round}
        incrementRound={incrementRound}
      />}
      {view == 'finished' &&
      <FinishView
        points={points}
        resetGame={resetGame}
      />}
    </>
  );
};
