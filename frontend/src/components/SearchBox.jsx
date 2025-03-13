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
        className='px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none'
      />
      <button
        type='submit'
        className='p-2 text-black  rounded-lg transition-all'
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBox;
