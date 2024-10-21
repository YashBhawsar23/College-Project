import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <Container fluid className='hero-section bg-light py-5'>
      <Row className='align-items-center'>
        <h1>About Us</h1>
        <Col md={6}>
          <Image
            src='/images/Hero.JPG'
            alt='Hero'
            fluid
            className='w-100 h-100'
            style={{ objectFit: 'cover', maxHeight: '600px' }}
          />
        </Col>
        <Col md={6}>
          <div className='hero-content px-4'>
            <h1 className='display-4'>
              <strong>
                <b>SWAGGIN</b>
              </strong>
            </h1>
            <p className='lead'>
              Swaggin, founded in 2024 and proudly based in India, is more than
              just a clothing brand—it's a vision, a passion, and a commitment
              to redefining fast fashion.
            </p>
            <p>
              Swaggin was born out of a dream to create a global brand with a
              distinctly Indian identity. Coming from a business background, our
              founder recognized the growing demand for fast fashion and saw an
              opportunity to fill a niche in the market. With a deep love for
              fashion and a desire to showcase the best of Indian craftsmanship,
              Swaggin was launched with the goal of offering trendy,
              high-quality apparel that proudly bears the “Made in India” label.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
