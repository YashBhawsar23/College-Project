import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <nav className='flex justify-center mb-4 space-x-4'>
      <StepLink to='/auth' label='Sign In' enabled={step1} />
      <StepLink to='/shipping' label='Shipping' enabled={step2} />
      <StepLink to='/payment' label='Payment' enabled={step3} />
      <StepLink to='/placeorder' label='Place Order' enabled={step4} />
    </nav>
  );
};

const StepLink = ({ to, label, enabled }) => {
  return enabled ? (
    <Link
      to={to}
      className='px-4 py-2 text-black border-b-2 border-gray-600 hover:text-black-900 transition'
    >
      {label}
    </Link>
  ) : (
    <span className='px-4 py-2 text-gray-400 border-b-2 border-gray-300 cursor-not-allowed'>
      {label}
    </span>
  );
};

export default CheckoutSteps;
