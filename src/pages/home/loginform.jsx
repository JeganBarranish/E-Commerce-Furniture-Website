import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  TextField,
  Typography,
  styled,
  Link
} from '@mui/material';


const LoginDialog = styled(Dialog)(({ theme }) => ({
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

const LoginForm = styled('form')(({ theme }) => ({
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

const StyledCheckbox = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiTypography-root': {
    fontSize: '1.5rem',
    color: '#b58d7e',
  },
  '& .MuiCheckbox-root': {
    color: '#caab9f',
    '&.Mui-checked': {
      color: '#5e473e',
    }
  }
}));

const LoginButton = styled(Button)(({ theme }) => ({
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
    '&:hover': {
      textDecoration: 'underline',
    }
  }
}));


const LoginFormComponent = ({ active = false, onClose }) => {
 
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);


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
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    setEmailError('');
    setPasswordError('');
    
    let isValid = true;
    
    if (!validateEmail(email)) {
      setEmailError('Invalid email format. Please enter a valid email.');
      isValid = false;
    }
    
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long and contain at least one letter and one number.');
      isValid = false;
    }
    
    if (isValid) {
      if (rememberMe) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password); 
      } else {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userPassword');
      }
  
      alert('Login successful!');
      handleClose();
    }
  };
  

  return (
    <>
      {/* Only show this button when not being controlled by parent */}
      {active === undefined && (
        <Button 
          id="login-btn" 
          onClick={handleOpen}
          sx={{ 
            backgroundColor: '#caab9f', 
            color: 'white',
            '&:hover': { backgroundColor: '#b58d7e' }
          }}
        >
          Login
        </Button>
      )}
      
      {/* Login Form Dialog */}
      <LoginDialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="login-dialog-title"
      >
        <LoginForm onSubmit={handleSubmit}>
          <FormTitle variant="h3" id="login-dialog-title">
            login form
          </FormTitle>
          
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
          
          <StyledCheckbox
            control={
              <Checkbox 
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            }
            label="remember me"
          />
          
          <LoginButton type="submit" variant="contained">
            login now
          </LoginButton>
          
          <FormText>
            forget password? <Link href="#">click here</Link>
          </FormText>
          
          <FormText>
            don't have an account? <Link href="#">create now</Link>
          </FormText>
        </LoginForm>
      </LoginDialog>
    </>
  );
};

export default LoginFormComponent;