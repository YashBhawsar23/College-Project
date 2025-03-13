// import { Table, Button, Row, Col } from 'react-bootstrap';
// import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
// import { Link, useParams } from 'react-router-dom';
// import Message from '../../components/Message';
// import Loader from '../../components/Loader';
// import Paginate from '../../components/Paginate';
// import {
//   useGetProductsQuery,
//   useDeleteProductMutation,
//   useCreateProductMutation,
// } from '../../slices/productsApiSlice';
// import { toast } from 'react-toastify';

// const ProductListScreen = () => {
//   const { pageNumber } = useParams();

//   const { data, isLoading, error, refetch } = useGetProductsQuery({
//     pageNumber,
//   });

//   const [deleteProduct, { isLoading: loadingDelete }] =
//     useDeleteProductMutation();

//   const deleteHandler = async (id) => {
//     if (window.confirm('Are you sure')) {
//       try {
//         await deleteProduct(id);
//         refetch();
//       } catch (err) {
//         toast.error(err?.data?.message || err.error);
//       }
//     }
//   };

//   const [createProduct, { isLoading: loadingCreate }] =
//     useCreateProductMutation();

//   const createProductHandler = async () => {
//     if (window.confirm('Are you sure you want to create a new product?')) {
//       try {
//         await createProduct();
//         refetch();
//       } catch (err) {
//         toast.error(err?.data?.message || err.error);
//       }
//     }
//   };

//   return (
//     <>
//       <Row className='align-items-center'>
//         <Col>
//           <h1>Products</h1>
//         </Col>
//         <Col className='text-end'>
//           <Button className='my-3' onClick={createProductHandler}>
//             <FaPlus /> Create Product
//           </Button>
//         </Col>
//       </Row>

//       {loadingCreate && <Loader />}
//       {loadingDelete && <Loader />}
//       {isLoading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant='danger'>{error.data.message}</Message>
//       ) : (
//         <>
//           <Table striped bordered hover responsive className='table-sm'>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>NAME</th>
//                 <th>PRICE</th>
//                 <th>CATEGORY</th>
//                 <th>BRAND</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.products.map((product) => (
//                 <tr key={product._id}>
//                   <td>{product._id}</td>
//                   <td>{product.name}</td>
//                   <td>₹{product.price}</td>
//                   <td>{product.category}</td>
//                   <td>{product.brand}</td>
//                   <td>
//                     <Button
//                       as={Link}
//                       to={`/admin/product/${product._id}/edit`}
//                       variant='light'
//                       className='btn-sm mx-2'
//                     >
//                       <FaEdit />
//                     </Button>
//                     <Button
//                       variant='danger'
//                       className='btn-sm'
//                       onClick={() => deleteHandler(product._id)}
//                     >
//                       <FaTrash style={{ color: 'white' }} />
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//           <Paginate pages={data.pages} page={data.page} isAdmin={true} />
//         </>
//       )}
//     </>
//   );
// };

// export default ProductListScreen;

import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import Paginate from '../../components/Paginate';
import {
  useGetProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
} from '../../slices/productsApiSlice';
import { toast } from 'react-toastify';

const ProductListScreen = () => {
  const { pageNumber } = useParams();
  const { data, isLoading, error, refetch } = useGetProductsQuery({
    pageNumber,
  });

  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation();
  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation();

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteProduct(id);
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const createProductHandler = async () => {
    if (window.confirm('Are you sure you want to create a new product?')) {
      try {
        await createProduct();
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className='px-6 py-4'>
      {/* Header */}
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-semibold'>Products</h1>
        <button
          className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center gap-2'
          onClick={createProductHandler}
        >
          <FaPlus /> Create Product
        </button>
      </div>

      {/* Loaders */}
      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error.data.message}</Message>
      ) : (
        <>
          {/* Product Table */}
          <div className='overflow-x-auto shadow-md rounded-lg'>
            <table className='w-full text-left border-collapse border border-gray-300'>
              <thead className='bg-gray-100'>
                <tr className='border-b border-gray-300'>
                  <th className='p-3 text-gray-700'>ID</th>
                  <th className='p-3 text-gray-700'>NAME</th>
                  <th className='p-3 text-gray-700'>PRICE</th>
                  <th className='p-3 text-gray-700'>CATEGORY</th>
                  <th className='p-3 text-gray-700'>BRAND</th>
                  <th className='p-3'></th>
                </tr>
              </thead>
              <tbody>
                {data.products.map((product) => (
                  <tr
                    key={product._id}
                    className='border-b border-gray-200 hover:bg-gray-50'
                  >
                    <td className='p-3'>{product._id}</td>
                    <td className='p-3'>{product.name}</td>
                    <td className='p-3'>₹{product.price}</td>
                    <td className='p-3'>{product.category}</td>
                    <td className='p-3'>{product.brand}</td>
                    <td className='p-3 flex items-center gap-2'>
                      <Link
                        to={`/admin/product/${product._id}/edit`}
                        className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md flex items-center gap-1'
                      >
                        <FaEdit /> Edit
                      </Link>
                      <button
                        className='bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md flex items-center gap-1'
                        onClick={() => deleteHandler(product._id)}
                      >
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <Paginate pages={data.pages} page={data.page} isAdmin={true} />
        </>
      )}
    </div>
  );
};

export default ProductListScreen;
