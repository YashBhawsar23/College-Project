// import { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   Row,
//   Col,
//   Image,
//   ListGroup,
//   Card,
//   Button,
//   Form,
// } from 'react-bootstrap';
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
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');

//   const addToCartHandler = () => {
//     dispatch(addToCart({ ...product, qty }));
//     navigate('/cart');
//   };

//   const {
//     data: product,
//     isLoading,
//     refetch,
//     error,
//   } = useGetProductDetailsQuery(productId);

//   const { userInfo } = useSelector((state) => state.auth);

//   const [createReview, { isLoading: loadingProductReview }] =
//     useCreateReviewMutation();

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       await createReview({
//         productId,
//         rating,
//         comment,
//       }).unwrap();
//       refetch();
//       toast.success('Review created successfully');
//     } catch (err) {
//       toast.error(err?.data?.message || err.error);
//     }
//   };

//   return (
//     <>
//       <Link className='btn btn-light my-3' to='/'>
//         Back
//       </Link>
//       {isLoading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant='danger'>
//           {error?.data?.message || error.error}
//         </Message>
//       ) : (
//         <>
//           <Meta title={product.name} description={product.description} />
//           <Row>
//             <Col md={4}>
//               <Image src={product.image} alt={product.name} fluid />
//             </Col>
//             <Col md={5}>
//               <ListGroup variant='flush'>
//                 <ListGroup.Item>
//                   <h3>{product.name}</h3>
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <Rating
//                     value={product.rating}
//                     text={`${product.numReviews} reviews`}
//                   />
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   {' '}
//                   <b>Price:</b> ₹{product.price}
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <b>Description:</b> {product.description}
//                 </ListGroup.Item>
//               </ListGroup>
//             </Col>
//             <Col md={3}>
//               <Card>
//                 <ListGroup variant='flush'>
//                   <ListGroup.Item>
//                     <Row>
//                       <Col>Price:</Col>
//                       <Col>
//                         <strong>₹{product.price}</strong>
//                       </Col>
//                     </Row>
//                   </ListGroup.Item>
//                   <ListGroup.Item>
//                     <Row>
//                       <Col>Status:</Col>
//                       <Col>
//                         {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
//                       </Col>
//                     </Row>
//                   </ListGroup.Item>

//                   {/* Qty Select */}
//                   {product.countInStock > 0 && (
//                     <ListGroup.Item>
//                       <Row>
//                         <Col>Qty</Col>
//                         <Col>
//                           <Form.Control
//                             as='select'
//                             value={qty}
//                             onChange={(e) => setQty(Number(e.target.value))}
//                           >
//                             {[...Array(product.countInStock).keys()].map(
//                               (x) => (
//                                 <option key={x + 1} value={x + 1}>
//                                   {x + 1}
//                                 </option>
//                               )
//                             )}
//                           </Form.Control>
//                         </Col>
//                       </Row>
//                     </ListGroup.Item>
//                   )}

//                   <ListGroup.Item>
//                     <Button
//                       className='btn-block'
//                       type='button'
//                       disabled={product.countInStock === 0}
//                       onClick={addToCartHandler}
//                     >
//                       Add To Cart
//                     </Button>
//                   </ListGroup.Item>
//                 </ListGroup>
//               </Card>
//             </Col>
//           </Row>
//           {/* <Row className='review'>
//             <Col md={6}>
//               <h2>Reviews</h2>
//               {product.reviews.length === 0 && <Message>No Reviews</Message>}
//               <ListGroup variant='flush'>
//                 {product.reviews.map((review) => (
//                   <ListGroup.Item key={review._id}>
//                     <strong>{review.name}</strong>
//                     <Rating value={review.rating} />
//                     <p>{review.createdAt.substring(0, 10)}</p>
//                     <p>{review.comment}</p>
//                   </ListGroup.Item>
//                 ))}
//                 <ListGroup.Item>
//                   <h2>Write a Customer Review</h2>

//                   {loadingProductReview && <Loader />}

//                   {userInfo ? (
//                     <Form onSubmit={submitHandler}>
//                       <Form.Group className='my-2' controlId='rating'>
//                         <Form.Label>Rating</Form.Label>
//                         <Form.Control
//                           as='select'
//                           required
//                           value={rating}
//                           onChange={(e) => setRating(e.target.value)}
//                         >
//                           <option value=''>Select...</option>
//                           <option value='1'>1 - Poor</option>
//                           <option value='2'>2 - Fair</option>
//                           <option value='3'>3 - Good</option>
//                           <option value='4'>4 - Very Good</option>
//                           <option value='5'>5 - Excellent</option>
//                         </Form.Control>
//                       </Form.Group>
//                       <Form.Group className='my-2' controlId='comment'>
//                         <Form.Label>Comment</Form.Label>
//                         <Form.Control
//                           as='textarea'
//                           row='3'
//                           required
//                           value={comment}
//                           onChange={(e) => setComment(e.target.value)}
//                         ></Form.Control>
//                       </Form.Group>
//                       <Button
//                         disabled={loadingProductReview}
//                         type='submit'
//                         variant='primary'
//                       >
//                         Submit
//                       </Button>
//                     </Form>
//                   ) : (
//                     <Message>
//                       Please <Link to='/login'>sign in</Link> to write a review
//                     </Message>
//                   )}
//                 </ListGroup.Item>
//               </ListGroup>
//             </Col>
//           </Row> */}
//         </>
//       )}
//     </>
//   );
// };

// export default ProductScreen;

import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  useGetProductDetailsQuery,
  useCreateReviewMutation,
} from '../slices/productsApiSlice';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import { addToCart } from '../slices/cartSlice';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);
  const { userInfo } = useSelector((state) => state.auth);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };

  return (
    <>
      <Meta title={product?.name} description={product?.description} />
      <div className='container mx-auto px-4'>
        <Link
          to='/'
          className='text-blue-600 hover:underline my-4 inline-block'
        >
          ← Back
        </Link>

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>
            {error?.data?.message || error.error}
          </Message>
        ) : (
          <div className='grid md:grid-cols-3 gap-6'>
            {/* Product Image */}
            <div className='md:col-span-1'>
              <img
                src={product.image}
                alt={product.name}
                className='w-full rounded-lg shadow-md'
              />
            </div>

            {/* Product Details */}
            <div className='md:col-span-1'>
              <h2 className='text-2xl font-semibold mb-2'>{product.name}</h2>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
              <p className='text-gray-700 my-3'>
                <b>Price:</b> ₹{product.price}
              </p>
              <p className='text-gray-700 mb-4'>
                <b>Description:</b> {product.description}
              </p>
            </div>

            {/* Purchase Section */}
            <div className='md:col-span-1'>
              <div className='bg-white p-5 shadow-md rounded-lg'>
                <div className='flex justify-between mb-2'>
                  <span className='font-medium'>Price:</span>
                  <span className='font-bold'>₹{product.price}</span>
                </div>
                <div className='flex justify-between mb-2'>
                  <span className='font-medium'>Status:</span>
                  <span
                    className={`font-bold ${
                      product.countInStock > 0
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                {/* Quantity Selection */}
                {product.countInStock > 0 && (
                  <div className='my-3'>
                    <label
                      htmlFor='qty'
                      className='block text-gray-600 font-medium'
                    >
                      Qty
                    </label>
                    <select
                      id='qty'
                      value={qty}
                      onChange={(e) => setQty(Number(e.target.value))}
                      className='w-full mt-1 p-2 border rounded-md'
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <button
                  onClick={addToCartHandler}
                  className={`w-full mt-4 p-3 rounded-lg font-semibold ${
                    product.countInStock === 0
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductScreen;
