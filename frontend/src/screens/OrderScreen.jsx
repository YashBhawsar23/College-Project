// import { useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
// import { useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import Message from '../components/Message';
// import Loader from '../components/Loader';
// import {
//   useDeliverOrderMutation,
//   useGetOrderDetailsQuery,
//   useGetPaypalClientIdQuery,
//   usePayOrderMutation,
// } from '../slices/ordersApiSlice';

// const OrderScreen = () => {
//   const { id: orderId } = useParams();

//   const {
//     data: order,
//     refetch,
//     isLoading,
//     error,
//   } = useGetOrderDetailsQuery(orderId);
//   const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
//   const [deliverOrder, { isLoading: loadingDeliver }] =
//     useDeliverOrderMutation();
//   const { userInfo } = useSelector((state) => state.auth);

//   const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
//   const {
//     data: paypal,
//     isLoading: loadingPayPal,
//     error: errorPayPal,
//   } = useGetPaypalClientIdQuery();

//   useEffect(() => {
//     if (!errorPayPal && !loadingPayPal && paypal.clientId) {
//       const loadPaypalScript = async () => {
//         paypalDispatch({
//           type: 'resetOptions',
//           value: { 'client-id': paypal.clientId, currency: 'USD' },
//         });
//         paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
//       };
//       if (order && !order.isPaid && !window.paypal) {
//         loadPaypalScript();
//       }
//     }
//   }, [errorPayPal, loadingPayPal, order, paypal, paypalDispatch]);

//   function onApprove(data, actions) {
//     return actions.order.capture().then(async function (details) {
//       try {
//         await payOrder({ orderId, details });
//         refetch();
//         toast.success('Order is paid');
//       } catch (err) {
//         toast.error(err?.data?.message || err.error);
//       }
//     });
//   }

//   function onError(err) {
//     toast.error(err.message);
//   }

//   function createOrder(data, actions) {
//     return actions.order
//       .create({ purchase_units: [{ amount: { value: order.totalPrice } }] })
//       .then((orderID) => orderID);
//   }

//   const deliverHandler = async () => {
//     await deliverOrder(orderId);
//     refetch();
//   };

//   return isLoading ? (
//     <Loader />
//   ) : error ? (
//     <Message variant='danger'>{error.data.message}</Message>
//   ) : (
//     <div className='max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg'>
//       <h1 className='text-2xl font-bold mb-4'>Order Id: {order._id}</h1>
//       <div className='grid md:grid-cols-3 gap-6'>
//         <div className='md:col-span-2 space-y-6'>
//           <div className='border p-4 rounded-lg shadow-sm'>
//             <h2 className='text-lg font-semibold'>Shipping</h2>
//             <p>
//               <strong>Name:</strong> {order.user.name}
//             </p>
//             <p>
//               <strong>Email:</strong>{' '}
//               <a className='text-gray-600' href={`mailto:${order.user.email}`}>
//                 {order.user.email}
//               </a>
//             </p>
//             <p>
//               <strong>Address:</strong> {order.shippingAddress.address},{' '}
//               {order.shippingAddress.city}, {order.shippingAddress.postalCode},{' '}
//               {order.shippingAddress.country}
//             </p>
//           </div>
//           <div className='border p-4 rounded-lg shadow-sm'>
//             <h2 className='text-lg font-semibold'>Payment Method</h2>
//             <p>
//               <strong>Method:</strong> Cash on Delivery
//             </p>
//           </div>
//           <div className='border p-4 rounded-lg shadow-sm'>
//             <h2 className='text-lg font-semibold'>Order Items</h2>
//             {order.orderItems.length === 0 ? (
//               <Message>Order is empty</Message>
//             ) : (
//               <ul>
//                 {order.orderItems.map((item, index) => (
//                   <li
//                     key={index}
//                     className='flex items-center space-x-4 border-b py-2'
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className='w-16 h-16 object-cover rounded'
//                     />
//                     <Link
//                       to={`/product/${item.product}`}
//                       className='text-black hover:underline'
//                     >
//                       {item.name}
//                     </Link>
//                     <span className='ml-auto'>
//                       {item.qty} x ₹{item.price} = ₹{item.qty * item.price}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>
//         <div className='border p-4 rounded-lg shadow-md bg-white'>
//           <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>
//           <ul className='space-y-2'>
//             <li className='flex justify-between'>
//               <span>Items</span>
//               <span>₹{order.itemsPrice}</span>
//             </li>
//             <li className='flex justify-between'>
//               <span>Shipping</span>
//               <span>₹{order.shippingPrice}</span>
//             </li>
//             <li className='flex justify-between'>
//               <span>Tax</span>
//               <span>₹{order.taxPrice}</span>
//             </li>
//             <li className='flex justify-between font-bold'>
//               <span>Total</span>
//               <span>₹{order.totalPrice}</span>
//             </li>
//           </ul>
//           {!order.isPaid && (
//             <div className='mt-4'>
//               {loadingPay && <Loader />}
//               {isPending ? (
//                 <Loader />
//               ) : (
//                 <PayPalButtons
//                   createOrder={createOrder}
//                   onApprove={onApprove}
//                   onError={onError}
//                 />
//               )}
//             </div>
//           )}
//           {loadingDeliver && <Loader />}
//           {userInfo &&
//             userInfo.isAdmin &&
//             order.isPaid &&
//             !order.isDelivered && (
//               <button
//                 className='mt-4 w-full bg-black text-white py-2 rounded hover:bg-black-900'
//                 onClick={deliverHandler}
//               >
//                 Mark As Delivered
//               </button>
//             )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderScreen;

