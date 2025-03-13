import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <div className='relative bg-white rounded-lg overflow-hidden shadow-md p-3'>
      {/* Product Image */}
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-[350px] object-cover rounded-md hover:opacity-90 transition'
        />
      </Link>

      {/* Product Info */}
      <div className='mt-3'>
        <Link to={`/product/${product._id}`}>
          <h2 className='text-md font-semibold text-gray-800 hover:text-blue-600 transition'>
            {product.name}
          </h2>
        </Link>

        {/* Rating and Reviews in the same line */}
        <div className='flex items-center gap-1 text-sm text-gray-600 mt-1'>
          <span className='text-yellow-500'>★</span>
          <span className='font-semibold'>{product.rating}</span>
          <span>({product.numReviews} reviews)</span>
        </div>

        {/* Price */}
        <p className='text-xl font-bold text-gray-900 mt-2'>₹{product.price}</p>
      </div>
    </div>
  );
};

export default Product;
