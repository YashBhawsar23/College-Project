// import { Container, Row, Col } from 'react-bootstrap';

// const FormContainer = ({ children }) => {
//   return (
//     <Container>
//       <Row className='justify-content-md-center'>
//         <Col xs={12} md={6}>
//           {children}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default FormContainer;

const FormContainer = ({ children }) => {
  return <div className='max-w-lg mx-auto p-6'>{children}</div>;
};

export default FormContainer;
