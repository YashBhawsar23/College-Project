// import { useState, useRef, useEffect } from 'react';
// import { FaShoppingCart, FaUser } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate, Link } from 'react-router-dom';
// import { useLogoutMutation } from '../slices/usersApiSlice';
// import { logout } from '../slices/authSlice';
// import SearchBox from './SearchBox';
// import { resetCart } from '../slices/cartSlice';

// const Navbar = () => {
//   const { cartItems } = useSelector((state) => state.cart);
//   const { userInfo } = useSelector((state) => state.auth);

//   const [userMenuOpen, setUserMenuOpen] = useState(false);
//   const [adminMenuOpen, setAdminMenuOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const userMenuRef = useRef(null);
//   const adminMenuRef = useRef(null);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [logoutApiCall] = useLogoutMutation();

//   const logoutHandler = async () => {
//     try {
//       await logoutApiCall().unwrap();
//       dispatch(logout());
//       dispatch(resetCart());
//       navigate('/auth');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
//         setUserMenuOpen(false);
//       }
//       if (
//         adminMenuRef.current &&
//         !adminMenuRef.current.contains(event.target)
//       ) {
//         setAdminMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const navItems = [
//     { name: 'NEW ARRIVALS', link: '/' },
//     // { name: 'MEN', link: '/' },
//     { name: 'SALE', link: '/' },
//     { name: 'COLLECTIONS', link: '/' },
//   ];

//   return (
//     <nav className='bg-orange-50 shadow-md font-sans'>
//       <div className='container mx-auto flex justify-between items-center py-4 px-6'>
//         {/* Logo */}
//         <Link to='/' className='text-2xl font-bold tracking-wider'>
//           Swaggin
//         </Link>

//         {/* SearchBox */}
//         <div className='hidden md:block w-1/3'>
//           <SearchBox />
//         </div>

//         {/* Desktop Menu */}
//         <div className='hidden md:flex items-center space-x-6'>
//           <Link to='/cart' className='flex items-center space-x-2'>
//             <FaShoppingCart />
//             <span>Cart</span>
//             {cartItems?.length > 0 && (
//               <span className='bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full'>
//                 {cartItems.reduce((a, c) => a + c.qty, 0)}
//               </span>
//             )}
//           </Link>

//           {userInfo ? (
//             <div ref={userMenuRef} className='relative'>
//               <button
//                 className='flex items-center space-x-2'
//                 onClick={() => {
//                   setUserMenuOpen(!userMenuOpen);
//                   setAdminMenuOpen(false);
//                 }}
//               >
//                 <span>{userInfo.name}</span>
//                 <FaUser />
//               </button>
//               {userMenuOpen && (
//                 <div className='absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded-md shadow-lg z-10'>
//                   <Link
//                     to='/profile'
//                     className='block px-4 py-2 hover:bg-gray-200'
//                     onClick={() => setUserMenuOpen(false)}
//                   >
//                     Profile
//                   </Link>
//                   <button
//                     onClick={logoutHandler}
//                     className='block w-full text-left px-4 py-2 hover:bg-gray-200'
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link to='/auth' className='flex items-center space-x-2'>
//               <FaUser />
//               <span>Sign In</span>
//             </Link>
//           )}

