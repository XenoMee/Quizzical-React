import React from 'react';

const QuizQuestion = ({ question }) => (
  <li className='pb-2 border-b-[1px] border-blue-25'>
    <h2 className='h2'>{decode(question)}</h2>
  </li>
);

export default QuizQuestion;
