const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-orange-50 text-black text-center py-3'>
      <p className='text-sm font-semibold'>
        &copy; {currentYear} by <span className='font-bold'>Swaggin</span>
      </p>
    </footer>
  );
};

export default Footer;
