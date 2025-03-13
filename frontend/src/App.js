// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Container } from 'react-bootstrap';
// import { Outlet } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { logout } from './slices/authSlice';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Footer2 from './components/FooterContent';

// const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const expirationTime = localStorage.getItem('expirationTime');
//     if (expirationTime) {
//       const currentTime = new Date().getTime();

//       if (currentTime > expirationTime) {
//         dispatch(logout());
//       }
//     }
//   }, [dispatch]);

//   return (
//     <>
//       <div className='home-bg'>
//         <ToastContainer />
//         <Header />
//         <main className='py-3'>
//           <Container>
//             <Outlet />
//           </Container>
//         </main>
//         <Footer2 />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default App;

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { logout } from './slices/authSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer2 from './components/FooterContent';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const expirationTime = localStorage.getItem('expirationTime');
    if (expirationTime) {
      const currentTime = new Date().getTime();
      if (currentTime > expirationTime) {
        dispatch(logout());
      }
    }
  }, [dispatch]);

  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <ToastContainer />
      <Header />
      <main className='flex-grow py-6 max-w-screen-xl mx-auto px-4'>
        <Outlet />
      </main>
      <Footer2 />
      <Footer />
    </div>
  );
};

export default App;
