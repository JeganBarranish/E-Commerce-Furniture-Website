import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import aboutimg from '../../images/about-img.jpg';

const AboutWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '2rem',
  borderRadius: '2rem',
  backgroundColor: '#f8ece4',
  padding: theme.spacing(4, 5),
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  }
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: '1 1 40%',
  maxWidth: '50%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '100%',
  }
}));

const Image = styled('img')({
  borderRadius: '1rem',
  width: '100%',
  display: 'block',
});

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: '1 1 50%',
  padding: theme.spacing(0, 0, 0, 3),
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: theme.spacing(3, 0, 0, 0),
  }
}));

const WelcomeSpan = styled(Typography)({
    fontSize: '1.75rem', 
    color: '#b58d7e',
    display: 'block',
    marginBottom: '0.75rem',
    fontWeight: 'normal',
  });

  const Heading = styled(Typography)({
    fontSize: '2.75rem', 
    color: '#6d4c41',
    marginBottom: '1.25rem',
    fontWeight: 'bold',
  });
  
  const Paragraph = styled(Typography)({
    fontSize: '1.15rem', 
    color: '#9e7d73',
    marginBottom: '1.25rem',
    lineHeight: '1.8', 
  });

const StyledButton = styled(Button)({
  backgroundColor: '#b58d7e',
  color: 'white',
  padding: '0.5rem 1.5rem',
  fontSize: '1rem',
  borderRadius: '0.25rem',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#8d6e63',
  },
});

const AboutSection = () => {
  return (
    <Box sx={{
      width: '100%',
      backgroundColor: '#fefaf7',
      display: 'flex',
      justifyContent: 'center',
      padding: '8px 24px',
      boxSizing: 'border-box',
    }}>
      <Box sx={{ 
        width: '100%',
        maxWidth: '1600px', 
      }}>
        <AboutWrapper component="section">
          <ImageContainer>
            <Image src={aboutimg} alt="Modern blue armchair with yellow cushion" />
          </ImageContainer>

          <ContentContainer>
            <WelcomeSpan>Welcome To Our Shop</WelcomeSpan>
            <Heading>We Make Your Home More Astonishing</Heading>
            <Paragraph>
              We Believe That A Home Is Incomplete Without The Perfect Sofa. Our Passion For
              Craftsmanship, Comfort, And Style Drives Us To Create High-Quality, Elegant, And
              Durable Sofas That Fit Every Lifestyle.
            </Paragraph>
            <Paragraph>
              With A Commitment To Premium Materials And Expert Craftsmanship, We Offer A
              Wide Range Of Sofas—From Modern Minimalistic Designs To Timeless Classics.
              Whether You're Looking For A Cozy Loveseat Or A Spacious Sectional, Our Collection
              Is Designed To Bring Warmth And Elegance To Your Living Space. Experience The
              Perfect Blend Of Luxury And Comfort With Our Company—Where Every Sofa Tells A
              Story Of Craftsmanship And Care.
            </Paragraph>
            <StyledButton variant="contained">read more</StyledButton>
          </ContentContainer>
        </AboutWrapper>
      </Box>
    </Box>
  );
};

export default AboutSection;