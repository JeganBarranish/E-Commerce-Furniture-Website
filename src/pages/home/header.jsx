import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import LoginFormComponent from './loginform';
import SignupFormComponent from './signupform'; 
import ShoppingCart from './shoppingcart'; 


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#f0e8e4',
  padding: '2rem 9%',
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  borderRadius: '0 0 2rem 2rem',
  boxShadow: 'none',
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  color: '#5e473e',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  fontFamily: "'Poppins', sans-serif",
  textTransform: 'capitalize',
}));

const SearchForm = styled('form')(({ theme, active }) => ({
  height: '5rem',
  width: '50rem',
  borderRadius: '0.75rem',
  backgroundColor: 'transparent',
  overflow: 'hidden',
  display: 'flex',
  background: '#f0e8e4',
  alignItems: 'center',
  border: '0.1rem solid #caab9f',
  '@media (max-width: 768px)': {
    position: 'absolute',
    top: active ? '115%' : '-115%',
    width: '90%',
    left: '5%',
    right: '5%',
    opacity: active ? 1 : 0,
    transition: '0.2s linear',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  height: '100%',
  width: '100%',
  padding: '0 1.2rem',
  fontSize: '1.6rem',
  color: '#5e473e',
  textTransform: 'none',
  background: 'transparent',
  fontFamily: "'Poppins', sans-serif",
  '&::placeholder': {
    color: '#5e473e',
    opacity: 1,
  },
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  fontSize: '2.2rem',
  padding: '0 1.7rem',
  cursor: 'pointer',
  color: '#5e473e',
  '&:hover': {
    color: '#9e7464',
  },
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: '2rem',
  fontSize: '2.5rem',
  cursor: 'pointer',
  color: '#5e473e',
  '&:hover': {
    color: '#9e7464',
  },
}));

const NavbarContainer = styled(Box)(({ theme, active }) => ({
  position: 'fixed',
  top: '1.5%',
  bottom: '1.5%',
  right: active ? 0 : '-101%',
  zIndex: 1000,
  width: '35rem',
  background: '#f0e8e4',
  display: 'flex',
  margin: '2%',
  borderRadius: '3rem',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  transition: '0.4s linear',
  boxShadow: active ? '0 0 0 100vw rgba(0, 0, 0, 0.5)' : 'none',
}));

const NavLink = styled(Typography)(({ theme }) => ({
  margin: '1rem 0',
  fontSize: '2.5rem',
  color: '#5e473e',
  cursor: 'pointer',
  fontFamily: "'Poppins', sans-serif",
  textTransform: 'capitalize',
  '&:hover': {
    color: '#9e7464',
  },
}));

const Closer = styled(IconButton)(({ theme, active }) => ({
  position: 'fixed',
  top: '5rem',
  right: '4rem',
  fontSize: '5rem',
  cursor: 'pointer',
  zIndex: 10000,
  color: '#5e473e',
  animation: active ? 'rotate 0.4s linear 0.4s backwards' : 'none',
  display: active ? 'block' : 'none',
  '&:hover': {
    color: '#9e7464',
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(360deg)',
      opacity: 0,
    },
  },
}));

export default function Header() {
  const [searchFormActive, setSearchFormActive] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false);
  const [loginFormActive, setLoginFormActive] = useState(false);
  const [signupFormActive, setSignupFormActive] = useState(false);
  const [closerActive, setCloserActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSearchFormActive(false);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLoginClick = () => {
    setCloserActive(true);
    setLoginFormActive(!loginFormActive);
  };

  const handleMenuClick = () => {
    setCloserActive(true);
    setNavbarActive(!navbarActive);
  };

  const handleCloserClick = () => {
    setNavbarActive(false);
    setLoginFormActive(false);
    setSignupFormActive(false);
    setCloserActive(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
   
    console.log("Search submitted");
  };


  const handleLoginFormClose = () => {
    setLoginFormActive(false);
    setCloserActive(false);
  };

  const handleSignupFormClose = () => {
    setSignupFormActive(false);
    setCloserActive(false);
  };

  const handleSwitchToSignup = () => {
    setLoginFormActive(false);
    setSignupFormActive(true);
  };

  const handleSwitchToLogin = () => {
    setSignupFormActive(false);
    setLoginFormActive(true);
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap');
          
          * {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            outline: none;
            border: none;
            text-decoration: none;
            text-transform: capitalize;
            transition: .2s linear;
          }
          
          body {
            background-color: #faf7f6;
          }
          
          html {
            font-size: 62.5%;
            overflow-x: hidden;
          }
          
          html::-webkit-scrollbar {
            width: 1rem;
          }
          
          html::-webkit-scrollbar-track {
            background: #eae0dc;
          }
          
          html::-webkit-scrollbar-thumb {
            background: #b58d7e;
          }
        `}
      </style>

      <StyledAppBar position="sticky">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: 0 }}>
          <Logo component="a" href="/" sx={{ textDecoration: 'none' }}>
            <StoreIcon sx={{ fontSize: 'inherit', mr: 0.5 }} /> FurnishMe
          </Logo>

          <SearchForm active={searchFormActive} onSubmit={handleSearchSubmit}>
            <StyledInputBase
              placeholder="search here..."
              inputProps={{ 'aria-label': 'search' }}
              id="search-box"
            />
            <SearchButton type="submit" aria-label="search">
              <SearchIcon sx={{ fontSize: 'inherit' }} />
            </SearchButton>
          </SearchForm>

          <IconsContainer>
            <StyledIconButton aria-label="menu" onClick={handleMenuClick}>
              <MenuIcon sx={{ fontSize: 'inherit' }} />
            </StyledIconButton>
            
            <StyledIconButton 
              aria-label="search" 
              onClick={() => setSearchFormActive(!searchFormActive)}
              sx={{ 
                display: { xs: 'flex', md: 'none' }
              }}
            >
              <SearchIcon sx={{ fontSize: 'inherit' }} />
            </StyledIconButton>
            
            <StyledIconButton aria-label="cart">
              <ShoppingCartIcon sx={{ fontSize: 'inherit' }} />
            </StyledIconButton>
            
            <StyledIconButton aria-label="login" onClick={handleLoginClick}>
              <PersonIcon sx={{ fontSize: 'inherit' }} />
            </StyledIconButton>
          </IconsContainer>
        </Toolbar>
      </StyledAppBar>

      <Closer active={closerActive} onClick={handleCloserClick} aria-label="close">
        ×
      </Closer>

      <NavbarContainer active={navbarActive}>
        <NavLink component="a" href="/">home</NavLink>
        <NavLink component="a" href="/shop">shop</NavLink>
        <NavLink component="a" href="/about">about</NavLink>
        <NavLink component="a" href="/team">team</NavLink>
        <NavLink component="a" href="/blog">blog</NavLink>
        <NavLink component="a" href="/contact">contact</NavLink>
      </NavbarContainer>

      <LoginFormComponent active={loginFormActive} onClose={handleLoginFormClose} onSwitchToSignup={handleSwitchToSignup} />
      
      <SignupFormComponent active={signupFormActive} onClose={handleSignupFormClose} onSwitchToLogin={handleSwitchToLogin} />
    </>
  );
}