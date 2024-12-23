// import React from 'react';
// import { Card } from 'react-bootstrap';

// const InfoBox = () => {
//   return (
//     <Card className='text-center mb-4'>
//       {/* <Card.Img variant="top" src={image} alt={title} /> */}
//       <Card.Body>
//         <Card.Title>Free Shipping</Card.Title>
//         <Card.Text>
//           Rigid proponents of content strategy may shun the use of dummy copy.
//         </Card.Text>
//       </Card.Body>
//       <Card.Body>
//         <Card.Title>Support Team</Card.Title>
//         <Card.Text>
//           Designers might want to ask them to provide style sheets with the
//           decks.
//         </Card.Text>
//       </Card.Body>
//       <Card.Body>
//         <Card.Title>Online Payments</Card.Title>
//         <Card.Text>
//           Fake data can ensure a nice looking layout but it doesn’t reflect
//           what.
//         </Card.Text>
//       </Card.Body>
//       <Card.Body>
//         <Card.Title>Safe & Secure</Card.Title>
//         <Card.Text>
//           When it's about controlling hundreds of articles, product pages for
//           web.
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// export default InfoBox;

import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { IoCardOutline } from 'react-icons/io5';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';

const InfoBox = () => {
  return (
    <Card className='text-center mb-4'>
      <Row xs={1} md={4}>
        <Col>
          <Card.Body className='border-bottom'>
            <strong>
              <TbTruckDelivery className='info-icon' />
            </strong>

            <Card.Title>Free Shipping</Card.Title>
            <Card.Text>
              Get your purchases delivered right to your doorstep without any
              extra cost. We offer free shipping on all orders to make your
              shopping experience even better.
            </Card.Text>
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className='border-bottom'>
            <RiCustomerService2Fill className='info-icon' />
            <Card.Title>Support Team</Card.Title>
            <Card.Text>
              Our experienced support team is ready to assist you. We're
              passionate about our products and committed to providing
              exceptional customer service. Get in touch with us today!
            </Card.Text>
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className='border-bottom'>
            <IoCardOutline className='info-icon' />
            <Card.Title>Online Payments</Card.Title>
            <Card.Text>
              Secure your online purchases with our easy and reliable payment
              options. We accept all major credit cards, debit cards, and
              digital wallets for your convenience.
            </Card.Text>
          </Card.Body>
        </Col>
        <Col>
          <Card.Body>
            <AiOutlineSafetyCertificate className='info-icon' />
            <Card.Title>Safe & Secure</Card.Title>
            <Card.Text>
              We understand the importance of online security. That's why we're
              transparent about our security practices and take every measure to
              keep your information safe.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default InfoBox;
