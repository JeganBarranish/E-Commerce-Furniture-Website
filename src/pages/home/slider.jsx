import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import image1 from '../../images/home-img-1.png';
import image2 from '../../images/home-img-2.png';


const SliderSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  margin: '0', 
  borderRadius: '3rem',
  backgroundColor: '#f0e8e4',
  padding: '3rem 9%',
  width: '100%',
  boxSizing: 'border-box',
  [theme.breakpoints.down('md')]: {
    padding: '3rem 5%',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '3rem 2rem',
  },
}));

const SlideContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between', 
  flexWrap: 'wrap',
  gap: '1.5rem',
  width: '100%',
  maxWidth: '1600px', 
  margin: '0 auto', 
});

const ContentBox = styled(Box)(({ theme }) => ({
  flex: '1 1 40rem',
  maxWidth: '50%', 
  animation: 'fadeLeft 0.4s linear 0.4s backwards',
  '@keyframes fadeLeft': {
    '0%': {
      transform: 'translateX(-5rem)',
      opacity: 0,
    },
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%', 
  },
}));

const SpanText = styled(Typography)({
  fontSize: '2.5rem',
  color: '#b58d7e',
});

const HeadingText = styled(Typography)(({ theme }) => ({
  fontSize: '6rem',
  color: '#5e473e',
  [theme.breakpoints.down('lg')]: {
    fontSize: '5rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '4.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '4rem',
  },
}));

const ParagraphText = styled(Typography)({
  fontSize: '1.5rem',
  color: '#b58d7e',
  padding: '0.5rem 0',
  lineHeight: 2,
});

const ShopButton = styled(Button)({
  display: 'inline-block',
  marginTop: '1rem',
  padding: '1rem 3rem',
  fontSize: '1.7rem',
  letterSpacing: '1px',
  background: 'linear-gradient(135deg, #b58d7e, #845f51)',
  color: '#faf7f6',
  cursor: 'pointer',
  borderRadius: '1rem',
  textTransform: 'capitalize',
  '&:hover': {
    letterSpacing: '2px',
    background: 'linear-gradient(135deg, #945f51, #b58d7e)',
  },
});

const ImageBox = styled(Box)(({ theme }) => ({
  flex: '1 1 40rem',
  maxWidth: '45%', 
  padding: '3rem 0',
  display: 'flex',
  justifyContent: 'center',
  '& img': {
    width: '100%',
    maxWidth: '600px', 
    height: 'auto',
    objectFit: 'contain',
    animation: 'fadeOut 0.4s linear',
  },
  '@keyframes fadeOut': {
    '0%': {
      transform: 'scale(0.5)',
      opacity: 0,
    },
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%', 
  },
}));

const SlideNavButton = styled(Button)(({ theme, direction }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  height: '5rem',
  width: '5rem',
  minWidth: 'unset',
  lineHeight: '5rem',
  fontSize: '3rem',
  textAlign: 'center',
  color: '#845f51',
  backgroundColor: '#e1cec7',
  cursor: 'pointer',
  borderRadius: '50%',
  right: direction === 'next' ? '2rem' : 'auto',
  left: direction === 'prev' ? '2rem' : 'auto',
  zIndex: 10, 
  '&:hover': {
    backgroundColor: '#845f51',
    color: '#e1cec7',
  },
  [theme.breakpoints.down('md')]: {
    top: '95%',
    ...(direction === 'prev' && {
      left: 'auto',
      right: '8rem',
    }),
  },
}));


const slideData = [
  {
    id: 1,
    span: 'new arrivals',
    heading: 'flexible chair',
    paragraph: 'Experience the perfect blend of comfort and style with our latest Flexible Chair collection. Designed for modern living, it offers elegance and relaxation in every detail.',
    image: image1,
  },
  {
    id: 2,
    span: 'new arrivals',
    heading: 'flexible chair',
    paragraph: 'Experience the perfect blend of comfort and style with our latest Flexible Chair collection. Designed for modern living, it offers elegance and relaxation in every detail.',
    image: image2,
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slideData.length);
  };

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length);
  };

 
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SliderSection>
      {slideData.map((slide, idx) => (
        <SlideContainer key={slide.id} sx={{ display: idx === index ? 'flex' : 'none' }}>
          <ContentBox>
            <SpanText variant="subtitle1">{slide.span}</SpanText>
            <HeadingText variant="h1">{slide.heading}</HeadingText>
            <ParagraphText variant="body1">{slide.paragraph}</ParagraphText>
            <ShopButton>shop now</ShopButton>
          </ContentBox>
          <ImageBox>
            <img src={slide.image} alt="Furniture" />
          </ImageBox>
        </SlideContainer>
      ))}

      <SlideNavButton 
        direction="next" 
        onClick={next}
        aria-label="Next slide"
      >
        <ArrowForwardIcon />
      </SlideNavButton>
      
      <SlideNavButton 
        direction="prev" 
        onClick={prev}
        aria-label="Previous slide"
      >
        <ArrowBackIcon />
      </SlideNavButton>
    </SliderSection>
  );
};

export default Slider;  