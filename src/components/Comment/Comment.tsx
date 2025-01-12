import { ArticleComments } from '@/models/Article';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Avatar, Box, Button, Card, IconButton, Typography } from '@mui/material';

import { styles } from './styles.mui';

interface CommentProps {
  comment: ArticleComments;
  setComments: React.Dispatch<
    React.SetStateAction<
      (ArticleComments & {
        isOpen: boolean;
      })[]
    >
  >;
}

const Comment = ({ comment, setComments }: CommentProps) => {
  const handleShowReplyes = (commentId: string | undefined) => {
    if (!commentId) return;

    setComments((prev) =>
      prev.map((comment) => {
        if (comment._id === commentId) {
          return { ...comment, isOpen: !comment.isOpen };
        }
        return comment;
      }),
    );
  };

  return (
    <Box
      key={comment._id}
      sx={{
        mt: 2,
        pl: comment.parentId ? 4 : 0,
      }}
    >
      <Card sx={styles.card}>
        <Avatar alt={comment.author.nickName} src={comment.author.avatarUrl} />
        <Box>
          <Typography variant="subtitle2">{`${comment.author.firstName} ${comment.author.lastName}`}</Typography>
          <Typography variant="body2" color="textSecondary">
            {comment.text}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
            <IconButton size="small" sx={{ ...styles.iconButton.default, ...styles.iconButton.like }}>
              <ThumbUpIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ ...styles.iconButton.default, ...styles.iconButton.comment }}>
              <CommentIcon fontSize="small" />
            </IconButton>
            <Typography variant="body2">{comment.likes}</Typography>
            {!comment.parentId && comment.replyes?.length !== 0 && (
              <Button
                onClick={() => handleShowReplyes(comment._id)}
                variant="contained"
                size="small"
                sx={styles.replyButton}
              >
                Replyes {comment.replyes?.length}
              </Button>
            )}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Comment;
