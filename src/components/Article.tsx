import React from "react";
import { useNavigate } from "react-router-dom";

interface ArticleProps {
  id: string;
  title: string;
  summary: string;
}

const Article: React.FC<ArticleProps> = ({ id, title, summary }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="article" onClick={handleClick} style={{ cursor: "pointer", border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  );
};

export default Article;
