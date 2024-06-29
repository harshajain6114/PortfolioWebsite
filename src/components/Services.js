import React from 'react';
import featureIcon1 from '../images/feature1.png';
import featureIcon2 from '../images/feature2.png';
import featureIcon3 from '../images/feature3.png';
import featureIcon4 from '../images/feature4.webp';
import './Services.css'; // Import your CSS file for styling

const Features = () => {
  const features = [
    { icon: featureIcon1, title: 'AI', description: 'Unlock the power of artificial intelligence.' },
    { icon: featureIcon2, title: 'IoT', description: 'Connect everything with the Internet of Things.' },
    { icon: featureIcon3, title: 'Data Analytics', description: 'Gain insights from your data with advanced analytics.' },
    { icon: featureIcon4, title: 'Cloud Computing', description: 'Scale your infrastructure with cloud computing.' }
  ];

  return (
    <div id="services" className="services-container">
      <div className="services-heading">
        <h1>SERVICES</h1>
      </div>
      <div className="features-section">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <img src={feature.icon} alt={`Feature ${index + 1}`} className="feature-image" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;





