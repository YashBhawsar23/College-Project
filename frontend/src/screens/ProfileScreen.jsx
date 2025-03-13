// import React, { useEffect, useState } from 'react';
// import { Table, Form, Button, Row, Col } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { FaTimes } from 'react-icons/fa';

// import { toast } from 'react-toastify';
// import Message from '../components/Message';
// import Loader from '../components/Loader';
// import { useProfileMutation } from '../slices/usersApiSlice';
// import { useGetMyOrdersQuery } from '../slices/ordersApiSlice';
// import { setCredentials } from '../slices/authSlice';
// import { Link } from 'react-router-dom';

// const ProfileScreen = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const { userInfo } = useSelector((state) => state.auth);

//   const { data: orders, isLoading, error } = useGetMyOrdersQuery();

//   const [updateProfile, { isLoading: loadingUpdateProfile }] =
//     useProfileMutation();

//   useEffect(() => {
//     setName(userInfo.name);
//     setEmail(userInfo.email);
//   }, [userInfo.email, userInfo.name]);

//   const dispatch = useDispatch();
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       toast.error('Passwords do not match');
//     } else {
//       try {
//         const res = await updateProfile({
//           // NOTE: here we don't need the _id in the request payload as this is
//           // not used in our controller.
//           // _id: userInfo._id,
//           name,
//           email,
//           password,
//         }).unwrap();
//         dispatch(setCredentials({ ...res }));
//         toast.success('Profile updated successfully');
//       } catch (err) {
//         toast.error(err?.data?.message || err.error);
//       }
//     }
//   };

//   return (
//     <Row>
//       <Col md={3}>
//         <h2>User Profile</h2>

//         <Form onSubmit={submitHandler}>
//           <Form.Group className='my-2' controlId='name'>
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type='text'
//               placeholder='Enter name'
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             ></Form.Control>
//           </Form.Group>

//           <Form.Group className='my-2' controlId='email'>
//             <Form.Label>Email Address</Form.Label>
//             <Form.Control
//               type='email'
//               placeholder='Enter email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             ></Form.Control>
//           </Form.Group>

//           <Form.Group className='my-2' controlId='password'>
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type='password'
//               placeholder='Enter password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             ></Form.Control>
//           </Form.Group>

//           <Form.Group className='my-2' controlId='confirmPassword'>
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control
//               type='password'
//               placeholder='Confirm password'
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             ></Form.Control>
//           </Form.Group>

//           <Button type='submit' variant='primary'>
//             Update
//           </Button>
//           {loadingUpdateProfile && <Loader />}
//         </Form>
//       </Col>
//       <Col md={9}>
//         <h2>My Orders</h2>
//         {isLoading ? (
//           <Loader />
//         ) : error ? (
//           <Message variant='danger'>
//             {error?.data?.message || error.error}
//           </Message>
//         ) : (
//           <Table striped hover responsive className='table-sm'>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>DATE</th>
//                 <th>TOTAL</th>
//                 <th>PAID</th>
//                 <th>DELIVERED</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order._id}>
//                   <td>{order._id}</td>
//                   <td>{order.createdAt.substring(0, 10)}</td>
//                   <td>{order.totalPrice}</td>
//                   <td>
//                     {order.isPaid ? (
//                       order.paidAt.substring(0, 10)
//                     ) : (
//                       <FaTimes style={{ color: 'red' }} />
//                     )}
//                   </td>
//                   <td>
//                     {order.isDelivered ? (
//                       order.deliveredAt.substring(0, 10)
//                     ) : (
//                       <FaTimes style={{ color: 'red' }} />
//                     )}
//                   </td>
//                   <td>
//                     <Button
//                       as={Link}
//                       to={`/order/${order._id}`}
//                       className='btn-sm'
//                       variant='light'
//                     >
//                       Details
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         )}
//       </Col>
//     </Row>
//   );
// };

// export default ProfileScreen;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useProfileMutation } from '../slices/usersApiSlice';
import { useGetMyOrdersQuery } from '../slices/ordersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { userInfo } = useSelector((state) => state.auth);
  const { data: orders, isLoading, error } = useGetMyOrdersQuery();
  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.name]);

  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await updateProfile({
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success('Profile updated successfully');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid md:grid-cols-3 gap-8'>
        {/* Profile Form */}
        <div className='bg-white shadow-lg p-6 rounded-md'>
          <h2 className='text-xl font-semibold mb-4'>User Profile</h2>
          <form onSubmit={submitHandler} className='space-y-4'>
            <div>
              <label className='block font-medium'>Name</label>
              <input
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200'
              />
            </div>

            <div>
              <label className='block font-medium'>Email Address</label>
              <input
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200'
              />
            </div>

            <div>
              <label className='block font-medium'>Password</label>
              <input
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200'
              />
            </div>

            <div>
              <label className='block font-medium'>Confirm Password</label>
              <input
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition'
            >
              Update Profile
            </button>

            {loadingUpdateProfile && <Loader />}
          </form>
        </div>

        {/* Order History */}
        <div className='md:col-span-2'>
          <h2 className='text-xl font-semibold mb-4'>My Orders</h2>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>
              {error?.data?.message || error.error}
            </Message>
          ) : (
            <div className='overflow-x-auto'>
              <table className='w-full border-collapse border border-gray-300 shadow-md'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th className='border px-4 py-2'>ID</th>
                    <th className='border px-4 py-2'>DATE</th>
                    <th className='border px-4 py-2'>TOTAL</th>
                    <th className='border px-4 py-2'>PAID</th>
                    <th className='border px-4 py-2'>DELIVERED</th>
                    <th className='border px-4 py-2'>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order._id}
                      className='border hover:bg-gray-100 transition'
                    >
                      <td className='border px-4 py-2'>{order._id}</td>
                      <td className='border px-4 py-2'>
                        {order.createdAt.substring(0, 10)}
                      </td>
                      <td className='border px-4 py-2'>{order.totalPrice}</td>
                      <td className='border px-4 py-2 text-center'>
                        {order.isPaid ? (
                          <span className='text-green-600 font-semibold'>
                            {order.paidAt.substring(0, 10)}
                          </span>
                        ) : (
                          <FaTimes className='text-red-600 mx-auto' />
                        )}
                      </td>
                      <td className='border px-4 py-2 text-center'>
                        {order.isDelivered ? (
                          <span className='text-green-600 font-semibold'>
                            {order.deliveredAt.substring(0, 10)}
                          </span>
                        ) : (
                          <FaTimes className='text-red-600 mx-auto' />
                        )}
                      </td>
                      <td className='border px-4 py-2 text-center'>
                        <Link
                          to={`/order/${order._id}`}
                          className='bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition'
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
      </div>
    </div>
  );
};

export default ProfileScreen;
