import React from 'react';
import { getAnswer } from '../utils';

export const AnswerView = ({ question, result, round, incrementRound }) => {
  const answer = getAnswer(round - 1);

  return (
    <div className='answer-view'>
      <div className='result'>
        {result === 'correct' ? <h1>CORRECT</h1> : result === 'wrong' ? <h1>WRONG</h1> : <h1>TIMEOUT</h1>}
      </div>
      <div className='answer'>
        <h2>{question}</h2>
        <h2>{answer}</h2>
      </div>
      <button onClick={incrementRound}>Next Question</button>
    </div>
  );
};
