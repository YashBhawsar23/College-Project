// import { useState } from 'react';
// import { useNavigate, useParams, Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import {
//   useGetProductDetailsQuery,
//   useCreateReviewMutation,
// } from '../slices/productsApiSlice';
// import Rating from '../components/Rating';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Meta from '../components/Meta';
// import { addToCart } from '../slices/cartSlice';

// const ProductScreen = () => {
//   const { id: productId } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [qty, setQty] = useState(1);

//   const {
//     data: product,
//     isLoading,
//     error,
//   } = useGetProductDetailsQuery(productId);
//   const { userInfo } = useSelector((state) => state.auth);

//   const addToCartHandler = () => {
//     dispatch(addToCart({ ...product, qty }));
//     navigate('/cart');
//   };

//   return (
//     <>
//       <Meta title={product?.name} description={product?.description} />
//       <div className='container mx-auto px-4'>
//         <Link to='/' className='text-black hover:underline my-4 inline-block'>
//           ← Back
//         </Link>

//         {isLoading ? (
//           <Loader />
//         ) : error ? (
//           <Message variant='danger'>
//             {error?.data?.message || error.error}
//           </Message>
//         ) : (
//           <div className='grid md:grid-cols-3 gap-6'>
//             {/* Product Image */}
//             <div className='md:col-span-1'>
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className='w-full rounded-lg shadow-md'
//               />
//             </div>

//             {/* Product Details */}
//             <div className='md:col-span-1'>
//               <h2 className='text-2xl font-semibold mb-2'>{product.name}</h2>
//               <Rating
//                 value={product.rating}
//                 text={`${product.numReviews} reviews`}
//               />
//               <p className='text-gray-700 my-3'>
//                 <b>Price:</b> ₹{product.price}
//               </p>
//               <p className='text-gray-700 mb-4'>
//                 <b>Description:</b> {product.description}
//               </p>
//             </div>

//             {/* Purchase Section */}
//             <div className='md:col-span-1'>
//               <div className='bg-white p-5 shadow-md rounded-lg'>
//                 <div className='flex justify-between mb-2'>
//                   <span className='font-medium'>Price:</span>
//                   <span className='font-bold'>₹{product.price}</span>
//                 </div>
//                 <div className='flex justify-between mb-2'>
//                   <span className='font-medium'>Status:</span>
//                   <span
//                     className={`font-bold ${
//                       product.countInStock > 0
//                         ? 'text-green-600'
//                         : 'text-red-600'
//                     }`}
//                   >
//                     {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
//                   </span>
//                 </div>

//                 {/* Quantity Selection */}
//                 {product.countInStock > 0 && (
//                   <div className='my-3'>
//                     <label
//                       htmlFor='qty'
//                       className='block text-gray-600 font-medium'
//                     >
//                       Qty
//                     </label>
//                     <select
//                       id='qty'
//                       value={qty}
//                       onChange={(e) => setQty(Number(e.target.value))}
//                       className='w-full mt-1 p-2 border rounded-md'
//                     >
//                       {[...Array(product.countInStock).keys()].map((x) => (
//                         <option key={x + 1} value={x + 1}>
//                           {x + 1}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 )}

//                 <button
//                   onClick={addToCartHandler}
//                   className={`w-full mt-4 p-3 rounded-lg font-semibold ${
//                     product.countInStock === 0
//                       ? 'bg-gray-400 cursor-not-allowed'
//                       : 'bg-black text-white hover:bg-black-900'
//                   }`}
//                   disabled={product.countInStock === 0}
//                 >
//                   Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProductScreen;

import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import { addToCart } from '../slices/cartSlice';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(0);

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty: 1 }));
    navigate('/cart');
  };

  const productImages = product
    ? [product.image, product.image, product.image]
    : [];

  return (
    <>
      <Meta title={product?.name} description={product?.description} />
      <div className='container mx-auto px-4 py-8 flex justify-center'>
        <div className='max-w-5xl w-full'>
          <Link
            to='/'
            className='text-gray-600 hover:text-black mb-6 inline-block'
          >
            ← Back to Products
          </Link>

          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>
              {error?.data?.message || error.error}
            </Message>
          ) : (
            // <div className='flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden p-6'>
            <div className='flex flex-col md:flex-row bg-white rounded-lg overflow-hidden p-6'>
              {/* Image Section */}
              <div className='flex flex-col items-center md:w-1/2'>
                <div className='flex gap-2 mb-4'>
                  {productImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index}`}
                      className={`w-16 h-20 object-cover rounded-md cursor-pointer ${
                        activeImg === index ? 'border-2 border-black' : ''
                      }`}
                      onClick={() => setActiveImg(index)}
                    />
                  ))}
                </div>
                <img
                  src={productImages[activeImg]}
                  alt={product.name}
                  className='w-80 h-96 object-contain rounded-lg shadow-md'
                />
              </div>

              {/* Product Details Section */}
              <div className='md:w-1/2 flex flex-col items-center text-center'>
                <h1 className='text-2xl font-bold'>{product.name}</h1>
                <div className='flex items-center gap-2 mt-2'>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </div>
                <p className='text-xl font-semibold mt-3'>
                  ₹{product.price.toLocaleString()}
                </p>

                <div className='mt-4'>
                  <p className='text-gray-700'>{product.description}</p>
                </div>

                {/* Select Size */}
                <div className='mt-4'>
                  <h3 className='text-sm font-semibold mb-2'>Select Size</h3>
                  <div className='flex gap-2'>
                    {[28, 30, 32, 34, 36, 38].map((size) => (
                      <button
                        key={size}
                        className='px-4 py-2 border rounded-lg text-gray-700 hover:border-black'
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className='mt-4'>
                  <span className='text-gray-600'>Availability:</span>{' '}
                  <span
                    className={
                      product.countInStock > 0
                        ? 'text-green-600'
                        : 'text-red-600'
                    }
                  >
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={addToCartHandler}
                  className={`w-full mt-6 py-3 rounded-lg font-medium transition ${
                    product.countInStock > 0
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                  }`}
                  disabled={product.countInStock === 0}
                >
                  {product.countInStock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
