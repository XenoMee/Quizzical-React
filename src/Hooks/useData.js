import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { decode } from 'html-entities';
import insertRandomly from '../Utilities/insertRandomItem';

const useData = (category) => {
  const [quizData, setQuizData] = useState('');

  const fetchData = useCallback(async () => {
    if (!category) return;

    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=easy&type=multiple`
    );

    const decodedData = data.results.map((result) => {
      const decodedQuestion = decode(result.question);
      const decodedCorrectAnswer = decode(result.correct_answer);
      const decodedAnswers = result.incorrect_answers.map((answer) => decode(answer));
      insertRandomly(decodedAnswers, decodedCorrectAnswer);
      return {
        question: decodedQuestion,
        correct_answer: decodedCorrectAnswer,
        answers: decodedAnswers,
      };
    });

    setQuizData(decodedData);
  }, [category]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { quizData, fetchData };
};

export default useData;
