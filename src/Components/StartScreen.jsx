import React, { act } from 'react';

const StartScreen = ({ activateQuiz }) => {
  return (
    <div className='grid gap-10 text-center'>
      <div>
        <h1 className='h1 mb-3'>Quizzical</h1>
        <p>Ready to test your knowledge?</p>
      </div>
      <button className='button font-medium justify-self-center' onClick={activateQuiz}>
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
