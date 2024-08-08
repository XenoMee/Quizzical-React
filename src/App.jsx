import { useState, useEffect } from 'react';
import StartScreen from './Components/StartScreen';
import QuizScreen from './Components/QuizScreen';

const App = () => {
  const [quizActive, setQuizActive] = useState(false);
  const [quizData, setQuizData] = useState('');

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple')
      .then((response) => response.json())
      .then((data) => setQuizData(data));
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
