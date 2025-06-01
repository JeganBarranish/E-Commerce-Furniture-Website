import React from 'react';
import servimg1 from '../../images/serv-1.png';
import servimg2 from '../../images/serv-2.png';
import servimg3 from '../../images/serv-3.png';

const ServicesSection = () => {

  const services = [
    {
      id: 1,
      image: servimg1,
      title: "Product Selling",
      description: "Crafted With Excellence And Designed For Comfort, Our Sofas Redefine Luxury. Experience Unmatched Quality And Elegance In Every Detail."
    },
    {
      id: 2,
      image: servimg2,
      title: "Product Designing",
      description: "Crafted With Precision And Innovation, Our Designs Blend Elegance And Functionality To Redefine Modern Living."
    },
    {
      id: 3,
      image: servimg3,
      title: "24 / 7 Support",
      description: "We're Here For You Anytime! Reach Out To Us 24/7 For Assistance, Inquiries, Or Support."
    }
  ];

  return (
    <>
      <style>
        {`
          .services-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            font-family: 'Arial', sans-serif;
          }
          
          .services-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
          }
          
          .services-title {
            font-size: 28px;
            color: #5e473e;
            font-weight: bold;
          }
          
          .services-view-all {
            color: #a88575;
            text-decoration: none;
            font-size: 16px;
          }
          
          .services-divider {
            height: 1px;
            background-color: #e0e0e0;
            margin-bottom: 30px;
          }
          
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
          }
          
          .service-card {
            background-color: #f7f2f0;
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .service-icon {
            width: 80px;
            height: 80px;
            margin-bottom: 20px;
          }
          
          .service-title {
            font-size: 22px;
            color: #5e473e;
            margin-bottom: 15px;
            font-weight: bold;
          }
          
          .service-description {
            color: #a88575;
            line-height: 1.6;
            margin-bottom: 25px;
            font-size: 15px;
          }
          
          .service-button {
            background-color: #a88575;
            color: white;
            border: none;
            padding: 10px 25px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
            text-decoration: none;
            margin-top: auto;
          }
          
          .service-button:hover {
            background-color: #8d6e60;
          }
          
          /* Responsive styles */
          @media (max-width: 768px) {
            .services-grid {
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            }
          }
          
          @media (max-width: 480px) {
            .services-grid {
              grid-template-columns: 1fr;
            }
            
            .services-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 10px;
            }
          }
        `}
      </style>

      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <a href="#" className="services-view-all">View All &gt;&gt;</a>
        </div>
        
        <div className="services-divider"></div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.title} className="service-icon" />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-button">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection;