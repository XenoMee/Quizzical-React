import { useState } from 'react';
import StartScreen from './Components/StartScreen';

const App = () => {
  const [quizActive, setQuizActive] = useState(false);

  const toggleQuiz = () => {
    setQuizActive((prevQuiz) => !prevQuiz);
  };

  return (
    <>
      <main className='min-h-svh background-blobs grid place-content-center'>
        {quizActive ? <QuizScreen /> : <StartScreen activateQuiz={toggleQuiz} />}
      </main>
    </>
  );
};

export default App;
