import React, { useState } from 'react';
import {
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
  Link,
  Snackbar,
  Alert
} from '@mui/material';
import { useAuth } from '../../context/AuthContext';

const SignupDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    width: '35rem',
    maxWidth: '95%',
    background: '#F0E8E4',
    padding: theme.spacing(2),
    borderRadius: '3rem',
    margin: '2%',
    boxShadow: '0 0 0 100vw rgba(0, 0, 0, 0.5)',
  }
}));

const SignupForm = styled('form')(({ theme }) => ({
  padding: '1.7rem',
  border: '0.1rem solid #caab9f',
  borderRadius: '2rem',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.2rem',
  paddingBottom: '1rem',
  color: '#5e473e',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: '0.7rem 0',
  '& .MuiOutlinedInput-root': {
    borderRadius: '0.75rem',
    backgroundColor: 'transparent',
    color: '#5e473e',
    fontSize: '1.5rem',
    '& fieldset': {
      borderColor: '#caab9f',
    },
    '&:hover fieldset': {
      borderColor: '#caab9f',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#caab9f',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#845f51',
    fontSize: '1.5rem',
  },
  '& .MuiInputBase-input': {
    padding: '1rem 1.2rem',
  }
}));

const SignupButton = styled(Button)(({ theme }) => ({
  width: '100%',
  margin: '1rem 0',
  padding: '0.8rem',
  backgroundColor: '#caab9f',
  color: 'white',
  fontSize: '1.5rem',
  textTransform: 'none',
  borderRadius: '0.75rem',
  '&:hover': {
    backgroundColor: '#b58d7e',
  }
}));

const FormText = styled(Typography)(({ theme }) => ({
  paddingTop: '1rem',
  fontSize: '1.4rem',
  color: '#b58d7e',
  '& a': {
    color: '#5e473e',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    }
  }
}));

const SignupFormComponent = ({ active = false, onClose, onSwitchToLogin }) => {
  const { signup } = useAuth();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [serverError, setServerError] = useState('');
  const [successOpen, setSuccessOpen] = useState(false);

  const isOpen = active !== undefined ? active : open;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setOpen(false);
    }
    setName('');
    setEmail('');
    setPassword('');
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setServerError('');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setServerError('');
    
    let isValid = true;
    
    if (!name.trim()) {
      setNameError('Name is required');
      isValid = false;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Invalid email format. Please enter a valid email.');
      isValid = false;
    }
    
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long and contain at least one letter and one number.');
      isValid = false;
    }
    
    if (!isValid) return;

    try {
      await signup(name.trim(), email, password);
      setSuccessOpen(true);
      setTimeout(() => {
        handleClose();
      }, 1500);
    } catch (err) {
      setServerError(err.message || 'Signup failed');
    }
  };

  const handleSwitchToLogin = () => {
    handleClose();
    if (onSwitchToLogin) {
      onSwitchToLogin();
    }
  };

  return (
    <>
      {active === undefined && (
        <Button 
          id="signup-btn" 
          onClick={handleOpen}
          sx={{ 
            backgroundColor: '#caab9f', 
            color: 'white',
            '&:hover': { backgroundColor: '#b58d7e' }
          }}
        >
          Sign Up
        </Button>
      )}
      
      <SignupDialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="signup-dialog-title"
      >
        <SignupForm onSubmit={handleSubmit}>
          <FormTitle variant="h3" id="signup-dialog-title">
            signup form
          </FormTitle>
          
          <StyledTextField
            id="name"
            placeholder="enter your name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!nameError}
            helperText={nameError}
            FormHelperTextProps={{
              sx: { fontSize: '1.2rem', color: 'error.main' }
            }}
          />
          
          <StyledTextField
            id="email"
            placeholder="enter your email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
            FormHelperTextProps={{
              sx: { fontSize: '1.2rem', color: 'error.main' }
            }}
          />
          
          <StyledTextField
            id="password"
            type="password"
            placeholder="enter your password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
            FormHelperTextProps={{
              sx: { fontSize: '1.2rem', color: 'error.main' }
            }}
          />
          
          <SignupButton type="submit" variant="contained">
            signup now
          </SignupButton>

          {serverError && (
            <Typography
              sx={{ color: 'red', fontSize: '1.2rem', marginTop: '0.5rem' }}
            >
              {serverError}
            </Typography>
          )}
          
          <FormText>
            already have an account? <Link onClick={handleSwitchToLogin}>login now</Link>
          </FormText>
        </SignupForm>
      </SignupDialog>

      <Snackbar
        open={successOpen}
        autoHideDuration={3000}
        onClose={() => setSuccessOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSuccessOpen(false)}
          severity="success"
          sx={{
            width: '100%',
            fontSize: '1.2rem',
            backgroundColor: '#4caf50',
            color: 'white',
          }}
        >
          Account created successfully! Welcome!
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignupFormComponent;

