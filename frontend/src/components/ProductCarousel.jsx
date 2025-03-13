import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductCarousel = () => {
  const images = [
    { id: '1', image: '/images/slider1.jpg', name: 'Product 1', price: 1000 },
    { id: '2', image: '/images/slider2.jpg', name: 'Product 2', price: 2000 },
    { id: '3', image: '/images/slider3.jpg', name: 'Product 3', price: 3000 },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className='relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg'>
      <div className='relative w-full h-[450px]'>
        {images.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={`Image of ${product.name}`}
                className='w-full h-full object-cover'
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition'
        onClick={prevSlide}
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition'
        onClick={nextSlide}
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots Indicator */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? 'bg-blue-500 scale-125' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
