// import { Link } from 'react-router-dom';
// import { Carousel, Image } from 'react-bootstrap';
// import Message from './Message';
// import { useGetTopProductsQuery } from '../slices/productsApiSlice';

// const ProductCarousel = () => {
//   const { data: products, isLoading, error } = useGetTopProductsQuery();

//   return isLoading ? null : error ? (
//     <Message variant='danger'>{error?.data?.message || error.error}</Message>
//   ) : (
//     <Carousel pause='hover' className='bg-primary mb-4'>
//       {products.map((product) => (
//         <Carousel.Item key={product._id}>
//           <Link to={`/product/${product._id}`}>
//             <Image src={product.image} alt={product.name} fluid />
//             <Carousel.Caption className='carousel-caption'>
//               <h2 className='text-white text-right'>
//                 {product.name} (₹{product.price})
//               </h2>
//             </Carousel.Caption>
//           </Link>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default ProductCarousel;

/////////////////////////// Main Part////////////////////////////////////////

// import { Link } from 'react-router-dom';
// import { Carousel, Image } from 'react-bootstrap';

// const ProductCarousel = () => {
//   // Define a static array of images located in the public/images directory
//   const images = [
//     {
//       id: '1',
//       image: '/images/slider2.jpg',
//       price: 1000,
//     },
//     {
//       id: '2',
//       image: '/images/slider3.jpg',
//       name: 'Product 2',
//       price: 2000,
//     },
//     {
//       id: '3',
//       image: '/images/slider1.jpg',
//       name: 'Product 3',
//       price: 3000,
//     },
//   ];

//   return (
//     <Carousel pause='hover' className='bg-primary mb-4'>
//       {images.map((product) => (
//         <Carousel.Item key={product.id}>
//           <Link to={`/product/${product.id}`}>
//             <Image
//               src={product.image}
//               alt={`Image of ${product.name}`}
//               className='d-block w-100%'
//               style={{ maxHeight: '450px', objectFit: 'cover' }}
//             />
//             {/* <Carousel.Caption className='carousel-caption'>
//               <h2 className='text-white text-right'>
//                 {product.name} (₹{product.price})
//               </h2>
//             </Carousel.Caption> */}
//           </Link>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default ProductCarousel;

/////////////////////////// Main Part////////////////////////////////////////

// import { Link } from 'react-router-dom';
// import { Carousel, Image, Container, Row, Col } from 'react-bootstrap';

// const ProductCarousel = () => {
//   // Define a static array of images located in the public/images directory
//   const images = [
//     {
//       id: '1',
//       image: '/images/top1.jpg',
//       name: 'Product 1',
//       price: 1000,
//     },
//     {
//       id: '2',
//       image: '/images/top2.jpg',
//       name: 'Product 2',
//       price: 2000,
//     },
//     {
//       id: '3',
//       image: '/images/top3.jpg',
//       name: 'Product 3',
//       price: 3000,
//     },
//   ];

//   return (
//     <Carousel pause='hover' className='bg-primary mb-4'>
//       {images.map((product) => (
//         <Carousel.Item key={product.id}>
//           <Container fluid>
//             <Row>
//               <Col md={8}>
//                 <Link to={`/product/${product.id}`}>
//                   <Image
//                     src={product.image}
//                     alt={`Image of ${product.name}`}
//                     className='d-block w-100'
//                     style={{ maxHeight: '450px', objectFit: 'cover' }}
//                   />
//                 </Link>
//               </Col>
//               <Col
//                 md={4}
//                 className='d-flex align-items-center justify-content-center'
//               >
//                 <Carousel.Caption className='carousel-caption text-right'>
//                   <h2 className='text-white'>
//                     {product.name} (₹{product.price})
//                   </h2>
//                 </Carousel.Caption>
//               </Col>
//             </Row>
//           </Container>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default ProductCarousel;

import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';

const ProductCarousel = () => {
  const images = [
    { id: '1', image: '/images/slider1.jpg', name: 'Product 1', price: 1000 },
    { id: '2', image: '/images/slider2.jpg', name: 'Product 2', price: 2000 },
    { id: '3', image: '/images/slider3.jpg', name: 'Product 3', price: 3000 },
  ];

  return (
    <Carousel
      pause='hover'
      className='mb-4' // Removed bg-primary
      style={{ width: '100%', margin: '0 auto' }} // Added inline styles
    >
      {images.map((product) => (
        <Carousel.Item key={product.id}>
          <Link to={`/product/${product.id}`}>
            <Image
              src={product.image}
              alt={`Image of ${product.name}`}
              className='d-block w-100'
              style={{ height: '450px', objectFit: 'cover' }} // Adjusted image height
            />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
