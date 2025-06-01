import React, { useState, useEffect } from 'react';
import bannerimg1 from '../../images/banner-1.jpg';
import bannerimg2 from '../../images/banner-2.jpg';
import bannerimg3 from '../../images/banner-3.jpg';

export default function BannerSection() {
  const [loginFormActive, setLoginFormActive] = useState(false);
  const [searchFormActive, setSearchFormActive] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  
  useEffect(() => {
    const handleScroll = () => {
      setSearchFormActive(false);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!emailRegex.test(email)) {
      alert("Invalid email format. Please enter a valid email.");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long and contain at least one letter and one number.");
      return;
    }

    alert("Login successful!");
    
  };

  
  const nextSlide = () => {

    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {

    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };


  const slides = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];

  return (
    <div className="w-full">
      <style jsx>{`
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

        section {
          padding: 3rem 9%;
        }

        .heading {
          background: #e1cec7;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 5rem;
          padding-bottom: 5rem;
          margin: 2%;
          border-radius: 3rem;
        }

        .heading h3 {
          font-size: 2.5rem;
          text-transform: uppercase;
          color: #5e473e;
        }

        .heading p {
          font-size: 2rem;
          color: #31231e;
        }

        .heading p a {
          color: #5e473e;
        }

        .heading p a:hover {
          color: #845f51;
        }

        .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 3rem;
          border-bottom: 0.1rem solid #5e473e;
          padding-bottom: 1.5rem;
        }

        .title span {
          font-size: 2.5rem;
          color: #5e473e;
        }

        .title a {
          font-size: 1.5rem;
          color: #b58d7e;
        }

        .title a:hover {
          transform: translateX(-3px);
          color: #9e7464;
        }

        .btn {
          display: inline-block;
          margin-top: 1rem;
          padding: 1rem 3rem;
          font-size: 1.7rem;
          letter-spacing: 1px;
          background: linear-gradient(135deg, #b58d7e, #845f51);
          color: #faf7f6;
          cursor: pointer;
          border-radius: 1rem;
        }

        .btn:hover {
          letter-spacing: 2px;
          background: linear-gradient(135deg, #945f51, #b58d7e);
        }

        .banner-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
          gap: 1.5rem;
        }

        .banner-container .banner {
          height: 25rem;
          overflow: hidden;
          position: relative;
          border-radius: 3rem;
        }

        .banner-container .banner img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .banner-container .banner:hover img {
          transform: scale(1.2);
        }

        .banner-container .banner .content {
          position: absolute;
          top: 50%;
          left: 2rem;
          transform: translateY(-50%);
        }

        .banner-container .banner .content span {
          font-size: 1.7rem;
          color: #b58d7e;
        }

        .banner-container .banner .content h3 {
          padding-top: .5rem;
          font-size: 2.2rem;
          color: #5e473e;
        }

        .banner-container .banner .content .btn {
          padding: .7rem 2.5rem;
        }
      `}</style>

      {/* Banner section starts */}
      <section className="banner-container">
        <div className="banner">
        <img src={bannerimg1} alt="Banner 1" />
          <div className="content">
            <span>limited offer</span>
            <h3>upto 50% off</h3>
            <a href="#" className="btn">shop now</a>
          </div>
        </div>

        <div className="banner">
        <img src={bannerimg2} alt="Banner 2" />
          <div className="content">
            <span>limited offer</span>
            <h3>upto 60% off</h3>
            <a href="#" className="btn">shop now</a>
          </div>
        </div>

        <div className="banner">
        <img src={bannerimg3} alt="Banner 3" />
          <div className="content">
            <span>limited offer</span>
            <h3>upto 70% off</h3>
            <a href="#" className="btn">shop now</a>
          </div>
        </div>
      </section>
      {/* Banner section ends */}
    </div>
  );
}