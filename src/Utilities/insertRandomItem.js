const insertRandomly = (arr, item) => {
  const randomIndex = Math.floor(Math.random() * (arr.length + 1));

  arr.splice(randomIndex, 0, item);
};

export default insertRandomly;
