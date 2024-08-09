async function fetchData(category, decodeFn, insertFn, setQuizData) {
  try {
    const res = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=multiple`);
    const data = await res.json();
    const decodedData = data.results.map((result) => {
      const decodedQuestion = decodeFn(result.question);
      const decodedCorrectAnswer = decodeFn(result.correct_answer);
      const decodedAnswers = result.incorrect_answers.map((answer) => decodeFn(answer));
      insertFn(decodedAnswers, decodedCorrectAnswer);
      return {
        question: decodedQuestion,
        correct_answer: decodedCorrectAnswer,
        answers: decodedAnswers,
      };
    });

    setQuizData(decodedData);
  } catch (err) {
    console.error('Failed to catch data: ', err);
  }
}

export default fetchData;
