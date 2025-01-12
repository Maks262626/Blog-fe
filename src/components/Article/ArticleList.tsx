import { useEffect, useState } from 'react';

import { Article } from '@/models/Article';
import { Box } from '@mui/material';

import axiosInstance from '@/utils/axios';

import Loader from '../Loader';
import ArticleCard from './Article';
import { styles } from './styles.mui';

const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get('/api/articles');
        setArticles(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);
  if (loading) {
    return <Loader />;
  }

  return <Box sx={styles.list}>{articles?.map((article) => <ArticleCard key={article._id} article={article} />)}</Box>;
};

export default ArticleList;
