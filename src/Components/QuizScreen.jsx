import { React, useState } from 'react';
import { decode } from 'html-entities';
import insertRandomly from '../Utilities/insertRandomItem';
import QuizQuestion from './QuizQuestion';

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
