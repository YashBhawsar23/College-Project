// const BlogSection = () => {
//   const blogPosts = [
//     {
//       title: 'Ultimate Guide for Styling a Varsity Jacket!',
//       date: '2024-11-08',
//       excerpt:
//         'In this ultimate guide, we explore how to style the iconic varsity jacket across different looks, from retro to minimalist, and casual to bold. Learn how to pull off a...',
//       readTime: 22,
//       image: '/images/Blog1.webp',
//       alt: 'Styling varsity jacket outfit',
//     },
//     {
//       title: 'How to Perfectly Style a Streetwear Outfit!',
//       date: '2024-11-09',
//       excerpt:
//         "In this guide, we break down the essentials of styling the perfect streetwear outfit, whether you're new to the game or a seasoned streetwear enthusiast. Discover how to build a...",
//       readTime: 18,
//       image: '/images/Blog2.webp',
//       alt: 'Urban streetwear fashion look',
//     },
//     {
//       title: 'Best Oversized T-shirts for Woman!',
//       date: '2024-12-13',
//       excerpt:
//         "Bonjour Flexicons!!! there's one fashion item that effortlessly marries comfort with style, it's the oversized T-shirt. From a casual look to a semi-formal look, you can rock the vibe with...",
//       readTime: 15,
//       image: '/images/Blog3.webp',
//       alt: 'Women styling oversized t-shirts',
//     },
//   ];

//   const formatDate = (dateString) => {
//     const options = { month: 'long', day: 'numeric', year: 'numeric' };
//     return new Date(dateString)
//       .toLocaleDateString('en-US', options)
//       .toUpperCase();
//   };

//   return (
//     <div className='w-full mx-auto px-4 sm:px-6 lg:px-8 py-12'>
//       <h2 className='text-3xl font-bold text-gray-900 mb-8'>Blogs</h2>

//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
//         {blogPosts.map((post, index) => (
//           <article
//             key={index}
//             className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden'
//           >
//             {/* Blog Image */}
//             <div className='aspect-w-16 aspect-h-9'>
//               <img
//                 src={post.image}
//                 alt={post.alt}
//                 className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
//               />
//             </div>

//             <div className='p-6'>
//               <h3 className='text-xl font-semibold text-gray-900 mb-2'>
//                 {post.title}
//               </h3>

//               <p className='text-sm text-gray-500 mb-4'>
//                 {formatDate(post.date)}
//               </p>

//               <p className='text-gray-600 mb-4 line-clamp-3'>{post.excerpt}</p>

//               <div className='flex items-center justify-between text-sm'>
//                 <span className='text-blue-600 font-medium hover:text-blue-800 transition-colors'>
//                   Read more →
//                 </span>
//                 <span className='text-gray-400'>{post.readTime} min read</span>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogSection;

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Ultimate Guide for Styling a Varsity Jacket!',
      date: '2024-11-08',
      excerpt:
        'In this ultimate guide, we explore how to style the iconic varsity jacket across different looks, from retro to minimalist, and casual to bold. Learn how to pull off a...',
      readTime: 22,
      image: '/images/Blog1.webp',
      alt: 'Styling varsity jacket outfit',
    },
    {
      title: 'How to Perfectly Style a Streetwear Outfit!',
      date: '2024-11-09',
      excerpt:
        "In this guide, we break down the essentials of styling the perfect streetwear outfit, whether you're new to the game or a seasoned streetwear enthusiast. Discover how to build a...",
      readTime: 18,
      image: '/images/Blog2.webp',
      alt: 'Urban streetwear fashion look',
    },
    {
      title: 'Best Oversized T-shirts for Woman!',
      date: '2024-12-13',
      excerpt:
        "Bonjour Flexicons!!! there's one fashion item that effortlessly marries comfort with style, it's the oversized T-shirt. From a casual look to a semi-formal look, you can rock the vibe with...",
      readTime: 15,
      image: '/images/Blog3.webp',
      alt: 'Women styling oversized t-shirts',
    },
  ];

  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateString)
      .toLocaleDateString('en-US', options)
      .toUpperCase();
  };

  return (
    <div className='w-full px-4 sm:px-6 lg:px-8 py-12'>
      <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
        Blogs
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden'
          >
            {/* Blog Image */}
            <div className='w-full h-64'>
              <img
                src={post.image}
                alt={post.alt}
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
              />
            </div>

            <div className='p-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                {post.title}
              </h3>
              <p className='text-sm text-gray-500 mb-4'>
                {formatDate(post.date)}
              </p>
              <p className='text-gray-600 mb-4 line-clamp-3'>{post.excerpt}</p>

              <div className='flex items-center justify-between text-sm'>
                <span className='text-blue-600 font-medium hover:text-blue-800 transition-colors'>
                  Read more →
                </span>
                <span className='text-gray-400'>{post.readTime} min read</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
