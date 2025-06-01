import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const BannerWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#fefaf7',
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(1, 3), 
  boxSizing: 'border-box',
}));

const BannerSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#e9d9d0',
  padding: '35px 60px',
  borderRadius: '30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1600px',
  height: '140px',
  boxSizing: 'border-box',
}));

const ShopTitle = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: '600',
  color: '#5e473e',
  textTransform: 'uppercase',
}));

const BreadcrumbNav = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '17px',
  color: '#5e473e',
}));

const BreadcrumbLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: '#5e473e',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const AboutBanner = () => {
  return (
    <BannerWrapper>
      <BannerSection>
        <ShopTitle>OUR SHOP</ShopTitle>
        <BreadcrumbNav>
          <BreadcrumbLink href="/home">Home</BreadcrumbLink> / 
          <Typography component="span" sx={{ color: '#5e473e' }}>About</Typography>
        </BreadcrumbNav>
      </BannerSection>
    </BannerWrapper>
  );
};

export default AboutBanner; 
