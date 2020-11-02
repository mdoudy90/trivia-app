import React from 'react';

export const FinishView = ({ points, resetGame }) => {
  return (
    <div className='finish-view'>
      <h2>FINISHED!</h2>
      <div className='points'>
        <h2>Total Points: {points}</h2>
      </div>
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
};
