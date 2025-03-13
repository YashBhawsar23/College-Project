// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { toast } from 'react-toastify';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     toast.success('Form submitted successfully');
//   };

//   return (
//     <Container>
//       <Row className='justify-content-center'>
//         <Col md={8}>
//           <h1>Contact Us</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId='name'>
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type='text'
//                 name='name'
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId='email'>
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type='email'
//                 name='email'
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId='phone'>
//               <Form.Label>Phone/Mobile</Form.Label>
//               <Form.Control
//                 type='mobile'
//                 name='mobile'
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId='message'>
//               <Form.Label>Message</Form.Label>
//               <Form.Control
//                 as='textarea'
//                 rows={3}
//                 name='message'
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <div className='d-grid mt-3'>
//               <Button variant='primary' type='submit'>
//                 Ask a Question
//               </Button>
//             </div>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ContactPage;

import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success('Form submitted successfully');
  };

  return (
    <div className='max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold mb-6 text-center'>Contact Us</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block text-gray-700 font-medium'>Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200'
          />
        </div>

        <div>
          <label className='block text-gray-700 font-medium'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200'
          />
        </div>

        <div>
          <label className='block text-gray-700 font-medium'>
            Phone/Mobile
          </label>
          <input
            type='text'
            name='mobile'
            value={formData.mobile}
            onChange={handleChange}
            required
            className='w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200'
          />
        </div>

        <div>
          <label className='block text-gray-700 font-medium'>Message</label>
          <textarea
            name='message'
            rows='3'
            value={formData.message}
            onChange={handleChange}
            required
            className='w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200'
          ></textarea>
        </div>

        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'
        >
          Ask a Question
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
