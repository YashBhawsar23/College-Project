// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { FaTimes } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import { useProfileMutation } from '../slices/usersApiSlice';
// import { useGetMyOrdersQuery } from '../slices/ordersApiSlice';
// import { setCredentials } from '../slices/authSlice';
// import { Link } from 'react-router-dom';
// import Loader from '../components/Loader';
// import Message from '../components/Message';

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
//     <div className='container mx-auto px-4 py-8'>
//       <div className='grid md:grid-cols-3 gap-8'>
//         {/* Profile Form */}
//         <div className='bg-white shadow-lg p-6 rounded-md'>
//           <h2 className='text-xl font-semibold mb-4'>User Profile</h2>
//           <form onSubmit={submitHandler} className='space-y-4'>
//             <div>
//               <label className='block font-medium'>Name</label>
//               <input
//                 type='text'
//                 placeholder='Enter name'
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className='w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200'
//               />
//             </div>

//             <div>
//               <label className='block font-medium'>Email Address</label>
//               <input
//                 type='email'
//                 placeholder='Enter email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className='w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200'
//               />
//             </div>

//             <div>
//               <label className='block font-medium'>Password</label>
//               <input
//                 type='password'
//                 placeholder='Enter password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className='w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200'
//               />
//             </div>

//             <div>
//               <label className='block font-medium'>Confirm Password</label>
//               <input
//                 type='password'
//                 placeholder='Confirm password'
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className='w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200'
//               />
//             </div>

//             <button
//               type='submit'
//               className='w-full bg-black text-white py-2 rounded-md hover:bg-black-900 transition'
//             >
//               Update Profile
//             </button>

//             {loadingUpdateProfile && <Loader />}
//           </form>
//         </div>

//         {/* Order History */}
//         <div className='md:col-span-2'>
//           <h2 className='text-xl font-semibold mb-4'>My Orders</h2>
//           {isLoading ? (
//             <Loader />
//           ) : error ? (
//             <Message variant='danger'>
//               {error?.data?.message || error.error}
//             </Message>
//           ) : (
//             <div className='overflow-x-auto'>
//               <table className='w-full border-collapse border border-gray-300 shadow-md'>
//                 <thead className='bg-gray-100'>
//                   <tr>
//                     <th className='border px-4 py-2'>ID</th>
//                     <th className='border px-4 py-2'>DATE</th>
//                     <th className='border px-4 py-2'>TOTAL</th>
//                     <th className='border px-4 py-2'>PAID</th>
//                     <th className='border px-4 py-2'>DELIVERED</th>
//                     <th className='border px-4 py-2'>ACTION</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {orders.map((order) => (
//                     <tr
//                       key={order._id}
//                       className='border hover:bg-gray-100 transition'
//                     >
//                       <td className='border px-4 py-2'>{order._id}</td>
//                       <td className='border px-4 py-2'>
//                         {order.createdAt.substring(0, 10)}
//                       </td>
//                       <td className='border px-4 py-2'>{order.totalPrice}</td>
//                       <td className='border px-4 py-2 text-center'>
//                         {order.isPaid ? (
//                           <span className='text-green-600 font-semibold'>
//                             {order.paidAt.substring(0, 10)}
//                           </span>
//                         ) : (
//                           <FaTimes className='text-red-600 mx-auto' />
//                         )}
//                       </td>
//                       <td className='border px-4 py-2 text-center'>
//                         {order.isDelivered ? (
//                           <span className='text-green-600 font-semibold'>
//                             {order.deliveredAt.substring(0, 10)}
//                           </span>
//                         ) : (
//                           <FaTimes className='text-red-600 mx-auto' />
//                         )}
//                       </td>
//                       <td className='border px-4 py-2 text-center'>
//                         <Link
//                           to={`/order/${order._id}`}
//                           className='bg-black text-white px-3 py-1 rounded-md hover:bg-black-900 transition'
//                         >
//                           Details
//                         </Link>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileScreen;

// Important

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { FaTimes } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import { useProfileMutation } from '../slices/usersApiSlice';
// import { useGetMyOrdersQuery } from '../slices/ordersApiSlice';
// import { setCredentials } from '../slices/authSlice';
// import { Link } from 'react-router-dom';
// import Loader from '../components/Loader';
// import Message from '../components/Message';

// const ProfileScreen = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const { userInfo } = useSelector((state) => state.auth);
//   const { data: orders, isLoading, error } = useGetMyOrdersQuery();
//   const [updateProfile, { isLoading: loadingUpdateProfile }] = useProfileMutation();

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
//         const res = await updateProfile({ name, email, password }).unwrap();
//         dispatch(setCredentials({ ...res }));
//         toast.success('Profile updated successfully');
//       } catch (err) {
//         toast.error(err?.data?.message || err.error);
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Profile Form */}
//         <div className="bg-white shadow-lg p-6 rounded-md">
//           <h2 className="text-2xl font-semibold mb-4 text-center">User Profile</h2>
//           <form onSubmit={submitHandler} className="space-y-4">
//             <div>
//               <label className="block font-medium mb-1">Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
//               />
//             </div>

//             <div>
//               <label className="block font-medium mb-1">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
//               />
//             </div>

//             <div>
//               <label className="block font-medium mb-1">Password</label>
//               <input
//                 type="password"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
//               />
//             </div>

