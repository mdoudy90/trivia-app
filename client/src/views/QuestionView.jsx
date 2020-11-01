import React from 'react';

export const QuestionView = ({question, choices}) => {
  return (
    <div className='question-view'>
      <div className='header'>
        <h4>Points 100</h4>
        <h3>9</h3>
        <h4>Round 1/10</h4>
      </div>
      <div className='prompt'>
        <h2>{question}</h2>
      </div>
      <div className='choices'>
        {!!choices.length && choices.map((choice) => {
          return <button key={choice}>{choice}</button>;
        })}
      </div>
    </div>
  );
};
