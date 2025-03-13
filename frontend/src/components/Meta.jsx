// import { Helmet } from 'react-helmet-async';

// const Meta = ({ title, description, keywords }) => {
//   return (
//     <Helmet>
//       <title>{title}</title>
//       <meta name='description' content={description} />
//       <meta name='keyword' content={keywords} />
//     </Helmet>
//   );
// };

// Meta.defaultProps = {
//   title: 'Swaggin',
//   description: 'We sell the best products for cheap',
//   keywords: 'Clothing  Accessories Tshirts oversized Tshirts',
// };

// export default Meta;

import { Helmet } from 'react-helmet-async';

const Meta = ({
  title = 'Swaggin',
  description = 'We sell the best products for cheap',
  keywords = 'Clothing, Accessories, T-shirts, Oversized T-shirts',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

export default Meta;
