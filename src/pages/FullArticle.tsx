import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface ArticleDetails {
  id: string;
  title: string;
  summary: string;
}

const FullArticle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/articles/${id}`);
        setArticle(response.data);
      } catch {
        setError("Failed to load the article. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {article ? (
        <div style={{ padding:'20px', border: "1px solid #ccc", margin: "10px" }}>
          <h1>{article.title}</h1>
          <p>{article.summary}</p>
        </div>
      ) : (
        <p>Article not found.</p>
      )}
    </div>
  );
};

export default FullArticle;