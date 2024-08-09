import React from 'react';

const QuizQuestion = ({
  id,
  question,
  answers,
  correctAnswer,
  setAnswers,
  answerStatus,
  answersChecked,
  selectedAnswer,
}) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setAnswers((prevAnswers) => {
      return {
        ...prevAnswers,
        [id]: value,
      };
    });
  };

  const getLabelClass = (answer) => {
    if (answerStatus === 'correct' && answer === selectedAnswer) {
      return 'bg-correct border-correct';
    } else if (answerStatus === 'wrong' && answer === selectedAnswer) {
      return 'bg-wrong border-wrong';
    } else if (answer === correctAnswer) {
      return 'bg-correct border-correct';
    } else {
      return '';
    }
  };

  return (
    <li className='pb-4 pt-2 border-b-[1px] border-blue-25'>
      <fieldset>
        <legend className='h2 mb-4'> {question}</legend>
        <div className='flex text-center xxs:flex-col xxs:gap-4 sm:flex-row sm:justify-between sm:items-center'>
          {answers.map((answer, index) => {
            return (
              <label
                key={index}
                role='button'
                className={`label-button ${answersChecked && getLabelClass(answer) ? `${getLabelClass(answer)}` : ''}`}
              >
                <input
                  type='radio'
                  name={`question${id}`}
                  value={answer}
                  className='hidden'
                  onChange={handleChange}
                  disabled={answersChecked}
                  checked={answersChecked ? false : selectedAnswer === answer}
                />
                <span>{answer}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
    </li>
  );
};

export default QuizQuestion;
