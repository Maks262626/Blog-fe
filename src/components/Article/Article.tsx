import { useNavigate } from 'react-router-dom';

import { Article } from '@/models/Article';
import { routes } from '@/routes';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Box, Card, CardContent, Chip, IconButton, Typography } from '@mui/material';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import ArticleSlider from './Slider';
import { styles } from './styles.mui';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${routes.PUBLIC.ARTICLES}/${article._id}`);
  };

  return (
    <Box sx={styles.wrapper}>
      <Card onClick={handleClick} sx={styles.card}>
        <ArticleSlider article={article} />
        <CardContent sx={styles.cardContent}>
          <Typography variant="h6" sx={styles.title}>
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={styles.text}>
            {article.text.length > 100 ? `${article.text.slice(0, 100)}...` : article.text}
          </Typography>

          <Box sx={styles.chipWrapper}>
            {article.tags.map((tag) => (
              <Chip key={tag.id} label={tag.name} sx={styles.chip} />
            ))}
          </Box>

          <Box sx={styles.actions}>
            <IconButton size="small" sx={styles.like}>
              <ThumbUpIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2">{article.likes}</Typography>

            <IconButton size="small" sx={styles.comment}>
              <CommentIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2">{article.commentsCount}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ArticleCard;
