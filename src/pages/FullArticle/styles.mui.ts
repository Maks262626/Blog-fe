export const styles = {
  iconButton: {
    default: {
      color: 'white',
      transition: 'color 0.3s ease',
    },
    like: {
      '&:hover': {
        color: 'red',
      },
    },
    comment: {
      '&:hover': {
        color: 'blue',
      },
    },
    visibility: {
      '&:hover': {
        color: 'green',
      },
    },
  },
  replyButton: {
    ml: 5,
  },
  container: {
    p: 2,
    maxWidth: 800,
    margin: '0 auto',
  },
  authorBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    mb: 2,
  },
  tagsBox: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
  },
  commentBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    mt: 1,
  },
};
