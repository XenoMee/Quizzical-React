import { useState, useEffect } from 'react';
import { decode } from 'html-entities';
import StartScreen from './Components/StartScreen';
import QuizScreen from './Components/QuizScreen';
import insertRandomly from './Utilities/insertRandomItem';
import fetchData from './Utilities/data';

const App = () => {
  const [quizActive, setQuizActive] = useState(false);
  const [quizData, setQuizData] = useState('');

  useEffect(() => {
    fetchData(11, decode, insertRandomly, setQuizData);
  }, []);

  const toggleQuiz = () => {
    setQuizActive((prevQuiz) => !prevQuiz);
  };

  return (
    <>
      <main className='min-h-svh background-blobs grid place-content-center'>
        {quizActive ? <QuizScreen quizData={quizData} /> : <StartScreen activateQuiz={toggleQuiz} />}
      </main>
    </>
  );
};

export default App;
