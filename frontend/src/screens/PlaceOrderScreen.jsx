// import React, { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import Message from '../components/Message';
// import CheckoutSteps from '../components/CheckoutSteps';
// import Loader from '../components/Loader';
// import { useCreateOrderMutation } from '../slices/ordersApiSlice';
// import { clearCartItems } from '../slices/cartSlice';

// const PlaceOrderScreen = () => {
//   const navigate = useNavigate();

//   const cart = useSelector((state) => state.cart);

//   const [createOrder, { isLoading, error }] = useCreateOrderMutation();

//   useEffect(() => {
//     if (!cart.shippingAddress.address) {
//       navigate('/shipping');
//     } else if (!cart.paymentMethod) {
//       navigate('/payment');
//     }
//   }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

//   const dispatch = useDispatch();
//   const placeOrderHandler = async () => {
//     try {
//       const res = await createOrder({
//         orderItems: cart.cartItems,
//         shippingAddress: cart.shippingAddress,
//         paymentMethod: cart.paymentMethod,
//         itemsPrice: cart.itemsPrice,
//         shippingPrice: cart.shippingPrice,
//         taxPrice: cart.taxPrice,
//         totalPrice: cart.totalPrice,
//       }).unwrap();
//       dispatch(clearCartItems());
//       navigate(`/order/${res._id}`);
//     } catch (err) {
//       toast.error(err);
//     }
//   };

//   return (
//     <>
//       <CheckoutSteps step1 step2 step3 step4 />
//       <Row>
//         <Col md={8}>
//           <ListGroup variant='flush'>
//             <ListGroup.Item>
//               <h2>Shipping</h2>
//               <p>
//                 <strong>Address:</strong>
//                 {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
//                 {cart.shippingAddress.postalCode},{' '}
//                 {cart.shippingAddress.country}
//               </p>
//             </ListGroup.Item>

//             <ListGroup.Item>
//               <h2>Payment Method</h2>
//               <strong>Method: </strong>
//               {/* {cart.paymentMethod} */} Cash on Delivery
//             </ListGroup.Item>

//             <ListGroup.Item>
//               <h2>Order Items</h2>
//               {cart.cartItems.length === 0 ? (
//                 <Message>Your cart is empty</Message>
//               ) : (
//                 <ListGroup variant='flush'>
//                   {cart.cartItems.map((item, index) => (
//                     <ListGroup.Item key={index}>
//                       <Row>
//                         <Col md={1}>
//                           <Image
//                             src={item.image}
//                             alt={item.name}
//                             fluid
//                             rounded
//                           />
//                         </Col>
//                         <Col>
//                           <Link to={`/product/${item.product}`}>
//                             {item.name}
//                           </Link>
//                         </Col>
//                         <Col md={4}>
//                           {item.qty} x ₹{item.price} = ₹
//                           {(item.qty * (item.price * 100)) / 100}
//                         </Col>
//                       </Row>
//                     </ListGroup.Item>
//                   ))}
//                 </ListGroup>
//               )}
//             </ListGroup.Item>
//           </ListGroup>
//         </Col>
//         <Col md={4}>
//           <Card>
//             <ListGroup variant='flush'>
//               <ListGroup.Item>
//                 <h2>Order Summary</h2>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Items</Col>
//                   <Col>₹{cart.itemsPrice}</Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Shipping</Col>
//                   <Col>₹{cart.shippingPrice}</Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Tax</Col>
//                   <Col>₹{cart.taxPrice}</Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Total</Col>
//                   <Col>₹{cart.totalPrice}</Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 {error && (
//                   <Message variant='danger'>{error.data.message}</Message>
//                 )}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Button
//                   type='button'
//                   className='btn-block'
//                   disabled={cart.cartItems === 0}
//                   onClick={placeOrderHandler}
//                 >
//                   Place Order
//                 </Button>
//                 {isLoading && <Loader />}
//               </ListGroup.Item>
//             </ListGroup>
//           </Card>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default PlaceOrderScreen;

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import Loader from '../components/Loader';
import { useCreateOrderMutation } from '../slices/ordersApiSlice';
import { clearCartItems } from '../slices/cartSlice';

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate('/shipping');
    } else if (!cart.paymentMethod) {
      navigate('/payment');
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className='max-w-5xl mx-auto p-6'>
      <CheckoutSteps step1 step2 step3 step4 />

      <div className='grid md:grid-cols-3 gap-6 mt-6'>
        {/* Left Column */}
        <div className='md:col-span-2 space-y-6'>
          {/* Shipping Info */}
          <div className='bg-white p-5 shadow-md rounded-lg'>
            <h2 className='text-lg font-semibold mb-3'>Shipping</h2>
            <p>
              <strong>Address:</strong> {cart.shippingAddress.address},{' '}
              {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},{' '}
              {cart.shippingAddress.country}
            </p>
          </div>

          {/* Payment Method */}
          <div className='bg-white p-5 shadow-md rounded-lg'>
            <h2 className='text-lg font-semibold mb-3'>Payment Method</h2>
            <p>
              <strong>Method:</strong> Cash on Delivery
            </p>
          </div>

          {/* Order Items */}
          <div className='bg-white p-5 shadow-md rounded-lg'>
            <h2 className='text-lg font-semibold mb-3'>Order Items</h2>
            {cart.cartItems.length === 0 ? (
              <p className='text-red-500'>Your cart is empty.</p>
            ) : (
              <div className='space-y-4'>
                {cart.cartItems.map((item, index) => (
                  <div key={index} className='flex items-center border-b pb-3'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-16 h-16 object-cover rounded-md mr-4'
                    />
                    <div className='flex-1'>
                      <Link
                        to={`/product/${item.product}`}
                        className='text-blue-600 hover:underline'
                      >
                        {item.name}
                      </Link>
                    </div>
                    <p className='text-gray-700'>
                      {item.qty} x ₹{item.price} = ₹
                      {(item.qty * (item.price * 100)) / 100}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className='bg-white p-5 shadow-md rounded-lg'>
          <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <p>Items</p>
              <p className='font-medium'>₹{cart.itemsPrice}</p>
            </div>
            <div className='flex justify-between'>
              <p>Shipping</p>
              <p className='font-medium'>₹{cart.shippingPrice}</p>
            </div>
            <div className='flex justify-between'>
              <p>Tax</p>
              <p className='font-medium'>₹{cart.taxPrice}</p>
            </div>
            <div className='flex justify-between border-t pt-2'>
              <p className='font-semibold'>Total</p>
              <p className='font-semibold text-green-600'>₹{cart.totalPrice}</p>
            </div>
          </div>

          {error && <p className='text-red-500 mt-3'>{error.data.message}</p>}

          <button
            type='button'
            disabled={cart.cartItems.length === 0}
            onClick={placeOrderHandler}
            className='w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            Place Order
          </button>

          {isLoading && <Loader />}
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
