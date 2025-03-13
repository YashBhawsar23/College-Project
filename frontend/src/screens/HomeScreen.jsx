// import { useParams, Link } from 'react-router-dom';
// import { useGetProductsQuery } from '../slices/productsApiSlice';
// import Product from '../components/Product';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Paginate from '../components/Paginate';
// import Meta from '../components/Meta';
// import HeroSection from './HeroSection';
// import InfoBox from './InfoSection';
// // import ContactForm from './ContactScreen';

// const HomeScreen = () => {
//   const { pageNumber, keyword } = useParams();
//   const { data, isLoading, error } = useGetProductsQuery({
//     keyword,
//     pageNumber,
//   });

//   return (
//     <div className='bg-gray-100 min-h-screen px-4'>
//       {keyword && (
//         <Link
//           to='/'
//           className='inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded mb-4'
//         >
//           Back
//         </Link>
//       )}

//       {isLoading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant='danger'>
//           {error?.data?.message || error.error}
//         </Message>
//       ) : (
//         <>
//           <HeroSection />
//           <Meta />
//           <h1 className='text-3xl font-bold text-center mt-8 mb-6'>
//             Latest Collection
//           </h1>

//           <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
//             {data.products.map((product) => (
//               <Product key={product._id} product={product} />
//             ))}
//           </div>

//           <InfoBox />
//           {/* <ContactForm /> */}

//           <Paginate
//             pages={data.pages}
//             page={data.page}
//             keyword={keyword || ''}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default HomeScreen;

import { useParams, Link } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import HeroSection from './HeroSection';
import InfoBox from './InfoSection';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <div className='bg-gray-100 min-h-screen w-full'>
      {keyword && (
        <Link
          to='/'
          className='inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded mb-4'
        >
          Back
        </Link>
      )}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <HeroSection />
          <Meta />
          <h1 className='text-3xl font-bold text-center mt-8 mb-6'>
            Latest Collection
          </h1>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4'>
            {data.products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>

          <InfoBox />
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword || ''}
          />
        </>
      )}
    </div>
  );
};

export default HomeScreen;
