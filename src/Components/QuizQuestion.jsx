import React from 'react';
import { decode } from 'html-entities';

const QuizQuestion = ({ id, question, answers }) => (
  <li className='pb-4 pt-2 border-b-[1px] border-blue-25'>
    <fieldset>
      <legend className='h2 mb-4'> {decode(question)}</legend>
      <div className='flex text-center xxs:flex-col xxs:gap-4 sm:flex-row sm:justify-between sm:items-center'>
        {answers[id].map((answer, index) => (
          <label
            key={index}
            role='button'
            className='label-button hover:bg-blue-600 hover:text-white-50 transition delay-100 ease-in-out '
          >
            <input type='radio' name={`question${id + 1}`} value={decode(answer)} className='hidden' />
            <span>{decode(answer)}</span>
          </label>
        ))}
      </div>
    </fieldset>
  </li>
);

export default QuizQuestion;
