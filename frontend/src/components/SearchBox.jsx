// import React, { useState } from 'react';
// import { Form, Button, Col } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa';

// const SearchBox = () => {
//   const navigate = useNavigate();
//   const { keyword: urlKeyword } = useParams();

//   // FIX: uncontrolled input - urlKeyword may be undefined
//   const [keyword, setKeyword] = useState(urlKeyword || '');

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (keyword) {
//       navigate(`/search/${keyword.trim()}`);
//       setKeyword('');
//     } else {
//       navigate('/');
//     }
//   };

//   return (
//     <Form onSubmit={submitHandler} className='d-flex'>
//       <Form.Control
//         type='text'
//         name='q'
//         onChange={(e) => setKeyword(e.target.value)}
//         value={keyword}
//         placeholder='Search Products...'
//         className='search-box mr-sm-2 ml-sm-5'
//       />

//       <Button
//         type='submit'
//         variant='outline-success'
//         className='search-btn 2-4 mx-2'
//       >
//         <FaSearch />
//       </Button>
//     </Form>
//   );
// };

// export default SearchBox;

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || '');

  useEffect(() => {
    setKeyword(urlKeyword || '');
  }, [urlKeyword]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword.trim()}`);
    } else {
      navigate('/');
    }
  };

  return (
    <form onSubmit={submitHandler} className='flex items-center space-x-2'>
      <input
        type='text'
        name='q'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none'
      />
      <button
        type='submit'
        className='p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all'
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBox;
