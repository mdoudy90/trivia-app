import React from 'react';
import { getAnswer } from '../utils';

export const AnswerView = ({ question, isCorrect, round, incrementRound }) => {
  const answer = getAnswer(round - 1);

  return (
    <div className={isCorrect ? 'answer-view correct-answer' : 'answer-view wrong-answer'}>
      <div className='question'>
        <h2>{question}</h2>
      </div>
      <div className='answer'>
        <h2>{answer}</h2>
      </div>
      <button onClick={incrementRound}>Next Question</button>
    </div>
  );
};