//           {userInfo?.isAdmin && (
//             <div ref={adminMenuRef} className='relative'>
//               <button
//                 className='flex items-center space-x-2'
//                 onClick={() => {
//                   setAdminMenuOpen(!adminMenuOpen);
//                   setUserMenuOpen(false);
//                 }}
//               >
//                 <span>Admin</span>
//               </button>
//               {adminMenuOpen && (
//                 <div className='absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded-md shadow-lg z-10'>
//                   <Link
//                     to='/admin/productlist'
//                     className='block px-4 py-2 hover:bg-gray-200'
//                     onClick={() => setAdminMenuOpen(false)}
//                   >
//                     Products
//                   </Link>
//                   <Link
//                     to='/admin/orderlist'
//                     className='block px-4 py-2 hover:bg-gray-200'
//                     onClick={() => setAdminMenuOpen(false)}
//                   >
//                     Orders
//                   </Link>
//                   <Link
//                     to='/admin/userlist'
//                     className='block px-4 py-2 hover:bg-gray-200'
//                     onClick={() => setAdminMenuOpen(false)}
//                   >
//                     Users
//                   </Link>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className='md:hidden text-2xl'
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           &#9776;
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className='md:hidden bg-white px-6 pb-4'>
//           <div className='flex flex-col space-y-4'>
//             <SearchBox />
//             <Link to='/cart' className='flex items-center space-x-2'>
//               <FaShoppingCart />
//               <span>Cart</span>
//               {cartItems?.length > 0 && (
//                 <span className='bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full'>
//                   {cartItems.reduce((a, c) => a + c.qty, 0)}
//                 </span>
//               )}
//             </Link>
//             {userInfo ? (
//               <>
//                 <Link to='/profile' className='flex items-center space-x-2'>
//                   <FaUser />
//                   <span>Profile</span>
//                 </Link>
//                 <button
//                   onClick={logoutHandler}
//                   className='flex items-center space-x-2'
//                 >
//                   <span>Logout</span>
//                 </button>
//               </>
//             ) : (
//               <Link to='/auth' className='flex items-center space-x-2'>
//                 <FaUser />
//                 <span>Sign In</span>
//               </Link>
//             )}
//             {userInfo?.isAdmin && (
//               <div className='pt-2 border-t border-gray-300'>
//                 <p className='font-semibold mb-2'>Admin</p>
//                 <div className='flex flex-col space-y-2'>
//                   <Link to='/admin/productlist' className='block'>
//                     Products
//                   </Link>
//                   <Link to='/admin/orderlist' className='block'>
//                     Orders
//                   </Link>
//                   <Link to='/admin/userlist' className='block'>
//                     Users
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Navigation Menu */}
//       <div className='bg-gray-100 py-2'>
//         <div className='container mx-auto flex justify-center space-x-6'>
//           {navItems.map((item, index) => (
//             <Link
//               key={index}
//               to={item.link}
//               className='text-gray-700 hover:text-gray-900'
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useRef, useEffect } from 'react';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBox from './SearchBox';
import { resetCart } from '../slices/cartSlice';

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const userMenuRef = useRef(null);
  const adminMenuRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart());
      navigate('/auth');
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
      if (
        adminMenuRef.current &&
        !adminMenuRef.current.contains(event.target)
      ) {
        setAdminMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'NEW ARRIVALS', link: '/' },
    { name: 'SALE', link: '/' },
    { name: 'COLLECTIONS', link: '/' },
  ];

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        when: 'afterChildren',
      },
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
  };

  const mobileItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const navItemVariants = {
    initial: { y: -5, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { color: '#f97316' },
  };

  return (
    <motion.nav
      className='bg-orange-50 shadow-md font-sans sticky top-0 z-50'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        {/* Logo */}
        <Link to='/' className='text-2xl font-bold tracking-wider'>
          Swaggin
        </Link>

        {/* SearchBox */}
        <motion.div
          className='hidden md:block w-1/3'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <SearchBox />
        </motion.div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center space-x-6'>
          <Link to='/cart' className='flex items-center space-x-2'>
            <FaShoppingCart />
            <span>Cart</span>
            {cartItems?.length > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className='bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full'
              >
                {cartItems.reduce((a, c) => a + c.qty, 0)}
              </motion.span>
            )}
          </Link>

          {userInfo ? (
            <div ref={userMenuRef} className='relative'>
              <motion.button
                className='flex items-center space-x-2'
                onClick={() => {
                  setUserMenuOpen(!userMenuOpen);
                  setAdminMenuOpen(false);
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{userInfo.name}</span>
                <FaUser />
              </motion.button>

              <AnimatePresence>
                {userMenuOpen && (
                  <motion.div
                    className='absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded-md shadow-lg z-10 overflow-hidden'
                    variants={menuVariants}
                    initial='closed'
                    animate='open'
                    exit='closed'
                  >
                    <motion.div whileHover={{ backgroundColor: '#f3f4f6' }}>
                      <Link
                        to='/profile'
                        className='block px-4 py-2'
                        onClick={() => setUserMenuOpen(false)}
                      >
                        Profile
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ backgroundColor: '#f3f4f6' }}>
                      <button
                        onClick={logoutHandler}
                        className='block w-full text-left px-4 py-2'
                      >
                        Logout
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link to='/auth' className='flex items-center space-x-2'>
              <FaUser />
              <span>Sign In</span>
            </Link>
          )}

          {userInfo?.isAdmin && (
            <div ref={adminMenuRef} className='relative'>
              <motion.button
                className='flex items-center space-x-2'
                onClick={() => {
                  setAdminMenuOpen(!adminMenuOpen);
                  setUserMenuOpen(false);
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Admin</span>
              </motion.button>

              <AnimatePresence>
                {adminMenuOpen && (
                  <motion.div
                    className='absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded-md shadow-lg z-10 overflow-hidden'
                    variants={menuVariants}
                    initial='closed'
                    animate='open'
                    exit='closed'
                  >
                    <motion.div whileHover={{ backgroundColor: '#f3f4f6' }}>
                      <Link
                        to='/admin/productlist'
                        className='block px-4 py-2'
                        onClick={() => setAdminMenuOpen(false)}
                      >
                        Products
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ backgroundColor: '#f3f4f6' }}>
                      <Link
                        to='/admin/orderlist'
                        className='block px-4 py-2'
                        onClick={() => setAdminMenuOpen(false)}
                      >
                        Orders
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ backgroundColor: '#f3f4f6' }}>
                      <Link
                        to='/admin/userlist'
                        className='block px-4 py-2'
                        onClick={() => setAdminMenuOpen(false)}
                      >
                        Users
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className='md:hidden text-2xl'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className='md:hidden bg-white px-6 pb-4 overflow-hidden'
            variants={mobileMenuVariants}
            initial='closed'
            animate='open'
            exit='closed'
          >
            <div className='flex flex-col space-y-4'>
              <motion.div variants={mobileItemVariants}>
                <SearchBox />
              </motion.div>

              <motion.div variants={mobileItemVariants}>
                <Link to='/cart' className='flex items-center space-x-2'>
                  <FaShoppingCart />
                  <span>Cart</span>
                  {cartItems?.length > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className='bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full'
                    >
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </motion.span>
                  )}
                </Link>
              </motion.div>

              {userInfo ? (
                <>
                  <motion.div variants={mobileItemVariants}>
                    <Link to='/profile' className='flex items-center space-x-2'>
                      <FaUser />
                      <span>Profile</span>
                    </Link>
                  </motion.div>
                  <motion.div variants={mobileItemVariants}>
                    <button
                      onClick={logoutHandler}
                      className='flex items-center space-x-2'
                    >
                      <span>Logout</span>
                    </button>
                  </motion.div>
                </>
              ) : (
                <motion.div variants={mobileItemVariants}>
                  <Link to='/auth' className='flex items-center space-x-2'>
                    <FaUser />
                    <span>Sign In</span>
                  </Link>
                </motion.div>
              )}

              {userInfo?.isAdmin && (
                <motion.div
                  className='pt-2 border-t border-gray-300'
                  variants={mobileItemVariants}
                >
                  <p className='font-semibold mb-2'>Admin</p>
                  <div className='flex flex-col space-y-2'>
                    <Link to='/admin/productlist' className='block'>
                      Products
                    </Link>
                    <Link to='/admin/orderlist' className='block'>
                      Orders
                    </Link>
                    <Link to='/admin/userlist' className='block'>
                      Users
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Menu */}
      <motion.div
        className='bg-gray-100 py-2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className='container mx-auto flex justify-center space-x-6'>
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              variants={navItemVariants}
              initial='initial'
              animate='animate'
              whileHover='hover'
              transition={{ delay: index * 0.1 }}
            >
              <Link to={item.link} className='text-gray-700 font-medium'>
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
