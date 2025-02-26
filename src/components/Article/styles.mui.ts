export const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: { xs: '100%', sm: 600, lg: 800 },
    cursor: 'pointer',
    border: '1px solid #ddd',
    borderRadius: 2,
    boxShadow: 3,
    overflow: 'hidden',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      border: '1px solid #FFFD02',
    },
  },
  like: {
    p: 1.5,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: 'white',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: 'red',
    },
  },
  comment: {
    p: 1.5,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: 'white',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: 'blue',
    },
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 1,
    gap: 1,
  },
  chipWrapper: { mt: 1 },
  chip: { marginRight: 0.5, marginTop: 0.5 },
  cardContent: { display: 'flex', flexDirection: 'column', padding: 2 },
  title: { fontWeight: 'bold', marginBottom: 1 },
  text: { flex: 1 },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    px: { xs: 2, sm: 4 },
  },
  list: { display: 'flex', flexDirection: 'column', gap: 2, mb: 14 },
  cardMediaWraper: { p: 2 },
  cardMedia: {
    height: 180,
    width: '100%',
    objectFit: 'contain',
    borderRadius: 2,
    backgroundColor: '#f5f5f5',
  },
  sliderImageWrapper: {
    width: '100%',
    height: '400px',
    border: '2px solid #1A1A1A',
    overflow: 'hidden',
    position: 'relative',
  },
  sliderImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    p: 1,
  },
};
