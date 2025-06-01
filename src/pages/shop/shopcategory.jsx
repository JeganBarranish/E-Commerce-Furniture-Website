import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import icon1 from '../../images/icon-1.png';
import icon2 from '../../images/icon-2.png';
import icon3 from '../../images/icon-3.png';
import icon4 from '../../images/icon-4.png';
import icon5 from '../../images/icon-5.png';


const CategorySection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.2rem',
  color: '#5e473e',
  fontWeight: 700,
  textTransform: 'capitalize',
}));

const ViewAllLink = styled(Link)(({ theme }) => ({
  fontSize: '1.3rem',
  color: '#5e473e',
  textDecoration: 'none',
  fontWeight: 600,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const TitleUnderline = styled(Box)(({ theme }) => ({
  borderBottom: '2px solid #5e473e',
  marginBottom: theme.spacing(3),
}));

const CategoryBox = styled(Link)(({ theme }) => ({
  padding: '2rem',
  textAlign: 'center',
  borderRadius: '2rem',
  background: '#f0e8e4',
  display: 'block',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    '& img': {
      transform: 'translateY(-3px)',
    },
  },
}));

const CategoryImage = styled('img')(({ theme }) => ({
  height: '6rem',
  marginBottom: '1rem',
  transition: 'transform 0.3s ease',
}));

const CategoryName = styled(Typography)(({ theme }) => ({
  fontSize: '1.7rem',
  color: '#5e473e',
  textTransform: 'capitalize',
}));

const BoxContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
  gap: '1.5rem',
}));

const ShopCategory = () => {
  const categories = [
    { id: 1, name: 'house sofa', image: icon1 },
    { id: 2, name: 'working table', image: icon2 },
    { id: 3, name: 'corner table', image: icon3 },
    { id: 4, name: 'office chair', image: icon4 },
    { id: 5, name: 'new wardrobe', image: icon5 },
  ];

  return (
    <Container>
      <CategorySection>
        <TitleContainer>
          <Title variant="h2">Our Categories</Title>
          <ViewAllLink href="#">View All &gt;&gt;</ViewAllLink>
        </TitleContainer>

        {/* Just the underline below title row */}
        <TitleUnderline />

        <BoxContainer>
          {categories.map((category) => (
            <CategoryBox href="#" key={category.id}>
              <CategoryImage 
                src={category.image} 
                alt={`${category.name} category icon`} 
              />
              <CategoryName variant="h3">{category.name}</CategoryName>
            </CategoryBox>
          ))}
        </BoxContainer>
      </CategorySection>
    </Container>
  );
};

export default ShopCategory;
