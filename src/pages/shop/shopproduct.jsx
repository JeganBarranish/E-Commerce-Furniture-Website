import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Container,
  Link,
  styled
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import StarIcon from '@mui/icons-material/Star';
import proimg1 from '../../images/product-1.png';
import proimg2 from '../../images/product-2.png';
import proimg3 from '../../images/product-3.png';
import proimg4 from '../../images/product-4.png';
import proimg5 from '../../images/product-5.png';
import proimg6 from '../../images/product-6.png';
import proimg7 from '../../images/product-7.png';
import proimg8 from '../../images/product-8.png';


const ProductSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const ProductContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: '#f0e8e4',
  borderRadius: '3rem',
  padding: theme.spacing(2),
  margin: '0 auto', 
  width: '100%', 
}));

const ProductCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#f5eeeb',
  borderRadius: '2rem',
  border: '0.1rem solid #caab9f',
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxWidth: '100%', 
  margin: '0 auto', 
  '&:hover .product-icons': {
    top: 0,
  },
  '&:hover .product-image': {
    transform: 'scale(1.2)',
  },
}));

const IconsOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '-100%',
  left: 0,
  height: '30rem',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(0.5),
  background: 'rgba(242, 242, 242, 0.7)',
  zIndex: 10,
  transition: 'top 0.3s ease',
}));

const ProductIcon = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#e1cec7',
  color: '#5e473e',
  width: '5rem',
  height: '5rem',
  '&:hover': {
    backgroundColor: '#5e473e',
    color: '#e1cec7',
  },
}));

const ProductImage = styled(CardMedia)(({ theme }) => ({
  height: '25rem',
  width: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
}));

const ProductContent = styled(CardContent)(({ theme }) => ({
  padding: '1.5rem 2rem',
  width: '100%',
}));

const Price = styled(Typography)(({ theme }) => ({
  fontSize: '1.7rem',
  color: '#b58d7e',
}));

const ProductName = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  color: '#5e473e',
  padding: '0.5rem 0',
}));

const StarRating = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.7rem',
}));

const GoldStar = styled(StarIcon)(({ theme }) => ({
  color: 'gold',
  fontSize: '1.7rem',
}));

const RatingCount = styled(Typography)(({ theme }) => ({
  color: '#b58d7e',
  marginLeft: theme.spacing(1),
}));

const TitleUnderline = styled(Box)(({ theme }) => ({
  borderBottom: '2px solid #5e473e',
  marginBottom: theme.spacing(3),
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
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

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.2rem',
  color: '#5e473e',
  fontWeight: 700,
  textTransform: 'capitalize',
}));


const products = [
  {
    id: 1,
    image: proimg1,
    price: "RS.1400",
    name: "modern furniture",
    rating: 5,
    reviews: 50
  },
  {
    id: 2,
    image: proimg2,
    price: "RS.1250",
    name: "modern furniture",
    rating: 5,
    reviews: 50
  },
  {
    id: 3,
    image: proimg3,
    price: "RS.1400",
    name: "modern furniture",
    rating: 5,
    reviews: 50
  },
  {
    id: 4,
    image: proimg4,
    price: "RS.1500",
    name: "modern furniture",
    rating: 5,
    reviews: 50
  },
  {
    id: 5,
    image: proimg5,
    price: "RS.1800",
    name: "modern furniture",
    rating: 5,
    reviews: 50
  },
  {
    id: 6,
    image: proimg6,
    price: "RS.2000",
    name: "modern furniture",
    rating: 5,
    reviews: 50
  },
  {
    id: 7,
    image: proimg7,
    price: "RS.1350",
    name: "modern furniture",
    rating: 5,
    reviews: 50
  },
  {
    id: 8,
    image: proimg8,
    price: "RS.1950",
    name: "modern furniture",
    rating: 5,
    reviews: 50
  },
  {
    id: 9,
    image: proimg3,
    price: "RS.1950",
    name: "modern furniture",
    rating: 5,
    reviews: 50
  },
  {
    id: 10,
    image: proimg1,
    price: "RS.1950",
    name: "modern furniture",
    rating: 5,
    reviews: 50
  }
];


const ProductsSection = () => {
  return (
    <ProductSection component="section" className="products">
      <Container maxWidth="lg"> {/* Using a larger container */}
        <TitleContainer>
          <Title variant="h1">Our Products</Title>
          <ViewAllLink href="#">View All &gt;&gt;</ViewAllLink>
        </TitleContainer>
        <TitleUnderline />
        <ProductContainer container spacing={3}> {/* Increased spacing */}
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}  key={product.id}> {/* Responsive grid adjustments */}
              <Box sx={{ 
                height: '100%', 
                display: 'flex', 
                justifyContent: 'center' 
              }}>
                <ProductCard sx={{ width: '100%' }}> {/* Ensure full width */}
                  <IconsOverlay className="product-icons">
                    <ProductIcon>
                      <ShoppingCartOutlinedIcon sx={{ fontSize: '2rem' }} />
                    </ProductIcon>
                    <ProductIcon>
                      <FavoriteBorderIcon sx={{ fontSize: '2rem' }} />
                    </ProductIcon>
                    <ProductIcon>
                      <RemoveRedEyeOutlinedIcon sx={{ fontSize: '2rem' }} />
                    </ProductIcon>
                  </IconsOverlay>

                  <ProductImage
                    className="product-image"
                    image={product.image}
                    title={product.name}
                  />

                  <ProductContent>
                    <Price>{product.price}</Price>
                    <ProductName>{product.name}</ProductName>
                    <StarRating>
                      {[...Array(product.rating)].map((_, index) => (
                        <GoldStar key={index} />
                      ))}
                      <RatingCount>({product.reviews})</RatingCount>
                    </StarRating>
                  </ProductContent>
                </ProductCard>
              </Box>
            </Grid>
          ))}
        </ProductContainer>
      </Container>
    </ProductSection>
  );
};

export default ProductsSection;