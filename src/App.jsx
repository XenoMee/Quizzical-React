import { useState, Suspense } from 'react';
import StartScreen from './Components/StartScreen';
import QuizScreen from './Components/QuizScreen';
import LoadingData from './Components/LoadingData';

const App = () => {
  const [quizActive, setQuizActive] = useState(false);
  const toggleQuiz = () => setQuizActive(true);

  return (
    <>
      <main className='min-h-svh background-blobs grid place-content-center'>
        {quizActive ? (
          <Suspense fallback={<LoadingData />}>
            <QuizScreen />
          </Suspense>
        ) : (
          <StartScreen activateQuiz={toggleQuiz} />
        )}
      </main>
    </>
  );
};

export default App;
