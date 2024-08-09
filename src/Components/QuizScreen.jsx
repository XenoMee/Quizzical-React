import React from 'react';
import QuizQuestion from './QuizQuestion';

const QuizScreen = ({ quizData }) => {
  return (
    <div className='p-8'>
      <form action='' className='grid gap-10'>
        <ul className='grid gap-2'>
          {quizData.map((item, index) => (
            <QuizQuestion key={index} id={index} question={item.question} answers={item.answers} />
          ))}
        </ul>

        <button className='button justify-self-center'>Check Answers</button>
      </form>
    </div>
  );
};

export default QuizScreen;
