// import { Pagination } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
//   return (
//     pages > 1 && (
//       <Pagination>
//         {[...Array(pages).keys()].map((x) => (
//           <Pagination.Item
//             as={Link}
//             key={x + 1}
//             to={
//               !isAdmin
//                 ? keyword
//                   ? `/search/${keyword}/page/${x + 1}`
//                   : `/page/${x + 1}`
//                 : `/admin/productlist/${x + 1}`
//             }
//             active={x + 1 === page}
//           >
//             {x + 1}
//           </Pagination.Item>
//         ))}
//       </Pagination>
//     )
//   );
// };

// export default Paginate;

import { Link } from 'react-router-dom';

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  if (pages <= 1) return null;

  return (
    <div className='flex justify-center mt-4'>
      <nav className='inline-flex space-x-2'>
        {[...Array(pages).keys()].map((x) => {
          const pageNumber = x + 1;
          const link = !isAdmin
            ? keyword
              ? `/search/${keyword}/page/${pageNumber}`
              : `/page/${pageNumber}`
            : `/admin/productlist/${pageNumber}`;

          return (
            <Link
              key={pageNumber}
              to={link}
              className={`px-4 py-2 rounded-lg border transition ${
                page === pageNumber
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {pageNumber}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Paginate;
