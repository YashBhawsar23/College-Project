// import React, { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { useDispatch, useSelector } from 'react-redux';
// import CheckoutSteps from '../components/CheckoutSteps';
// import Loader from '../components/Loader';
// import { useCreateOrderMutation } from '../slices/ordersApiSlice';
// import { clearCartItems } from '../slices/cartSlice';

// const PlaceOrderScreen = () => {
//   const navigate = useNavigate();
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
//   const [createOrder, { isLoading, error }] = useCreateOrderMutation();

//   useEffect(() => {
//     if (!cart.shippingAddress.address) {
//       navigate('/shipping');
//     } else if (!cart.paymentMethod) {
//       navigate('/payment');
//     }
//   }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

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
//     <div className='max-w-5xl mx-auto p-6'>
//       <CheckoutSteps step1 step2 step3 step4 />

//       <div className='grid md:grid-cols-3 gap-6 mt-6'>
//         {/* Left Column */}
//         <div className='md:col-span-2 space-y-6'>
//           {/* Shipping Info */}
//           <div className='bg-white p-5 shadow-md rounded-lg'>
//             <h2 className='text-lg font-semibold mb-3'>Shipping</h2>
//             <p>
//               <strong>Address:</strong> {cart.shippingAddress.address},{' '}
//               {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},{' '}
//               {cart.shippingAddress.country}
//             </p>
//           </div>

//           {/* Payment Method */}
//           <div className='bg-white p-5 shadow-md rounded-lg'>
//             <h2 className='text-lg font-semibold mb-3'>Payment Method</h2>
//             <p>
//               <strong>Method:</strong> Cash on Delivery
//             </p>
//           </div>

//           {/* Order Items */}
//           <div className='bg-white p-5 shadow-md rounded-lg'>
//             <h2 className='text-lg font-semibold mb-3'>Order Items</h2>
//             {cart.cartItems.length === 0 ? (
//               <p className='text-red-500'>Your cart is empty.</p>
//             ) : (
//               <div className='space-y-4'>
//                 {cart.cartItems.map((item, index) => (
//                   <div key={index} className='flex items-center border-b pb-3'>
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className='w-16 h-16 object-cover rounded-md mr-4'
//                     />
//                     <div className='flex-1'>
//                       <Link
//                         to={`/product/${item.product}`}
//                         className='text-black hover:underline'
//                       >
//                         {item.name}
//                       </Link>
//                     </div>
//                     <p className='text-gray-700'>
//                       {item.qty} x ₹{item.price} = ₹
//                       {(item.qty * (item.price * 100)) / 100}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Column - Order Summary */}
//         <div className='bg-white p-5 shadow-md rounded-lg'>
//           <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>
//           <div className='space-y-2'>
//             <div className='flex justify-between'>
//               <p>Items</p>
//               <p className='font-medium'>₹{cart.itemsPrice}</p>
//             </div>
//             <div className='flex justify-between'>
//               <p>Shipping</p>
//               <p className='font-medium'>₹{cart.shippingPrice}</p>
//             </div>
//             <div className='flex justify-between'>
//               <p>Tax</p>
//               <p className='font-medium'>₹{cart.taxPrice}</p>
//             </div>
//             <div className='flex justify-between border-t pt-2'>
//               <p className='font-semibold'>Total</p>
//               <p className='font-semibold text-black'>₹{cart.totalPrice}</p>
//             </div>
//           </div>

//           {error && <p className='text-red-500 mt-3'>{error.data.message}</p>}

//           <button
//             type='button'
//             disabled={cart.cartItems.length === 0}
//             onClick={placeOrderHandler}
//             className='w-full mt-4 py-2 bg-black text-white rounded-lg hover:bg-black-900 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
//           >
//             Place Order
//           </button>

//           {isLoading && <Loader />}
//         </div>
//       </div>
//     </div>
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

  // Ensure prices are numbers and apply shipping charge
  const itemsPrice = Number(cart.itemsPrice) || 0;
  const shippingPrice = itemsPrice < 1000 ? 99 : 0;
  const totalPrice = (itemsPrice + shippingPrice).toFixed(2);

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
        itemsPrice,
        shippingPrice,
        totalPrice,
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
        <div className='md:col-span-2 space-y-6'>
          <div className='bg-white p-5 shadow-md rounded-lg'>
            <h2 className='text-lg font-semibold mb-3'>Shipping</h2>
            <p>
              <strong>Address:</strong> {cart.shippingAddress.address},{' '}
              {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},{' '}
              {cart.shippingAddress.country}
            </p>
          </div>

          <div className='bg-white p-5 shadow-md rounded-lg'>
            <h2 className='text-lg font-semibold mb-3'>Payment Method</h2>
            <p>
              <strong>Method:</strong> {cart.paymentMethod}
            </p>
          </div>

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
                        className='text-black hover:underline'
                      >
                        {item.name}
                      </Link>
                    </div>
                    <p className='text-gray-700'>
                      {item.qty} x ₹{item.price} = ₹
                      {(item.qty * item.price).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className='bg-white p-5 shadow-md rounded-lg'>
          <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <p>Items</p>
              <p className='font-medium'>₹{itemsPrice.toFixed(2)}</p>
            </div>
            <div className='flex justify-between'>
              <p>Shipping</p>
              <p className='font-medium'>₹{shippingPrice}</p>
            </div>
            <div className='flex justify-between border-t pt-2'>
              <p className='font-semibold'>Total</p>
              <p className='font-semibold text-black'>₹{totalPrice}</p>
            </div>
          </div>

          {error && <p className='text-red-500 mt-3'>{error.data.message}</p>}

          <button
            type='button'
            disabled={cart.cartItems.length === 0}
            onClick={placeOrderHandler}
            className='w-full mt-4 py-2 bg-black text-white rounded-lg hover:bg-black-900 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
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
