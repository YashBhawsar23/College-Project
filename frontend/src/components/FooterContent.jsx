// import { Container, Card, Row, Col } from 'react-bootstrap';

// const Footer2 = () => {
//   return (
//     <div className='footerList'>
//       <Card className='bg  rounded-0'>
//         <Row>
//           <Col xs={6} md={3}>
//             <ul>
//               <li>
//                 <a href='/'>About Us</a>
//               </li>
//               <li>
//                 <a href='/'>Online Store</a>
//               </li>
//               <li>
//                 <a href='/'>Blog</a>
//               </li>
//               <li>
//                 <a href='/'>Contact Us</a>
//               </li>
//             </ul>
//           </Col>
//           <Col xs={6} md={3}>
//             <ul>
//               <li>
//                 <a href='/'>Login / Register</a>
//               </li>
//               <li>
//                 <a href='/'>Your Cart</a>
//               </li>
//               <li>
//                 <a href='/'>Wishlist Items</a>
//               </li>
//               <li>
//                 <a href='/'>Your Checkout</a>
//               </li>
//             </ul>
//           </Col>
//           <Col xs={6} md={3}>
//             <ul>
//               <li>
//                 <a href='/'>FAQs</a>
//               </li>
//               <li>
//                 <a href='/'>Term Of Service</a>
//               </li>
//               <li>
//                 <a href='/'>Privacy Policy</a>
//               </li>
//               <li>
//                 <a href='/'>Returns</a>
//               </li>
//             </ul>
//           </Col>
//           <Col xs={6} md={3}>
//             <ul>
//               <li>
//                 <a href='/'>
//                   <b>SWAGGIN</b>
//                 </a>
//               </li>
//               <li>
//                 <a href='/'>40021 Vijay Nagar , Indore</a>
//               </li>
//               <li>
//                 <a href='/'>83XXXXXX92</a>
//               </li>
//               <li>
//                 <a href='/'>Yas@Gmail.Com</a>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Card>
//     </div>
//   );
// };

// export default Footer2;

const Footer2 = () => {
  return (
    <div className='bg-gray-900 text-white py-8'>
      <div className='max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6'>
        <div>
          <ul className='space-y-2'>
            <li>
              <a href='/' className='hover:text-gray-400'>
                About Us
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-400'>
                Online Store
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-400'>
                Blog
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-400'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className='space-y-2'>
            <li>
              <a href='/' className='hover:text-gray-400'>
                Login / Register
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-400'>
                Your Cart
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-400'>
                Wishlist Items
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-400'>
                Your Checkout
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className='space-y-2'>
            <li>
              <a href='/' className='hover:text-gray-400'>
                FAQs
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-400'>
                Terms Of Service
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-400'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-400'>
                Returns
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className='space-y-2'>
            <li>
              <a href='/' className='font-bold text-lg'>
                SWAGGIN
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-400'>
                40021 Vijay Nagar, Indore
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-400'>
                83XXXXXX92
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-400'>
                Yas@Gmail.Com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
