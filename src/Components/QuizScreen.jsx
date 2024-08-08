import React from 'react';
import QuizQuestion from './QuizQuestion';

const QuizScreen = ({ quizData }) => {
  return (
    <div className='px-8'>
      <ul className='grid gap-2'>
        {quizData.results.map((result, index) => (
          <QuizQuestion key={index} question={result.question} />
        ))}
      </ul>
    </div>
  );
};

export default QuizScreen;
