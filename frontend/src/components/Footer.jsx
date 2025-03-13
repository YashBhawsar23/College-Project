// import { Container, Row, Col } from 'react-bootstrap';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className='bg'>
//       <Container>
//         <Row>
//           <Col className='text-center py-3'>
//             <b>
//               <p>
//                 &copy; Copyright - {currentYear} by <b>Swaggin</b>
//               </p>
//             </b>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };
// export default Footer;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white text-center py-3'>
      <p className='text-sm font-semibold'>
        &copy; {currentYear} by <span className='font-bold'>Swaggin</span>
      </p>
    </footer>
  );
};

export default Footer;
