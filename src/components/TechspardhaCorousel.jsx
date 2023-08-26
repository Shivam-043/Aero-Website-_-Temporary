import React, { useEffect, useState} from 'react';
import { techspardhaimg, techspardhabg2 , techspardhabg } from '../assets';

const TechspardhaCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    techspardhaimg,
    techspardhabg2,
    techspardhaimg,
  ];
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <div className="relative">
          <div className="relative top-0 left-0 w-full h-full">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slider Image ${index}`}
                className={`w-[100vw] h-[80vh] object-cover transition-opacity rounded-xl ${
                  index === currentIndex ? 'flex' : 'hidden'
                }`}
              />
            ))}
          </div>
        </div>
      );
  };

export default TechspardhaCarousel;
