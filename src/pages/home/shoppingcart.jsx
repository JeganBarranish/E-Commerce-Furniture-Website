import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  IconButton, 
  styled, 
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const CartContainer = styled(Box)(({ theme, active }) => ({
  position: 'fixed',
  top: '1.5%',
  bottom: '1.5%',
  right: active ? 0 : '-101%',
  zIndex: 1000,
  width: '35rem',
  maxWidth: '90vw',
  backgroundColor: '#f0e8e4',
  padding: '2rem',
  paddingTop: '8rem',
  overflowY: 'scroll',
  margin: '2%',
  borderRadius: '3rem',
  transition: '0.4s linear',
  '&::-webkit-scrollbar': {
    width: 0,
  },
  boxShadow: active ? '0 0 0 100vw rgba(0, 0, 0, 0.5)' : 'none',
  [theme.breakpoints.down('sm')]: {
    width: '90vw',
    margin: '1%',
    borderRadius: '2rem',
    padding: '1.5rem',
    paddingTop: '6rem',
  },
}));

const CartItemBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  position: 'relative',
  marginBottom: '1rem',
  padding: '0.75rem',
  backgroundColor: '#faf7f6',
  borderRadius: '1rem',
  [theme.breakpoints.down('sm')]: {
    gap: '1rem',
    padding: '0.5rem',
  }
}));

const CartItemImage = styled('img')(({ theme }) => ({
  borderRadius: '0.65rem',
  height: '8rem',
  [theme.breakpoints.down('sm')]: {
    height: '6rem',
  }
}));

const CloseIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  right: '1rem',
  transform: 'translateY(-50%)',
  color: '#5e473e',
  '&:hover': {
    color: '#9e7464',
  },
}));

const ItemTitle = styled(Typography)(({ theme }) => ({
  color: '#5e473e',
  fontSize: '1.8rem',
  paddingBottom: '0.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  }
}));

const ItemPrice = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  color: '#b58d7e',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.3rem',
  }
}));

const TotalText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '2rem',
  padding: '1rem 0',
  color: '#845f51',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.7rem',
  }
}));

const CheckoutButton = styled(Button)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  backgroundColor: '#845f51',
  color: '#fff',
  padding: '0.7rem',
  borderRadius: '0.5rem',
  fontSize: '1.2rem',
  textTransform: 'lowercase',
  '&:hover': {
    backgroundColor: '#5e473e',
  },
}));


const initialCartItems = [
  {
    id: 1,
    image: "/api/placeholder/160/128",
    title: "modern furniture",
    quantity: 1,
    price: "RS.1400"
  },
  {
    id: 2,
    image: "/api/placeholder/160/128",
    title: "modern furniture",
    quantity: 1,
    price: "RS.1500"
  },
  {
    id: 3,
    image: "/api/placeholder/160/128",
    title: "modern furniture",
    quantity: 1,
    price: "RS.1500"
  },
  {
    id: 4,
    image: "/api/placeholder/160/128",
    title: "modern furniture",
    quantity: 1,
    price: "RS.1800"
  }
];


export default function ShoppingCart({ active = false, onClose }) {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
     
      const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const total = `RS.${calculateTotal()}`;

  return (
    <CartContainer active={active}>
      {cartItems.map((item) => (
        <CartItemBox key={item.id}>
          <CloseIconButton onClick={() => removeItem(item.id)}>
            <CloseIcon fontSize={isMobile ? "medium" : "large"} />
          </CloseIconButton>
          <CartItemImage src={item.image} alt={item.title} />
          <Box>
            <ItemTitle variant="h3">{item.title}</ItemTitle>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ItemPrice component="span">{item.quantity}</ItemPrice>
              <ItemPrice component="span" sx={{ margin: '0 1rem' }}>x</ItemPrice>
              <ItemPrice component="span">{item.price}</ItemPrice>
            </Box>
          </Box>
        </CartItemBox>
      ))}

      <TotalText variant="h3">
        total : <Box component="span" sx={{ color: '#5e473e' }}>{total}</Box>
      </TotalText>
      
      <CheckoutButton>
        checkout cart
      </CheckoutButton>
    </CartContainer>
  );
}