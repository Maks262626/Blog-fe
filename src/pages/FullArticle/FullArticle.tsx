import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Article } from '@/models/Article';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';

import ArticleSlider from '@/components/Article/Slider';
import ArticleCommentsList from '@/components/Comment/ArticleCommenstList';

import axiosInstance from '@/utils/axios';

import { styles } from './styles.mui';

const FullArticle = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get<Article>(`api/articles/${id}`);
        setArticle(res.data);
      } catch (err) {
        console.error('Error fetching article:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!article) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6">Article not found.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={styles.container}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {article.title}
          </Typography>

          <Box sx={styles.authorBox}>
            <Avatar alt={article.author.nickName} src={article.author.avatarUrl} />
            <Typography variant="body1" color="textSecondary">
              {`${article.author.firstName} ${article.author.lastName}`}
            </Typography>
          </Box>

          <ArticleSlider article={article} />
          <Typography variant="body1">{article.text}</Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 1,
                gap: 1,
              }}
            >
              <IconButton size="small" sx={{ ...styles.iconButton.default, ...styles.iconButton.like }}>
                <ThumbUpIcon fontSize="small" />
              </IconButton>
              <Typography variant="body2">{article.likes}</Typography>

              <IconButton size="small" sx={{ ...styles.iconButton.default, ...styles.iconButton.comment }}>
                <CommentIcon fontSize="small" />
              </IconButton>
              <Typography variant="body2">{article.commentsCount}</Typography>

              <IconButton size="small" sx={{ ...styles.iconButton.default, ...styles.iconButton.visibility }}>
                <VisibilityIcon fontSize="small" />
              </IconButton>
              <Typography variant="body2">{article.commentsCount}</Typography>
            </Box>

            <Box sx={styles.tagsBox}>
              {article.tags.map((tag) => (
                <Chip key={tag._id} label={tag.name} variant="outlined" />
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Comments
        </Typography>
        <Box sx={{ mb: 2 }}>
          <TextField fullWidth placeholder="Write a comment..." multiline rows={3} variant="outlined" />
          <Box sx={styles.commentBox}>
            <Button variant="contained">Post Comment</Button>
          </Box>
        </Box>
        <ArticleCommentsList comments={article.comments} />
      </Box>
    </Box>
  );
};

export default FullArticle;
