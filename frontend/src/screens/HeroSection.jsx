// import React from 'react';

// const HeroSection = () => {
//   return (
//     <div className='relative overflow-hidden bg-white'>
//       {/* Background Container */}
//       <div className='absolute inset-0 z-0'>
//         {/* Gradient Overlay */}
//         <div className='absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10' />

//         {/* Optimized Background Image */}
//         <img
//           src='/images/Hero.JPG'
//           alt='Fashion collection showcase'
//           className='w-full h-full object-cover object-center'
//         />
//       </div>

//       {/* Content Container */}
//       <div className='relative z-20 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 min-h-[80vh] flex items-center'>
//         <div className='w-full md:max-w-xl text-white'>
//           <span className='inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6'>
//             FOUNDED IN 2024, MADE IN INDIA
//           </span>

//           <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6'>
//             <span className='text-blue-500'>SWAGGIN</span> Your Style, Your
//             Identity
//           </h1>

//           <p className='text-lg md:text-xl opacity-90 mb-6'>
//             More than just a clothing brand—it's a vision, a passion, and a
//             commitment to redefining fast fashion with a distinctly Indian
//             identity.
//           </p>

//           <p className='text-white opacity-80 mb-8'>
//             Swaggin was born out of a dream to create a global brand with Indian
//             craftsmanship. Our founder recognized the growing demand for fast
//             fashion and launched Swaggin to offer trendy, high-quality apparel
//             that proudly bears the "Made in India" label.
//           </p>

//           {/* Uncomment buttons if needed
//           <div className='flex flex-col sm:flex-row gap-4'>
//             <button className='bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 text-sm md:text-base'>
//               SHOP WOMEN
//             </button>
//             <button className='bg-transparent border border-white text-white font-medium px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 text-sm md:text-base'>
//               SHOP MEN
//             </button>
//           </div> */}
//         </div>
//       </div>

//       {/* Sale Notification Banner */}

//       <div className='absolute bottom-0 left-0 right-0 bg-black text-white z-20'>
//         <div className='max-w-6xl mx-auto px-4 py-3 text-center md:text-left md:flex items-center justify-between'>
//           <p className='font-medium'>Limited Time: 30% Off New Arrivals</p>
//           <a
//             href='/'
//             className='inline-block mt-2 md:mt-0 underline font-medium'
//           >
//             Shop Now
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const HeroSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const bannerVariants = {
    hidden: { y: 100 },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 1.2,
      },
    },
  };

  const backgroundVariants = {
    hidden: { scale: 1.1 },
    visible: {
      scale: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className='relative overflow-hidden bg-white'>
      {/* Background Container */}
      <div className='absolute inset-0 z-0'>
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10' />

        {/* Optimized Background Image with Subtle Zoom Effect */}
        <motion.div
          variants={backgroundVariants}
          initial='hidden'
          animate='visible'
          className='w-full h-full'
        >
          <img
            src='/images/Hero.JPG'
            alt='Fashion collection showcase'
            className='w-full h-full object-cover object-center'
          />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className='relative z-20 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 min-h-[80vh] flex items-center'>
        <motion.div
          className='w-full md:max-w-xl text-white'
          variants={containerVariants}
          initial='hidden'
          animate={controls}
        >
          <motion.span
            className='inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6'
            variants={itemVariants}
            whileHover={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              transition: { duration: 0.2 },
            }}
          >
            FOUNDED IN 2024, MADE IN INDIA
          </motion.span>

          <motion.h1
            className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6'
            variants={itemVariants}
          >
            <motion.span
              className='text-blue-500'
              whileHover={{
                color: '#60a5fa',
                transition: { duration: 0.2 },
              }}
            >
              SWAGGIN
            </motion.span>{' '}
            Your Style, Your Identity
          </motion.h1>

          <motion.p
            className='text-lg md:text-xl opacity-90 mb-6'
            variants={itemVariants}
          >
            More than just a clothing brand—it's a vision, a passion, and a
            commitment to redefining fast fashion with a distinctly Indian
            identity.
          </motion.p>

          <motion.p
            className='text-white opacity-80 mb-8'
            variants={itemVariants}
          >
            Swaggin was born out of a dream to create a global brand with Indian
            craftsmanship. Our founder recognized the growing demand for fast
            fashion and launched Swaggin to offer trendy, high-quality apparel
            that proudly bears the "Made in India" label.
          </motion.p>

          <motion.div
            className='flex flex-col sm:flex-row gap-4'
            variants={itemVariants}
          >
            {/* <motion.button
              className='bg-white text-black font-medium px-8 py-3 rounded-full hover:bg- hover:text-white transition duration-300 text-sm md:text-base'
              whileHover={{
                scale: 1.05,
                backgroundColor: '#3b82f6',
                color: 'white',
              }}
              whileTap={{ scale: 0.95 }}
            >
              SHOP WOMEN
            </motion.button>
            <motion.button
              className='bg-transparent border border-white text-white font-medium px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 text-sm md:text-base'
              whileHover={{
                scale: 1.05,
                backgroundColor: 'white',
                color: 'black',
              }}
              whileTap={{ scale: 0.95 }}
            >
              SHOP MEN
            </motion.button> */}
          </motion.div>
        </motion.div>
      </div>

      {/* Sale Notification Banner */}
      <motion.div
        className='absolute bottom-0 left-0 right-0 bg-black text-white z-20'
        variants={bannerVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='max-w-6xl mx-auto px-4 py-3 text-center md:text-left md:flex items-center justify-between'>
          <motion.p className='font-medium' whileHover={{ scale: 1.05 }}>
            Limited Time: 30% Off New Arrivals
          </motion.p>
          <motion.a
            href='/'
            className='inline-block mt-2 md:mt-0 underline font-medium'
            whileHover={{
              scale: 1.05,
              color: '#3b82f6',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
