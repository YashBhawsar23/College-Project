// import { Table, Button } from 'react-bootstrap';
// import { FaTimes } from 'react-icons/fa';
// import Message from '../../components/Message';
// import Loader from '../../components/Loader';
// import { useGetOrdersQuery } from '../../slices/ordersApiSlice';
// import { Link } from 'react-router-dom';

// const OrderListScreen = () => {
//   const { data: orders, isLoading, error } = useGetOrdersQuery();

//   return (
//     <>
//       <h1>Orders</h1>
//       {isLoading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant='danger'>
//           {error?.data?.message || error.error}
//         </Message>
//       ) : (
//         <Table striped bordered hover responsive className='table-sm'>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>USER</th>
//               <th>DATE</th>
//               <th>TOTAL</th>
//               <th>PAID</th>
//               <th>DELIVERED</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id}>
//                 <td>{order._id}</td>
//                 <td>{order.user && order.user.name}</td>
//                 <td>{order.createdAt.substring(0, 10)}</td>
//                 <td>₹{order.totalPrice}</td>
//                 <td>
//                   {order.isPaid ? (
//                     order.paidAt.substring(0, 10)
//                   ) : (
//                     <FaTimes style={{ color: 'red' }} />
//                   )}
//                 </td>
//                 <td>
//                   {order.isDelivered ? (
//                     order.deliveredAt.substring(0, 10)
//                   ) : (
//                     <FaTimes style={{ color: 'red' }} />
//                   )}
//                 </td>
//                 <td>
//                   <Button
//                     as={Link}
//                     to={`/order/${order._id}`}
//                     variant='light'
//                     className='btn-sm'
//                   >
//                     Details
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </>
//   );
// };

// export default OrderListScreen;

import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetOrdersQuery } from '../../slices/ordersApiSlice';

const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-semibold text-gray-800 mb-4'>Orders</h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white shadow-lg rounded-lg overflow-hidden'>
            <thead className='bg-gray-800 text-white'>
              <tr>
                <th className='py-2 px-4 text-left'>ID</th>
                <th className='py-2 px-4 text-left'>USER</th>
                <th className='py-2 px-4 text-left'>DATE</th>
                <th className='py-2 px-4 text-left'>TOTAL</th>
                <th className='py-2 px-4 text-left'>PAID</th>
                <th className='py-2 px-4 text-left'>DELIVERED</th>
                <th className='py-2 px-4 text-left'>ACTION</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {orders.map((order) => (
                <tr key={order._id} className='hover:bg-gray-50'>
                  <td className='py-2 px-4'>{order._id}</td>
                  <td className='py-2 px-4'>{order.user && order.user.name}</td>
                  <td className='py-2 px-4'>
                    {order.createdAt.substring(0, 10)}
                  </td>
                  <td className='py-2 px-4'>₹{order.totalPrice}</td>
                  <td className='py-2 px-4'>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <FaTimes className='text-red-600' />
                    )}
                  </td>
                  <td className='py-2 px-4'>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <FaTimes className='text-red-600' />
                    )}
                  </td>
                  <td className='py-2 px-4'>
                    <Link
                      to={`/order/${order._id}`}
                      className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200'
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderListScreen;
