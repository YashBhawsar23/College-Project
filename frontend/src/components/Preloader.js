// // src/components/Preloader.js
// import React from 'react';

// const Preloader = () => {
//   return (
//     <div style={styles.container}>
//       <div style={styles.spinner}></div>
//       <p style={styles.text}>This app is hosted on a free service and might take a few seconds to start. Please wait.</p>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     backgroundColor: '#f9f9f9',
//     fontFamily: 'Arial, sans-serif',
//   },
//   spinner: {
//     margin: '20px',
//     border: '6px solid #f3f3f3',
//     borderTop: '6px solid #3498db',
//     borderRadius: '50%',
//     width: '40px',
//     height: '40px',
//     animation: 'spin 1s linear infinite',
//   },
//   text: {
//     fontSize: '16px',
//     color: '#555',
//   },
//   '@keyframes spin': {
//     '0%': { transform: 'rotate(0deg)' },
//     '100%': { transform: 'rotate(360deg)' },
//   },
// };

// export default Preloader;

const Preloader = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <div className='w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin'></div>
      <p className='mt-4 text-gray-600 text-center px-4'>
        This app is hosted on a free service and might take a few seconds to
        start. Please wait.
      </p>
    </div>
  );
};

export default Preloader;
