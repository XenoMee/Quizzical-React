import { useState, useEffect } from 'react';
import { decode } from 'html-entities';
import StartScreen from './Components/StartScreen';
import QuizScreen from './Components/QuizScreen';
import insertRandomly from './Utilities/insertRandomItem';
import fetchData from './Utilities/data';

const App = () => {
  const [quizActive, setQuizActive] = useState(false);
  const [quizData, setQuizData] = useState('');

  async function fetchCategoryList() {
    try {
      const res = await fetch('https://opentdb.com/api_category.php');
      const data = await res.json();
      return data.trivia_categories;
    } catch (err) {
      console.error('Fetching category list failed', err);
      return [];
    }
  }

  useEffect(() => {
    async function getRandomCategory() {
      const categories = await fetchCategoryList();
      if (categories.length > 0) {
        const randomCategory = Math.floor(Math.random() * categories.length);
        fetchData(categories[randomCategory].id, decode, insertRandomly, setQuizData);
      }
    }

    getRandomCategory();
  }, []);

  const toggleQuiz = () => {
    setQuizActive(true);
  };

  return (
    <>
      <main className='min-h-svh background-blobs grid place-content-center'>
        {quizActive ? (
          <QuizScreen quizData={quizData} setData={setQuizData} />
        ) : (
          <StartScreen activateQuiz={toggleQuiz} />
        )}
      </main>
    </>
  );
};

export default App;
