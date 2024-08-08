import React from 'react';
import { decode } from 'html-entities';

const QuizScreen = ({ quizData }) => {
  return (
    <div className='px-8'>
      <ul className='grid gap-2'>
        {quizData.results.map((result) => {
          return (
            <li className='pb-2 border-b-[1px] border-blue-25'>
              <h2 className='h2'>{decode(result.question)}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuizScreen;
