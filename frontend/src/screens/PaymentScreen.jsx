// import { useState, useEffect } from 'react';
// import { Form, Button, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import FormContainer from '../components/FormContainer';
// import CheckoutSteps from '../components/CheckoutSteps';
// import { savePaymentMethod } from '../slices/cartSlice';

// const PaymentScreen = () => {
//   const navigate = useNavigate();
//   const cart = useSelector((state) => state.cart);
//   const { shippingAddress } = cart;

//   useEffect(() => {
//     if (!shippingAddress.address) {
//       navigate('/shipping');
//     }
//   }, [navigate, shippingAddress]);

//   const [paymentMethod, setPaymentMethod] = useState('PayPal');

//   const dispatch = useDispatch();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(savePaymentMethod(paymentMethod));
//     navigate('/placeorder');
//   };

//   return (
//     <FormContainer>
//       <CheckoutSteps step1 step2 step3 />
//       <h1>Payment Method</h1>
//       <Form onSubmit={submitHandler}>
//         <Form.Group>
//           <Form.Label as='legend'>Select Method</Form.Label>
//           <Col>
//             <Form.Check
//               className='my-2'
//               type='radio'
//               // label='Paypal or Credit Card'
//               label='Cash on Delivery'
//               id='PayPal'
//               name='paymentMethod'
//               // value='PayPal'
//               value='Cash on Delivery'
//               checked
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             ></Form.Check>
//           </Col>
//         </Form.Group>

//         <Button type='submit' variant='primary'>
//           Continue
//         </Button>
//       </Form>
//     </FormContainer>
//   );
// };

// export default PaymentScreen;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../slices/cartSlice';
import CheckoutSteps from '../components/CheckoutSteps';

const PaymentScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [navigate, shippingAddress]);

  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };

  return (
    <div className='max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg'>
      <CheckoutSteps step1 step2 step3 />
      <h1 className='text-2xl font-semibold mb-4'>Payment Method</h1>
      <form onSubmit={submitHandler}>
        <div className='mb-4'>
          <label className='block text-gray-700 font-medium mb-2'>
            Select Method
          </label>
          <div className='flex items-center space-x-2'>
            <input
              type='radio'
              id='cod'
              name='paymentMethod'
              value='Cash on Delivery'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
              className='w-4 h-4 text-black border-gray-300 focus:ring-black-900'
            />
            <label htmlFor='cod' className='text-gray-800'>
              Cash on Delivery
            </label>
          </div>
        </div>
        <button
          type='submit'
          className='w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-black-900 transition duration-200'
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default PaymentScreen;