//             <div>
//               <label className="block font-medium mb-1">Confirm Password</label>
//               <input
//                 type="password"
//                 placeholder="Confirm password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
//             >
//               Update Profile
//             </button>

//             {loadingUpdateProfile && <Loader />}
//           </form>
//         </div>

//         {/* Order History */}
//         <div className="md:col-span-2">
//           <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">My Orders</h2>
//           {isLoading ? (
//             <Loader />
//           ) : error ? (
//             <Message variant="danger">{error?.data?.message || error.error}</Message>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse border border-gray-300 shadow-md">
//                 <thead className="bg-gray-100">
//                   <tr className="text-left">
//                     <th className="border px-3 py-2">ID</th>
//                     <th className="border px-3 py-2">DATE</th>
//                     <th className="border px-3 py-2">TOTAL</th>
//                     <th className="border px-3 py-2">PAID</th>
//                     <th className="border px-3 py-2">DELIVERED</th>
//                     <th className="border px-3 py-2 text-center">ACTION</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {orders.map((order) => (
//                     <tr key={order._id} className="border hover:bg-gray-100 transition">
//                       <td className="border px-3 py-2 text-sm">{order._id}</td>
//                       <td className="border px-3 py-2 text-sm">
//                         {order.createdAt.substring(0, 10)}
//                       </td>
//                       <td className="border px-3 py-2 text-sm">{order.totalPrice}</td>
//                       <td className="border px-3 py-2 text-center">
//                         {order.isPaid ? (
//                           <span className="text-green-600 font-semibold">
//                             {order.paidAt.substring(0, 10)}
//                           </span>
//                         ) : (
//                           <FaTimes className="text-red-600 mx-auto" />
//                         )}
//                       </td>
//                       <td className="border px-3 py-2 text-center">
//                         {order.isDelivered ? (
//                           <span className="text-green-600 font-semibold">
//                             {order.deliveredAt.substring(0, 10)}
//                           </span>
//                         ) : (
//                           <FaTimes className="text-red-600 mx-auto" />
//                         )}
//                       </td>
//                       <td className="border px-3 py-2 text-center">
//                         <Link
//                           to={`/order/${order._id}`}
//                           className="bg-black text-white px-3 py-1 text-sm rounded-md hover:bg-gray-800 transition"
//                         >
//                           Details
//                         </Link>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileScreen;

// Done

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
        const res = await updateProfile({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success('Profile updated successfully');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Profile Form */}
        <div className='bg-white shadow-lg p-6 rounded-md'>
          <h2 className='text-2xl font-semibold mb-4 text-center'>
            User Profile
          </h2>
          <form onSubmit={submitHandler} className='space-y-4'>
            <div>
              <label className='block font-medium mb-1'>Name</label>
              <input
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300'
              />
            </div>

            <div>
              <label className='block font-medium mb-1'>Email Address</label>
              <input
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300'
              />
            </div>

            <div>
              <label className='block font-medium mb-1'>Password</label>
              <input
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300'
              />
            </div>

            <div>
              <label className='block font-medium mb-1'>Confirm Password</label>
              <input
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition'
            >
              Update Profile
            </button>

            {loadingUpdateProfile && <Loader />}
          </form>
        </div>

        {/* Order History */}
        <div className='md:col-span-2'>
          <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
            My Orders
          </h2>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>
              {error?.data?.message || error.error}
            </Message>
          ) : (
            <div className='overflow-x-auto'>
              <table className='w-full border-collapse border border-gray-300 shadow-md text-sm'>
                <thead className='bg-gray-100'>
                  <tr className='text-left'>
                    <th className='border px-2 py-2'>ID</th>
                    <th className='border px-2 py-2'>DATE</th>
                    <th className='border px-2 py-2 hidden sm:table-cell'>
                      TOTAL
                    </th>
                    <th className='border px-2 py-2'>PAID</th>
                    <th className='border px-2 py-2 hidden sm:table-cell'>
                      DELIVERED
                    </th>
                    <th className='border px-2 py-2 text-center'>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order._id}
                      className='border hover:bg-gray-100 transition'
                    >
                      <td className='border px-2 py-2 text-xs sm:text-sm'>
                        {order._id}
                      </td>
                      <td className='border px-2 py-2 text-xs sm:text-sm'>
                        {order.createdAt.substring(0, 10)}
                      </td>
                      <td className='border px-2 py-2 text-xs sm:text-sm hidden sm:table-cell'>
                        {order.totalPrice}
                      </td>
                      <td className='border px-2 py-2 text-center'>
                        {order.isPaid ? (
                          <span className='text-green-600 font-semibold'>
                            {order.paidAt.substring(0, 10)}
                          </span>
                        ) : (
                          <FaTimes className='text-red-600 mx-auto' />
                        )}
                      </td>
                      <td className='border px-2 py-2 text-center hidden sm:table-cell'>
                        {order.isDelivered ? (
                          <span className='text-green-600 font-semibold'>
                            {order.deliveredAt.substring(0, 10)}
                          </span>
                        ) : (
                          <FaTimes className='text-red-600 mx-auto' />
                        )}
                      </td>
                      <td className='border px-2 py-2 text-center'>
                        <Link
                          to={`/order/${order._id}`}
                          className='bg-black text-white px-3 py-1 text-xs sm:text-sm rounded-md hover:bg-gray-800 transition'
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
