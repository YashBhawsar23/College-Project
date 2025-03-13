// import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Rating from './Rating';

// const Product = ({ product }) => {
//   return (
//     <Card className='my-3 p-3 rounded'>
//       <Link to={`/product/${product._id}`}>
//         <Card.Img src={product.image} variant='top' />
//       </Link>

//       <Card.Body>
//         <Link to={`/product/${product._id}`}>
//           <Card.Title as='div' className='product-title'>
//             <strong>{product.name}</strong>
//           </Card.Title>
//         </Link>

//         <Card.Text as='div'>
//           <Rating
//             value={product.rating}
//             text={`${product.numReviews} reviews`}
//           />
//         </Card.Text>

//         <Card.Text as='h3'>₹{product.price}</Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Product;

import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden p-4'>
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-64 object-cover rounded-md hover:opacity-80 transition'
        />
      </Link>

      <div className='p-4'>
        <Link to={`/product/${product._id}`}>
          <h2 className='text-lg font-semibold hover:text-blue-600 transition'>
            {product.name}
          </h2>
        </Link>

        <div className='mt-2'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>

        <p className='text-xl font-bold text-gray-800 mt-2'>₹{product.price}</p>
      </div>
    </div>
  );
};

export default Product;
