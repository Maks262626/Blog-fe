export const styles = {
  card: {
    display: 'flex',
    p: 2,
    alignItems: 'flex-start',
    gap: 2,
    variant: 'outlined',
  },
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
  },
  replyButton: {
    ml: 5,
  },
};
