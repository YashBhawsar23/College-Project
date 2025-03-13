// import React from 'react';
// import { Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
//   return (
//     <Nav className='justify-content-center mb-4'>
//       <Nav.Item>
//         {step1 ? (
//           <Nav.Link as={Link} to='/login'>
//             Sign In
//           </Nav.Link>
//         ) : (
//           <Nav.Link disabled>Sign In</Nav.Link>
//         )}
//       </Nav.Item>

//       <Nav.Item>
//         {step2 ? (
//           <Nav.Link as={Link} to='/shipping'>
//             Shipping
//           </Nav.Link>
//         ) : (
//           <Nav.Link disabled>Shipping</Nav.Link>
//         )}
//       </Nav.Item>

//       <Nav.Item>
//         {step3 ? (
//           <Nav.Link as={Link} to='/payment'>
//             Payment
//           </Nav.Link>
//         ) : (
//           <Nav.Link disabled>Payment</Nav.Link>
//         )}
//       </Nav.Item>

//       <Nav.Item>
//         {step4 ? (
//           <Nav.Link as={Link} to='/placeorder'>
//             Place Order
//           </Nav.Link>
//         ) : (
//           <Nav.Link disabled>Place Order</Nav.Link>
//         )}
//       </Nav.Item>
//     </Nav>
//   );
// };

// export default CheckoutSteps;

import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <nav className='flex justify-center mb-4 space-x-4'>
      <StepLink to='/login' label='Sign In' enabled={step1} />
      <StepLink to='/shipping' label='Shipping' enabled={step2} />
      <StepLink to='/payment' label='Payment' enabled={step3} />
      <StepLink to='/placeorder' label='Place Order' enabled={step4} />
    </nav>
  );
};

const StepLink = ({ to, label, enabled }) => {
  return enabled ? (
    <Link
      to={to}
      className='px-4 py-2 text-blue-600 border-b-2 border-blue-600 hover:text-blue-800 transition'
    >
      {label}
    </Link>
  ) : (
    <span className='px-4 py-2 text-gray-400 border-b-2 border-gray-300 cursor-not-allowed'>
      {label}
    </span>
  );
};

export default CheckoutSteps;
