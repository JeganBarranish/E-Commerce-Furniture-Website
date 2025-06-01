import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './pages/home/header';
import Slider from './pages/home/slider';
import Banner from './pages/home/banner';
import Footer from './pages/home/footer';
import LoginForm from './pages/home/loginform';
import Shop from './pages/shop/shop';
import About from './pages/aboutus/about';
import FAQSS from './pages/FAQ/FAQS';


function App() {
  return (
    <Router>
     <Header />  
      <Routes>
      
        <Route path="/" element={
          <div className="App">
           
           
            <div style={{ height: '30px' }} />
            <div style={{ padding: '0 40px' }}>
              <Slider />
            </div>
            <Banner />
            
          </div>
        } />

        

<Route path="/shop" element={<Shop />} />
<Route path="/aboutus" element={<About />} />
<Route path="/FAQS" element={<FAQSS />} />


        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
