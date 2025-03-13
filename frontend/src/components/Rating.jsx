// import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

// const Rating = ({ value, text, color }) => {
//   return (
//     <div className='rating'>
//       <span>
//         {value >= 1 ? (
//           <FaStar />
//         ) : value >= 0.5 ? (
//           <FaStarHalfAlt />
//         ) : (
//           <FaRegStar />
//         )}
//       </span>
//       <span>
//         {value >= 2 ? (
//           <FaStar />
//         ) : value >= 1.5 ? (
//           <FaStarHalfAlt />
//         ) : (
//           <FaRegStar />
//         )}
//       </span>
//       <span>
//         {value >= 3 ? (
//           <FaStar />
//         ) : value >= 2.5 ? (
//           <FaStarHalfAlt />
//         ) : (
//           <FaRegStar />
//         )}
//       </span>
//       <span>
//         {value >= 4 ? (
//           <FaStar />
//         ) : value >= 3.5 ? (
//           <FaStarHalfAlt />
//         ) : (
//           <FaRegStar />
//         )}
//       </span>
//       <span>
//         {value >= 5 ? (
//           <FaStar />
//         ) : value >= 4.5 ? (
//           <FaStarHalfAlt />
//         ) : (
//           <FaRegStar />
//         )}
//       </span>
//       <span className='rating-text'>{text && text}</span>
//     </div>
//   );
// };

// Rating.defaultProps = {
//   color: '#f8e825',
// };

// export default Rating;

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, text }) => {
  return (
    <div className='flex items-center space-x-1 text-yellow-400'>
      <span>
        {value >= 1 ? (
          <FaStar />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>

      {/* Rating Text */}
      {text && <span className='ml-2 text-gray-600 text-sm'>{text}</span>}
    </div>
  );
};

export default Rating;