import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {
  useDeliverOrderMutation,
  useGetOrderDetailsQuery,
  useGetPaypalClientIdQuery,
  usePayOrderMutation,
} from '../slices/ordersApiSlice';

const OrderScreen = () => {
  const { id: orderId } = useParams();

  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);
  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
  const [deliverOrder, { isLoading: loadingDeliver }] =
    useDeliverOrderMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const {
    data: paypal,
    isLoading: loadingPayPal,
    error: errorPayPal,
  } = useGetPaypalClientIdQuery();

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal.clientId) {
      const loadPaypalScript = async () => {
        paypalDispatch({
          type: 'resetOptions',
          value: { 'client-id': paypal.clientId, currency: 'USD' },
        });
        paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
      };
      if (order && !order.isPaid && !window.paypal) {
        loadPaypalScript();
      }
    }
  }, [errorPayPal, loadingPayPal, order, paypal, paypalDispatch]);

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        await payOrder({ orderId, details });
        refetch();
        toast.success('Order is paid');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    });
  }

  function onError(err) {
    toast.error(err.message);
  }

  function createOrder(data, actions) {
    return actions.order
      .create({ purchase_units: [{ amount: { value: order.totalPrice } }] })
      .then((orderID) => orderID);
  }

  const deliverHandler = async () => {
    await deliverOrder(orderId);
    refetch();
  };

  // const shippingPrice = order.itemsPrice < 1000 ? 99 : 0;
  const shippingPrice = order?.itemsPrice
    ? order.itemsPrice < 1000
      ? 99
      : 0
    : 0;

  // const totalPrice = (Number(order.itemsPrice) + Number(shippingPrice)).toFixed(
  //   2
  // );
  const totalPrice = order?.itemsPrice
    ? (Number(order.itemsPrice) + Number(shippingPrice)).toFixed(2)
    : '0.00';

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error.data.message}</Message>
  ) : (
    <div className='max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg'>
      <h1 className='text-2xl font-bold mb-4'>Order Id: {order._id}</h1>
      <div className='grid md:grid-cols-3 gap-6'>
        <div className='md:col-span-2 space-y-6'>
          <div className='border p-4 rounded-lg shadow-sm'>
            <h2 className='text-lg font-semibold'>Shipping</h2>
            <p>
              <strong>Name:</strong> {order.user.name}
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a className='text-gray-600' href={`mailto:${order.user.email}`}>
                {order.user.email}
              </a>
            </p>
            <p>
              <strong>Address:</strong> {order.shippingAddress.address},{' '}
              {order.shippingAddress.city}, {order.shippingAddress.postalCode},{' '}
              {order.shippingAddress.country}
            </p>
          </div>
          <div className='border p-4 rounded-lg shadow-sm'>
            <h2 className='text-lg font-semibold'>Payment Method</h2>
            <p>
              <strong>Method:</strong> Cash on Delivery
            </p>
          </div>
          <div className='border p-4 rounded-lg shadow-sm'>
            <h2 className='text-lg font-semibold'>Order Items</h2>
            {order.orderItems.length === 0 ? (
              <Message>Order is empty</Message>
            ) : (
              <ul>
                {order.orderItems.map((item, index) => (
                  <li
                    key={index}
                    className='flex items-center space-x-4 border-b py-2'
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-16 h-16 object-cover rounded'
                    />
                    <Link
                      to={`/product/${item.product}`}
                      className='text-black hover:underline'
                    >
                      {item.name}
                    </Link>
                    <span className='ml-auto'>
                      {item.qty} x ₹{item.price} = ₹
                      {(item.qty * item.price).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className='border p-4 rounded-lg shadow-md bg-white'>
          <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>
          <ul className='space-y-2'>
            <li className='flex justify-between'>
              <span>Items</span>
              <span>₹{order.itemsPrice.toFixed(2)}</span>
            </li>
            <li className='flex justify-between'>
              <span>Shipping</span>
              <span>₹{shippingPrice.toFixed(2)}</span>
            </li>
            <li className='flex justify-between font-bold'>
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
