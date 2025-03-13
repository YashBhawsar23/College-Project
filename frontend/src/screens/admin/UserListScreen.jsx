// import React from 'react';
// import { Table, Button } from 'react-bootstrap';
// import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
// import Message from '../../components/Message';
// import Loader from '../../components/Loader';
// import {
//   useDeleteUserMutation,
//   useGetUsersQuery,
// } from '../../slices/usersApiSlice';
// import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom';

// const UserListScreen = () => {
//   const { data: users, refetch, isLoading, error } = useGetUsersQuery();

//   const [deleteUser] = useDeleteUserMutation();

//   const deleteHandler = async (id) => {
//     if (window.confirm('Are you sure')) {
//       try {
//         await deleteUser(id);
//         refetch();
//       } catch (err) {
//         toast.error(err?.data?.message || err.error);
//       }
//     }
//   };

//   return (
//     <>
//       <h1>Users</h1>
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
//               <th>NAME</th>
//               <th>EMAIL</th>
//               <th>ADMIN</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td>{user._id}</td>
//                 <td>{user.name}</td>
//                 <td>
//                   <a href={`mailto:${user.email}`}>{user.email}</a>
//                 </td>
//                 <td>
//                   {user.isAdmin ? (
//                     <FaCheck style={{ color: 'green' }} />
//                   ) : (
//                     <FaTimes style={{ color: 'red' }} />
//                   )}
//                 </td>
//                 <td>
//                   {!user.isAdmin && (
//                     <>
//                       <Button
//                         as={Link}
//                         to={`/admin/user/${user._id}/edit`}
//                         style={{ marginRight: '10px' }}
//                         variant='light'
//                         className='btn-sm'
//                       >
//                         <FaEdit />
//                       </Button>
//                       <Button
//                         variant='danger'
//                         className='btn-sm'
//                         onClick={() => deleteHandler(user._id)}
//                       >
//                         <FaTrash style={{ color: 'white' }} />
//                       </Button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </>
//   );
// };

// export default UserListScreen;

import React from 'react';
import { FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from '../../slices/usersApiSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const UserListScreen = () => {
  const { data: users, refetch, isLoading, error } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(id);
        toast.success('User deleted successfully');
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-semibold mb-4'>Users</h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className='overflow-x-auto'>
          <table className='min-w-full border border-gray-300 bg-white shadow-md rounded-lg'>
            <thead className='bg-gray-100 text-gray-700'>
              <tr>
                <th className='px-4 py-2 border'>ID</th>
                <th className='px-4 py-2 border'>NAME</th>
                <th className='px-4 py-2 border'>EMAIL</th>
                <th className='px-4 py-2 border'>ADMIN</th>
                <th className='px-4 py-2 border'></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className='text-center border-t'>
                  <td className='px-4 py-2 border'>{user._id}</td>
                  <td className='px-4 py-2 border'>{user.name}</td>
                  <td className='px-4 py-2 border'>
                    <a
                      href={`mailto:${user.email}`}
                      className='text-blue-600 hover:underline'
                    >
                      {user.email}
                    </a>
                  </td>
                  <td className='px-4 py-2 border'>
                    {user.isAdmin ? (
                      <FaCheck className='text-green-500 mx-auto' />
                    ) : (
                      <FaTimes className='text-red-500 mx-auto' />
                    )}
                  </td>
                  <td className='px-4 py-2 border'>
                    {!user.isAdmin && (
                      <div className='flex justify-center space-x-3'>
                        <Link
                          to={`/admin/user/${user._id}/edit`}
                          className='p-2 text-blue-600 bg-gray-100 rounded hover:bg-gray-200 transition duration-200'
                        >
                          <FaEdit />
                        </Link>
                        <button
                          onClick={() => deleteHandler(user._id)}
                          className='p-2 text-white bg-red-600 rounded hover:bg-red-700 transition duration-200'
                        >
                          <FaTrash />
                        </button>
                      </div>
                    )}
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

export default UserListScreen;
