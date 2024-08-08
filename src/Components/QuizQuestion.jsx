import React from 'react';
import { decode } from 'html-entities';

const QuizQuestion = ({ id, question, answers }) => (
  <li className='pb-4 border-b-[1px] border-blue-25'>
    <fieldset>
      <legend className='h2 my-2'> {decode(question)}</legend>
      <div className='flex xxs:flex-col sm:flex-row justify-between items-center'>
        {answers[id].map((answer, index) => (
          <div key={index} className='flex items-center gap-2 text-center sm:text-left'>
            <label htmlFor={`question${id + 1}`}>{decode(answer)}</label>
            <input type='radio' name={`question${id + 1}`} value={decode(answer)} />
          </div>
        ))}
      </div>
    </fieldset>
  </li>
);

export default QuizQuestion;
