// import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
// import { FaShoppingCart, FaUser } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate, Link } from 'react-router-dom';
// import { useLogoutMutation } from '../slices/usersApiSlice';
// import { logout } from '../slices/authSlice';
// import SearchBox from './SearchBox';
// import logo from '../assets/logo.png';
// import { resetCart } from '../slices/cartSlice';

// const Header = () => {
//   const { cartItems } = useSelector((state) => state.cart);
//   const { userInfo } = useSelector((state) => state.auth);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [logoutApiCall] = useLogoutMutation();

//   const logoutHandler = async () => {
//     try {
//       await logoutApiCall().unwrap();
//       dispatch(logout());
//       // NOTE: here we need to reset cart state for when a user logs out so the next
//       // user doesn't inherit the previous users cart and shipping
//       dispatch(resetCart());
//       navigate('/login');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <header>
//       <Navbar
//         style={{ backgroundColor: '#242f65' }}
//         variant='dark'
//         expand='lg'
//         collapseOnSelect
//       >
//         <Container>
//           <Navbar.Brand as={Link} to='/'>
//             {/* <img src={logo} alt='Swaggin' /> */}
//             <b>Swaggin</b>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' />
//           <Navbar.Collapse id='basic-navbar-nav'>
//             <Nav className='ms-auto'>
//               <SearchBox />
//               <Nav.Link as={Link} to='/cart' className='white'>
//                 <FaShoppingCart /> Cart
//                 {cartItems && cartItems.length > 0 && (
//                   <Badge pill bg='success' style={{ marginLeft: '5px' }}>
//                     {cartItems.reduce((a, c) => a + c.qty, 0)}
//                   </Badge>
//                 )}
//               </Nav.Link>
//               {userInfo ? (
//                 <>
//                   <NavDropdown title={userInfo.name} id='username'>
//                     <NavDropdown.Item as={Link} to='/profile'>
//                       Profile
//                     </NavDropdown.Item>
//                     <NavDropdown.Item onClick={logoutHandler}>
//                       Logout
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </>
//               ) : (
//                 <Nav.Link as={Link} to='/login' className='white'>
//                   <FaUser /> Sign Up
//                 </Nav.Link>
//               )}

//               {/* Admin Links */}
//               {userInfo && userInfo.isAdmin && (
//                 <NavDropdown title='Admin' id='adminmenu'>
//                   <NavDropdown.Item as={Link} to='/admin/productlist'>
//                     Products
//                   </NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to='/admin/orderlist'>
//                     Orders
//                   </NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to='/admin/userlist'>
//                     Users
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;

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

  return (
    <header className='bg-[#242f65] text-white shadow-md'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        <Link to='/' className='text-2xl font-bold'>
          Swaggin
        </Link>

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
            <div className='relative group'>
              <button className='flex items-center space-x-2'>
                <span>{userInfo.name}</span>
                <FaUser />
              </button>
              <div className='absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded-md shadow-lg hidden group-hover:block'>
                <Link
                  to='/profile'
                  className='block px-4 py-2 hover:bg-gray-200'
                >
                  Profile
                </Link>
                <button
                  onClick={logoutHandler}
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
            <div className='relative group'>
              <button className='flex items-center space-x-2'>
                <span>Admin</span>
              </button>
              <div className='absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded-md shadow-lg hidden group-hover:block'>
                <Link
                  to='/admin/productlist'
                  className='block px-4 py-2 hover:bg-gray-200'
                >
                  Products
                </Link>
                <Link
                  to='/admin/orderlist'
                  className='block px-4 py-2 hover:bg-gray-200'
                >
                  Orders
                </Link>
                <Link
                  to='/admin/userlist'
                  className='block px-4 py-2 hover:bg-gray-200'
                >
                  Users
                </Link>
              </div>
            </div>
          )}
        </div>

        <button className='md:hidden text-2xl'>&#9776;</button>
      </div>
    </header>
  );
};

export default Header;
