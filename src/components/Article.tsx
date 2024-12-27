import { useNavigate } from "react-router-dom";
import { ArticleProps } from "../models/Article.ts";
import { routes } from "../routes";


const Article = ({ id, title, summary }: ArticleProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${routes.PUBLIC.ARTICLES}/${id}`);
  };

  return (
    <div className="article" onClick={handleClick} style={{ cursor: "pointer", border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  );
};

export default Article;
