import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  TextField, 
  Button, 
  Link, 
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  ArrowForwardIos, 
  Facebook, 
  Twitter, 
  Instagram, 
  LinkedIn, 
  Pinterest 
} from '@mui/icons-material';


const FooterContainer = styled(Box)(({ theme }) => ({
  margin: '2%',
  borderRadius: '3rem',
  background: '#f0e8e4',
  padding: '2rem 4rem',
  width: '96%',
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
  fontSize: '2.2rem',
  color: '#5e473e',
  padding: '1rem 0',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
  paddingLeft: 0, 
}));

const FooterText = styled(Typography)(({ theme }) => ({
  fontSize: '1.6rem',
  color: '#b58d7e',
  padding: '1rem 0',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  fontSize: '1.4rem',
  color: '#5e473e',
  padding: '0.5rem 0',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  '&:hover': {
    color: '#9e7464',
    '& .MuiSvgIcon-root': {
      paddingRight: '2rem',
      transition: 'padding-right 0.3s ease',
    }
  },
}));

const LinkIcon = styled(ArrowForwardIos)(({ theme }) => ({
  paddingRight: '0.5rem',
  color: '#5e473e',
  fontSize: '1.7rem',
  marginRight: '0.5rem',
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  paddingRight: '0.5rem',
  color: '#5e473e',
  fontSize: '1.7rem',
  display: 'flex',
  alignItems: 'center',
}));

const EmailInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  margin: '0.7rem 0',
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'transparent',
    borderRadius: '0.75rem',
    fontSize: '1.6rem',
    color: '#5e473e',
    '& fieldset': {
      borderColor: '#caab9f',
      borderWidth: '0.1rem',
    },
    '&:hover fieldset': {
      borderColor: '#caab9f',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#5e473e',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#5e473e',
    fontSize: '1.6rem',
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#5e473e',
  color: 'white',
  padding: '0.8rem 1.5rem',
  fontSize: '1.6rem',
  borderRadius: '0.75rem',
  textTransform: 'lowercase',
  '&:hover': {
    backgroundColor: '#9e7464',
  },
}));

const CreditSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '2rem',
  color: '#5e473e',
  background: '#f0e8e4',
  margin: '2%',
  borderRadius: '3rem',
  padding: '1.5rem',
  width: '96%',
}));


const ColumnWrapper = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}));

const Column = styled(Grid)(({ theme }) => ({
  flex: '1 1 0',
  padding: '0',
}));


const LinkContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

function Footer() {

  const isSmallScreen = useMediaQuery('(max-width:768px)');
  const isMediumScreen = useMediaQuery('(max-width:991px)');
  
  return (
    <>
      <FooterContainer component="footer">
        <Container maxWidth="xl" sx={{ px: 0 }}>
          <ColumnWrapper container spacing={0}>
            <Column item>
              <FooterHeading variant="h3">Quick Links</FooterHeading>
              <FooterLink href="/">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>›</Box>
                  home
                </LinkContainer>
              </FooterLink>
              <FooterLink href="/shop">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>›</Box>
                  shop
                </LinkContainer>
              </FooterLink>
              <FooterLink href="/aboutus" >
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>›</Box>
                  about us
                </LinkContainer>
              </FooterLink>
              <FooterLink href="/FAQS">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>›</Box>
                  FAQS
                </LinkContainer>
              </FooterLink>
              <FooterLink href="/">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>›</Box>
                  Return Policy
                </LinkContainer>
              </FooterLink>
              <FooterLink href="/">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>›</Box>
                  contact us
                </LinkContainer>
              </FooterLink>
              <FooterLink href="/">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>›</Box>
                  Privacy Policy
                </LinkContainer>
              </FooterLink>
              <FooterLink href="/">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>›</Box>
                  Terms and Conditions
                </LinkContainer>
              </FooterLink>
            </Column>

            <Column item>
              <FooterHeading variant="h3">Extra Links</FooterHeading>
              <FooterLink href="#">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>›</Box>
                  my order
                </LinkContainer>
              </FooterLink>
              <FooterLink href="#">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>›</Box>
                  my wishlist
                </LinkContainer>
              </FooterLink>
              <FooterLink href="#">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>›</Box>
                  my account
                </LinkContainer>
              </FooterLink>
              <FooterLink href="#">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>›</Box>
                  my favorite
                </LinkContainer>
              </FooterLink>
              <FooterLink href="#">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>›</Box>
                  terms of user
                </LinkContainer>
              </FooterLink>
            </Column>

            <Column item>
              <FooterHeading variant="h3">Extra Links</FooterHeading>
              <FooterLink href="#">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>
                    <Facebook fontSize="small" />
                  </Box>
                  facebook
                </LinkContainer>
              </FooterLink>
              <FooterLink href="#">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>
                    <Twitter fontSize="small" />
                  </Box>
                  twitter
                </LinkContainer>
              </FooterLink>
              <FooterLink href="#">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>
                    <Instagram fontSize="small" />
                  </Box>
                  instagram
                </LinkContainer>
              </FooterLink>
              <FooterLink href="#">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>
                    <LinkedIn fontSize="small" />
                  </Box>
                  linkedin
                </LinkContainer>
              </FooterLink>
              <FooterLink href="#">
                <LinkContainer>
                  <Box component="span" sx={{ width: '20px', textAlign: 'center', display: 'inline-block' }}>
                    <Pinterest fontSize="small" />
                  </Box>
                  pinterest
                </LinkContainer>
              </FooterLink>
            </Column>

            <Column item>
              <FooterHeading variant="h3">Newsletter</FooterHeading>
              <FooterText>Subscribe For Latest Updates</FooterText>
              <Box component="form" noValidate autoComplete="off">
                <EmailInput
                  placeholder="Enter Your Email"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
                <SubmitButton variant="contained" fullWidth>
                  subscribe
                </SubmitButton>
              </Box>
            </Column>
          </ColumnWrapper>
        </Container>
      </FooterContainer>

      <CreditSection component="section">
        <Typography variant="body1" sx={{ fontSize: 'inherit' }}>
          created by MarkMayandi | all rights reserved!
        </Typography>
      </CreditSection>
    </>
  );
}

export default Footer;  