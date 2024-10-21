import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
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
    <Container>
      <Row className='justify-content-center'>
        <Col md={8}>
          <h1>Contact Us</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId='phone'>
              <Form.Label>Phone/Mobile</Form.Label>
              <Form.Control
                type='mobile'
                name='mobile'
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId='message'>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div className='d-grid mt-3'>
              <Button variant='primary' type='submit'>
                Ask a Question
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
