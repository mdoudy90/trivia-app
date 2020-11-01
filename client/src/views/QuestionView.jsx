import React, { useState, useEffect } from 'react';
import { questionCount } from '../utils';

const ROUND_LENGTH = 10;

export const QuestionView = ({ question, choices, submitAnswer, points, round }) => {
  const [isTimerOn, setIsTimerOn] = useState(true);
  const [seconds, setSeconds] = useState(ROUND_LENGTH);

  const clickHandler = (e) => {
    if (e) {
      e.preventDefault();
      submitAnswer(e.target.id);
    } else {
      submitAnswer(null);
    }
  };

  useEffect(() => {
    let interval;
    if (isTimerOn) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
    if (seconds === 0 || !setIsTimerOn) clearInterval(interval);
    if (seconds === 0) clickHandler(null);
    return () => clearInterval(interval);
  }, [isTimerOn, seconds]);

  useEffect(() => {
    setSeconds(ROUND_LENGTH);
    setIsTimerOn(true);
  }, [question]);

  return (
    <div className='question-view'>
      <div className='header'>
        <h4>{`Points ${points}`}</h4>
        <h3>{seconds}</h3>
        <h4>{`Round ${round}/${questionCount}`}</h4>
      </div>
      <div className='prompt'>
        <h2>{question}</h2>
      </div>
      <div className='choices'>
        {!!choices.length &&
          choices.map((choice) => {
            return (
              <button key={choice} id={choice} onClick={clickHandler}>
                {choice}
              </button>
            );
          })}
      </div>
    </div>
  );
};
