import { useState, useRef, useEffect } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import SearchBox from './SearchBox';
import { resetCart } from '../slices/cartSlice';

const Header = () => {
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
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  // Handle click outside to close dropdowns
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

  return (
    <header className='bg-[#242f65] text-white shadow-md'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        <Link to='/' className='text-2xl font-bold'>
          Swaggin
        </Link>

        {/* Desktop menu */}
        <div className='hidden md:flex items-center space-x-6'>
          <SearchBox />

          <Link to='/cart' className='flex items-center space-x-2'>
            <FaShoppingCart />
            <span>Cart</span>
            {cartItems?.length > 0 && (
              <span className='bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded-full'>
                {cartItems.reduce((a, c) => a + c.qty, 0)}
              </span>
            )}
          </Link>

          {userInfo ? (
            <div ref={userMenuRef} className='relative group'>
              <button
                className='flex items-center space-x-2'
                onClick={() => {
                  setUserMenuOpen(!userMenuOpen);
                  setAdminMenuOpen(false);
                }}
                onMouseEnter={() => setUserMenuOpen(true)}
              >
                <span>{userInfo.name}</span>
                <FaUser />
              </button>
              <div
                className={`absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded-md shadow-lg z-10 transition-opacity duration-150 ${
                  userMenuOpen ? 'opacity-100' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setUserMenuOpen(true)}
                onMouseLeave={() => setUserMenuOpen(false)}
              >
                <Link
                  to='/profile'
                  className='block px-4 py-2 hover:bg-gray-200'
                  onClick={() => setUserMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    setUserMenuOpen(false);
                    logoutHandler();
                  }}
                  className='block w-full text-left px-4 py-2 hover:bg-gray-200'
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link to='/login' className='flex items-center space-x-2'>
              <FaUser />
              <span>Sign Up</span>
            </Link>
          )}

          {userInfo?.isAdmin && (
            <div ref={adminMenuRef} className='relative group'>
              <button
                className='flex items-center space-x-2'
                onClick={() => {
                  setAdminMenuOpen(!adminMenuOpen);
                  setUserMenuOpen(false);
                }}
                onMouseEnter={() => setAdminMenuOpen(true)}
              >
                <span>Admin</span>
              </button>
              <div
                className={`absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded-md shadow-lg z-10 transition-opacity duration-150 ${
                  adminMenuOpen ? 'opacity-100' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setAdminMenuOpen(true)}
                onMouseLeave={() => setAdminMenuOpen(false)}
              >
                <Link
                  to='/admin/productlist'
                  className='block px-4 py-2 hover:bg-gray-200'
                  onClick={() => setAdminMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  to='/admin/orderlist'
                  className='block px-4 py-2 hover:bg-gray-200'
                  onClick={() => setAdminMenuOpen(false)}
                >
                  Orders
                </Link>
                <Link
                  to='/admin/userlist'
                  className='block px-4 py-2 hover:bg-gray-200'
                  onClick={() => setAdminMenuOpen(false)}
                >
                  Users
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className='md:hidden text-2xl'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-[#242f65] px-6 pb-4'>
          <div className='flex flex-col space-y-4'>
            <SearchBox />

            <Link
              to='/cart'
              className='flex items-center space-x-2'
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaShoppingCart />
              <span>Cart</span>
              {cartItems?.length > 0 && (
                <span className='bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded-full'>
                  {cartItems.reduce((a, c) => a + c.qty, 0)}
                </span>
              )}
            </Link>

            {userInfo ? (
              <>
                <Link
                  to='/profile'
                  className='flex items-center space-x-2'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaUser />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    logoutHandler();
                  }}
                  className='flex items-center space-x-2'
                >
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to='/login'
                className='flex items-center space-x-2'
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaUser />
                <span>Sign Up</span>
              </Link>
            )}

            {userInfo?.isAdmin && (
              <>
                <div className='pt-2 border-t border-gray-700'>
                  <p className='font-semibold mb-2'>Admin</p>
                  <div className='flex flex-col space-y-2 pl-4'>
                    <Link
                      to='/admin/productlist'
                      className='block'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Products
                    </Link>
                    <Link
                      to='/admin/orderlist'
                      className='block'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Orders
                    </Link>
                    <Link
                      to='/admin/userlist'
                      className='block'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Users
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
