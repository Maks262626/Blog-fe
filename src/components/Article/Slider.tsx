import Slider from 'react-slick';

import { Article } from '@/models/Article';
import { Box, CardMedia } from '@mui/material';

import { styles } from './styles.mui';

const ArticleSlider = ({ article }: { article: Article }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      {article.imageUrls && article.imageUrls.length > 0 ? (
        article.imageUrls.length === 1 ? (
          <Box sx={styles.sliderImageWrapper}>
            <CardMedia component="img" image={article.imageUrls[0]} alt={article.title} sx={styles.sliderImage} />
          </Box>
        ) : (
          <Slider {...sliderSettings}>
            {article.imageUrls.map((url, index) => (
              <Box key={index} sx={styles.sliderImageWrapper}>
                <CardMedia component="img" image={url} alt={article.title} sx={styles.sliderImage} />
              </Box>
            ))}
          </Slider>
        )
      ) : null}
    </>
  );
};

export default ArticleSlider;
