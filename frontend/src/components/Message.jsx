// import { Alert } from 'react-bootstrap';

// const Message = ({ variant, children }) => {
//   return <Alert variant={variant}>{children}</Alert>;
// };

// Message.defaultProps = {
//   variant: 'info',
// };

// export default Message;

const Message = ({ variant = 'info', children }) => {
  const alertStyles = {
    info: 'bg-blue-100 text-blue-800 border-blue-300',
    success: 'bg-green-100 text-green-800 border-green-300',
    danger: 'bg-red-100 text-red-800 border-red-300',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  };

  return (
    <div
      className={`border-l-4 p-4 rounded-md ${
        alertStyles[variant] || alertStyles.info
      }`}
    >
      {children}
    </div>
  );
};

export default Message;
