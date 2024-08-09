import { React, useState } from 'react';
import { decode } from 'html-entities';
import insertRandomly from '../Utilities/insertRandomItem';
import QuizQuestion from './QuizQuestion';
import fetchData from '../Utilities/data';

const QuizScreen = ({ quizData, setData }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [answersStatus, setAnswersStatus] = useState({});
  const [answersChecked, setAnswersChecked] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const statuses = {};

    Object.keys(selectedAnswers).forEach((question, index) => {
      const userAnswer = selectedAnswers[question];
      const correctAnswer = quizData[index].correct_answer;
      if (userAnswer === correctAnswer) {
        statuses[index] = 'correct';
        setScore((prevScore) => prevScore + 1);
      } else {
        statuses[index] = 'wrong';
      }
    });

    setAnswersStatus(statuses);
    setAnswersChecked((prevAnswersChecked) => !prevAnswersChecked);
  };

  const restartGame = (e) => {
    e.preventDefault();

    setSelectedAnswers({});
    setAnswersChecked(false);
    setScore(0);
    setAnswersStatus({});
    fetchData(9, decode, insertRandomly, setData);
  };

  return (
    <div className='container'>
      <form onSubmit={answersChecked ? restartGame : handleSubmit} className='grid gap-10'>
        <ul className='grid gap-2'>
          {quizData.map((item, index) => (
            <QuizQuestion
              key={index}
              id={index}
              question={item.question}
              answers={item.answers}
              correctAnswer={item.correct_answer}
              setAnswers={setSelectedAnswers}
              answerStatus={answersStatus[index]}
              selectedAnswer={selectedAnswers[index]}
              answersChecked={answersChecked}
            />
          ))}
        </ul>

        <div className='grid gap-4 justify-self-center'>
          {answersChecked && <p className='font-bold'>{`You scored ${score}/${quizData.length} correct answers`}</p>}
          <button className='button'>{answersChecked ? 'Play Again' : 'Check Answers'}</button>
        </div>
      </form>
    </div>
  );
};

export default QuizScreen;
