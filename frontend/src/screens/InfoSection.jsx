// import React from 'react';
// import { TbTruckDelivery } from 'react-icons/tb';
// import { RiCustomerService2Fill } from 'react-icons/ri';
// import { IoCardOutline } from 'react-icons/io5';
// import { AiOutlineSafetyCertificate } from 'react-icons/ai';

// const InfoBox = () => {
//   const infoItems = [
//     {
//       icon: <TbTruckDelivery className='text-4xl text-blue-600 mb-2' />,
//       title: 'Free Shipping',
//       text: 'Get your purchases delivered right to your doorstep without any extra cost. We offer free shipping on all orders to make your shopping experience even better.',
//     },
//     {
//       icon: <RiCustomerService2Fill className='text-4xl text-green-600 mb-2' />,
//       title: 'Support Team',
//       text: "Our experienced support team is ready to assist you. We're passionate about our products and committed to providing exceptional customer service.",
//     },
//     {
//       icon: <IoCardOutline className='text-4xl text-purple-600 mb-2' />,
//       title: 'Online Payments',
//       text: 'Secure your online purchases with our easy and reliable payment options. We accept all major credit cards, debit cards, and digital wallets.',
//     },
//     {
//       icon: (
//         <AiOutlineSafetyCertificate className='text-4xl text-red-600 mb-2' />
//       ),
//       title: 'Safe & Secure',
//       text: "We understand the importance of online security. That's why we're transparent about our security practices and take every measure to keep your information safe.",
//     },
//   ];

//   return (
//     <div className='bg-white shadow-md rounded-lg p-6 my-6'>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center'>
//         {infoItems.map((item, index) => (
//           <div
//             key={index}
//             className='p-4 border rounded-lg shadow-sm hover:shadow-lg transition duration-300'
//           >
//             {item.icon}
//             <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
//             <p className='text-gray-600 text-sm'>{item.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InfoBox;

import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { IoCardOutline } from 'react-icons/io5';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';

const InfoBox = () => {
  const infoItems = [
    {
      icon: <TbTruckDelivery className='text-5xl text-blue-600 mb-4' />,
      title: 'Free Shipping',
      text: 'Enjoy hassle-free shopping with free shipping on all orders, straight to your doorstep.',
    },
    {
      icon: <RiCustomerService2Fill className='text-5xl text-green-600 mb-4' />,
      title: '24/7 Support',
      text: 'Our support team is available around the clock to assist you with any queries.',
    },
    {
      icon: <IoCardOutline className='text-5xl text-purple-600 mb-4' />,
      title: 'Secure Payments',
      text: 'We offer encrypted transactions for secure and easy payments online.',
    },
    {
      icon: (
        <AiOutlineSafetyCertificate className='text-5xl text-red-600 mb-4' />
      ),
      title: '100% Secure',
      text: 'Your security is our priority. Shop with confidence on our safe platform.',
    },
  ];

  return (
    <div className=' rounded-lg p-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
        {infoItems.map((item, index) => (
          <div
            key={index}
            className='p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300'
          >
            {item.icon}
            <h3 className='text-lg font-bold text-gray-800 mb-2'>
              {item.title}
            </h3>
            <p className='text-gray-600 text-sm leading-relaxed'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBox;
