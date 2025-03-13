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
    <div className='bg-orange-50 text-black py-8'>
      <div className='max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6'>
        <div>
          <ul className='space-y-2'>
            <li>
              <a href='/' className='hover:text-gray-900'>
                About Us
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-900'>
                Online Store
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-900'>
                Blog
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-900'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className='space-y-2'>
            <li>
              <a href='/' className='hover:text-gray-900'>
                Login / Register
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-900'>
                Your Cart
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-900'>
                Wishlist Items
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-900'>
                Your Checkout
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className='space-y-2'>
            <li>
              <a href='/' className='hover:text-gray-900'>
                FAQs
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-900'>
                Terms Of Service
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-900'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-900'>
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
              <a href='/' className='hover:text-gray-900'>
                40021 Vijay Nagar, Indore
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-900'>
                83XXXXXX92
              </a>
            </li>
            <li>
              <a href='/' className='hover:text-gray-900'>
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
