import React from 'react';
import { decode } from 'html-entities';

const QuizQuestion = ({ id, question, answers }) => (
  <li className='pb-4 border-b-[1px] border-blue-25'>
    <fieldset>
      <legend className='h2 my-2'> {decode(question)}</legend>
      <div className='flex xxs:flex-col sm:flex-row justify-between items-center'>
        {answers[id].map((answer, index) => (
          <label key={index} role='button'>
            <input type='radio' name={`question${id + 1}`} value={decode(answer)} />
            {decode(answer)}
          </label>
        ))}
      </div>
    </fieldset>
  </li>
);

export default QuizQuestion;
