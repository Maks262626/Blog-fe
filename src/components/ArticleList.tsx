import { useEffect, useState } from 'react';

import axios from 'axios';

import Article from '../components/Article';

const ArticleList = () => {
  const [articles, setArticles] = useState<Array<{ id: string; title: string; summary: string }>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch articles data
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/articles');
        setArticles(response.data);
      } catch {
        setError('Failed to load articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {articles.map((article) => (
        <Article key={article.id} id={article.id} title={article.title} summary={article.summary} />
      ))}
    </div>
  );
};

export default ArticleList;
