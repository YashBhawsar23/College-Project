// import { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Form, Button } from 'react-bootstrap';
// import Message from '../../components/Message';
// import Loader from '../../components/Loader';
// import FormContainer from '../../components/FormContainer';
// import { toast } from 'react-toastify';
// import { useParams } from 'react-router-dom';
// import {
//   useGetUserDetailsQuery,
//   useUpdateUserMutation,
// } from '../../slices/usersApiSlice';

// const UserEditScreen = () => {
//   const { id: userId } = useParams();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [isAdmin, setIsAdmin] = useState(false);

//   const {
//     data: user,
//     isLoading,
//     error,
//     refetch,
//   } = useGetUserDetailsQuery(userId);

//   const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation();

//   const navigate = useNavigate();

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUser({ userId, name, email, isAdmin });
//       toast.success('user updated successfully');
//       refetch();
//       navigate('/admin/userlist');
//     } catch (err) {
//       toast.error(err?.data?.message || err.error);
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       setName(user.name);
//       setEmail(user.email);
//       setIsAdmin(user.isAdmin);
//     }
//   }, [user]);

//   return (
//     <>
//       <Link to='/admin/userlist' className='btn btn-light my-3'>
//         Go Back
//       </Link>
//       <FormContainer>
//         <h1>Edit User</h1>
//         {loadingUpdate && <Loader />}
//         {isLoading ? (
//           <Loader />
//         ) : error ? (
//           <Message variant='danger'>
//             {error?.data?.message || error.error}
//           </Message>
//         ) : (
//           <Form onSubmit={submitHandler}>
//             <Form.Group className='my-2' controlId='name'>
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type='name'
//                 placeholder='Enter name'
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group className='my-2' controlId='email'>
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type='email'
//                 placeholder='Enter email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group className='my-2' controlId='isadmin'>
//               <Form.Check
//                 type='checkbox'
//                 label='Is Admin'
//                 checked={isAdmin}
//                 onChange={(e) => setIsAdmin(e.target.checked)}
//               ></Form.Check>
//             </Form.Group>

//             <Button type='submit' variant='primary'>
//               Update
//             </Button>
//           </Form>
//         )}
//       </FormContainer>
//     </>
//   );
// };

// export default UserEditScreen;

import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';
import {
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} from '../../slices/usersApiSlice';

const UserEditScreen = () => {
  const { id: userId } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useGetUserDetailsQuery(userId);

  const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ userId, name, email, isAdmin });
      toast.success('User updated successfully');
      refetch();
      navigate('/admin/userlist');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [user]);

  return (
    <div className='max-w-2xl mx-auto p-6'>
      {/* Back Button */}
      <Link to='/admin/userlist' className='text-blue-600 hover:text-blue-800'>
        &larr; Go Back
      </Link>

      {/* Form Container */}
      <div className='bg-white p-6 rounded-lg shadow-md mt-4'>
        <h1 className='text-2xl font-semibold mb-4'>Edit User</h1>

        {/* Loading Indicators */}
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>
            {error?.data?.message || error.error}
          </Message>
        ) : (
          <form onSubmit={submitHandler}>
            {/* Name Input */}
            <div className='mb-4'>
              <label className='block text-gray-700 font-medium mb-1'>
                Name
              </label>
              <input
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            {/* Email Input */}
            <div className='mb-4'>
              <label className='block text-gray-700 font-medium mb-1'>
                Email Address
              </label>
              <input
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            {/* Admin Checkbox */}
            <div className='mb-4 flex items-center gap-2'>
              <input
                type='checkbox'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
                className='h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500'
              />
              <label className='text-gray-700 font-medium'>Is Admin</label>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full'
            >
              Update
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserEditScreen;
