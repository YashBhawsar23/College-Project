import React from 'react';

const HeroSection = () => {
  return (
    <div className='relative overflow-hidden bg-white'>
      {/* Background Container */}
      <div className='absolute inset-0 z-0'>
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10' />

        {/* Optimized Background Image */}
        <img
          src='/images/Hero.JPG'
          alt='Fashion collection showcase'
          className='w-full h-full object-cover object-center'
        />
      </div>

      {/* Content Container */}
      <div className='relative z-20 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 min-h-[80vh] flex items-center'>
        <div className='w-full md:max-w-xl text-white'>
          <span className='inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6'>
            FOUNDED IN 2024, MADE IN INDIA
          </span>

          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6'>
            <span className='text-blue-500'>SWAGGIN</span> Your Style, Your
            Identity
          </h1>

          <p className='text-lg md:text-xl opacity-90 mb-6'>
            More than just a clothing brand—it's a vision, a passion, and a
            commitment to redefining fast fashion with a distinctly Indian
            identity.
          </p>

          <p className='text-white opacity-80 mb-8'>
            Swaggin was born out of a dream to create a global brand with Indian
            craftsmanship. Our founder recognized the growing demand for fast
            fashion and launched Swaggin to offer trendy, high-quality apparel
            that proudly bears the "Made in India" label.
          </p>

          {/* Uncomment buttons if needed
          <div className='flex flex-col sm:flex-row gap-4'>
            <button className='bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 text-sm md:text-base'>
              SHOP WOMEN
            </button>
            <button className='bg-transparent border border-white text-white font-medium px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 text-sm md:text-base'>
              SHOP MEN
            </button>
          </div> */}
        </div>
      </div>

      {/* Sale Notification Banner */}
      <div className='absolute bottom-0 left-0 right-0 bg-blue-600 text-white z-20'>
        <div className='max-w-6xl mx-auto px-4 py-3 text-center md:text-left md:flex items-center justify-between'>
          <p className='font-medium'>Limited Time: 30% Off New Arrivals</p>
          <a
            href='/'
            className='inline-block mt-2 md:mt-0 underline font-medium'
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
