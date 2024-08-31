import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useCategory = () => {
  const [category, setCategory] = useState('');

  const fetchCategoryList = useCallback(async () => {
    try {
      const { data } = await axios.get('https://opentdb.com/api_category.php');
      return data.trivia_categories;
    } catch (err) {
      console.error('Fetching category list failed', err);
      return [];
    }
  }, []);

  const getRandomCategory = useCallback(async () => {
    const categories = await fetchCategoryList();
    if (categories.length > 0) {
      const randomCategory = Math.floor(Math.random() * categories.length);
      setCategory(categories[randomCategory].id);
    }
  }, [fetchCategoryList]);

  useEffect(() => {
    getRandomCategory();
  }, [getRandomCategory]);

  return { category, getRandomCategory };
};

export default useCategory;
