import React from 'react';
import QuizQuestion from './QuizQuestion';
import insertRandomly from '../Utilities/insertRandomItem';

const QuizScreen = ({ quizData }) => {
  const options = quizData.results.map((result) => {
    const wrong_answers = [...result.incorrect_answers];

    insertRandomly(wrong_answers, result.correct_answer);

    return wrong_answers;
  });

  return (
    <div className='grid gap-10 p-8'>
      <ul className='grid gap-2'>
        {quizData.results.map((result, index) => (
          <QuizQuestion key={index} id={index} question={result.question} answers={options} />
        ))}
      </ul>

      <button className='button justify-self-center'>Check Answers</button>
    </div>
  );
};

export default QuizScreen;
