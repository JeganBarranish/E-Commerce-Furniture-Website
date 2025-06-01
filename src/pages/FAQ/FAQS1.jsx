import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Box, 
  InputBase, 
  IconButton, 
  TextField, 
  Button, 
  Grid,
  ThemeProvider,
  createTheme
} from '@mui/material';

// Material UI Icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import StoreIcon from '@mui/icons-material/Store';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

// Creating custom theme for the brown color (#845f51)
const theme = createTheme({
  palette: {
    primary: {
      main: '#845f51',
    },
    text: {
      primary: '#845f51',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(0, 0, 0, 0.125)',
          boxShadow: 'none',
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: 'auto',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          margin: '12px 0',
          '&.Mui-expanded': {
            margin: '12px 0',
          },
        },
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
          marginBottom: -1,
          minHeight: 56,
          '&.Mui-expanded': {
            minHeight: 56,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '16px',
          borderTop: '1px solid rgba(0, 0, 0, 0.125)',
        },
      },
    },
  },
});


const FAQSection = ({ title, faqs }) => {
  return (
    <>
      <Typography variant="h5" sx={{ ml: { xs: 2, md: 16 }, mt: 2, mb: 2 }}>
        {title}
      </Typography>
      
      <Box sx={{ maxWidth: 1000, mx: 'auto', my: 4 }}>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography sx={{ fontSize: 25 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {Array.isArray(faq.answer) ? (
                faq.answer.map((paragraph, idx) => (
                  <Typography key={idx} paragraph sx={{ fontSize: 20 }}>
                    {paragraph}
                  </Typography>
                ))
              ) : (
                <Typography>
                  {faq.answer}
                </Typography>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
};


export default function FurnishMeFAQ() {
  // Shopping FAQ data
  const shoppingFAQs = [
    {
      question: "How do I contact Room & Board if I have questions or want to place an order?",
      answer: [
        "Our expert Design Associates are ready to help at 800.301.9720. We are available seven days a week to answer your questions.",
        "Monday – Friday: 8 a.m. to 7 p.m. (CT)",
        "Saturday – Sunday: 10 a.m. to 5 p.m. (CT)"
      ]
    },
    {
      question: "Where are your stores located?",
      answer: "We have locations across the country, and more coming soon! Find a store"
    },
    {
      question: "What is a Design Associate?",
      answer: "Every person working in our stores and at our toll-free number is an expert Design Associate ready to help you create your ideal home. With first-hand product knowledge and a passion for design, our Design Associates will help you make choices that meet your needs and reflect your style. We know that selecting furniture for your home is very personal. We don't want you to feel pressured to make a purchase—that's why our Design Associates don't work on commission."
    },
    {
      question: "How do I pay* for my furniture?",
      answer: [
        "Credit cards: We accept VISA, MasterCard, Discover and American Express.",
        "Gift cards: Room & Board gift cards can be redeemed online, in our stores or by phone at 800.301.9720.",
        "Personal checks, money orders: Contact a Design Associate for more information at 800.301.9720.",
        "Affirm financing: Monthly payments available for U.S. customers using our financing partner, Affirm.",
        "*Please note that full payment is required to ship an order."
      ]
    }
  ];

  // Furniture Design FAQ data
  const designFAQs = [
    {
      question: "Who makes your furniture?",
      answer: "We design nearly all of our own products and then partner with small, family-owned companies around the U.S. to make our furniture and accessories. More than 90% of our products are manufactured in America using quality U.S. and imported materials. We believe this approach allows us to bring you the best craftsmanship and fastest delivery with the least environmental impact."
    },
    {
      question: "What if I don't see the exact furniture size, configuration or material I need?",
      answer: "We offer many ways to personalize or create your own furniture. For example, you can select from a wide variety of top materials for our tables, desks, nightstands and more. You can also create personalized cabinets and bookcases handcrafted to your measurements, and you can design your own sectional."
    },
    {
      question: "Can I use my box spring with one of your mattresses?",
      answer: "Our mattresses offer superior comfort and support without requiring a box spring. The result is a cleaner profile and a better night's sleep. For these reasons, we design all of our beds to accommodate a mattress only."
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, color: '#845f51' }}>
        {}
       

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <Typography variant="h4" sx={{ ml: { xs: 2, md: 5 }, mb: 3 }}>
            FurnishMe {'>'} FAQS
          </Typography>
          
          {/* Shopping with Furnify Section */}
          <FAQSection title="Shopping with Furnify" faqs={shoppingFAQs} />
          
          {/* Furniture Design and Construction Section */}
          <FAQSection title="Furniture Design and Construction" faqs={designFAQs} />
        </Container>

        {/* Footer */}
      </Box>
    </ThemeProvider>
  );
}