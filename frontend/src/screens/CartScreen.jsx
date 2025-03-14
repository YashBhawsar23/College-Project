import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash, FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import { toast } from 'react-toastify';

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRemoving, setIsRemoving] = useState(null);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );
  const shipping = subtotal > 1000 ? 0 : 99;
  const discount = appliedCoupon
    ? (subtotal * appliedCoupon.discount) / 100
    : 0;
  const total = subtotal + shipping - discount;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
    toast.success(`Updated ${product.name} quantity to ${qty}`);
  };

  const removeFromCartHandler = (id, name) => {
    setIsRemoving(id);
    setTimeout(() => {
      dispatch(removeFromCart(id));
      toast.info(`${name} removed from cart`);
      setIsRemoving(null);
    }, 300);
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'save10') {
      setAppliedCoupon({ code: 'SAVE10', discount: 10 });
      toast.success('Coupon applied: 10% off');
    } else if (couponCode.toLowerCase() === 'freeship') {
      setAppliedCoupon({ code: 'FREESHIP', discount: 0, freeShipping: true });
      toast.success('Free shipping coupon applied');
    } else {
      toast.error('Invalid coupon code');
    }
    setCouponCode('');
  };

  const checkoutHandler = () => {
    navigate('/auth?redirect=/shipping');
  };

  return (
    <div className='max-w-6xl mx-auto p-4 py-8'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold'>Shopping Cart</h1>
        <Link
          to='/'
          className='text-gray-600 hover:text-black flex items-center'
        >
          <FaArrowLeft className='mr-2' /> Continue Shopping
        </Link>
      </div>

      {cartItems.length === 0 ? (
        <div className='text-center py-16'>
          <div className='inline-flex justify-center items-center w-24 h-24 bg-gray-100 rounded-full mb-6'>
            <FaShoppingCart size={30} className='text-gray-400' />
          </div>
          <h2 className='text-2xl font-medium mb-4'>Your cart is empty</h2>
          <p className='text-gray-500 mb-8'>
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to='/'
            className='bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition'
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className='grid lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <div className='bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden'>
              <div className='bg-gray-50 p-4 border-b flex justify-between'>
                <span className='font-medium'>Item Details</span>
                <span className='text-gray-500 text-sm'>
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </span>
              </div>

              <div className='divide-y'>
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className={`p-4 flex flex-col sm:flex-row sm:items-center gap-4 transition-opacity ${
                      isRemoving === item._id ? 'opacity-50' : 'opacity-100'
                    }`}
                  >
                    <div className='flex-shrink-0'>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='w-20 h-20 rounded-lg object-cover border border-gray-200'
                      />
                    </div>

                    <div className='flex-grow'>
                      <Link
                        to={`/product/${item._id}`}
                        className='text-lg font-medium hover:text-blue-600 transition'
                      >
                        {item.name}
                      </Link>
                      {item.brand && (
                        <p className='text-sm text-gray-500 mt-1'>
                          {item.brand}
                        </p>
                      )}
                      {item.size && (
                        <p className='text-sm text-gray-500 mt-1'>
                          Size: {item.size}
                        </p>
                      )}
                      {item.color && (
                        <div className='flex items-center mt-1'>
                          <span className='text-sm text-gray-500 mr-2'>
                            Color:
                          </span>
                          <span
                            className='w-4 h-4 rounded-full border border-gray-200'
                            style={{ backgroundColor: item.color }}
                          ></span>
                        </div>
                      )}
                    </div>

                    <div className='flex items-center gap-2 sm:gap-6'>
                      <div className='flex items-center'>
                        <button
                          onClick={() =>
                            item.qty > 1 && addToCartHandler(item, item.qty - 1)
                          }
                          disabled={item.qty <= 1}
                          className='w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100 disabled:opacity-50'
                          aria-label='Decrease quantity'
                        >
                          -
                        </button>
                        <input
                          type='number'
                          value={item.qty}
                          onChange={(e) => {
                            const newQty = Number(e.target.value);
                            if (newQty > 0 && newQty <= item.countInStock) {
                              addToCartHandler(item, newQty);
                            }
                          }}
                          className='w-12 h-8 text-center border-t border-b border-gray-300 focus:outline-none'
                          min='1'
                          max={item.countInStock}
                        />
                        <button
                          onClick={() =>
                            item.qty < item.countInStock &&
                            addToCartHandler(item, item.qty + 1)
                          }
                          disabled={item.qty >= item.countInStock}
                          className='w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100 disabled:opacity-50'
                          aria-label='Increase quantity'
                        >
                          +
                        </button>
                      </div>

                      <div className='font-medium text-lg'>
                        ₹{(item.price * item.qty).toLocaleString()}
                      </div>

                      <button
                        onClick={() =>
                          removeFromCartHandler(item._id, item.name)
                        }
                        className='text-gray-400 hover:text-red-600 transition-colors p-2'
                        aria-label='Remove item'
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='lg:col-span-1'>
            <div className='bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden sticky top-4'>
              <div className='bg-gray-50 p-4 border-b'>
                <h2 className='text-xl font-medium'>Order Summary</h2>
              </div>

              <div className='p-4 space-y-4'>
                <div className='flex justify-between pb-4 border-b border-gray-100'>
                  <span className='text-gray-600'>Subtotal</span>
                  <span className='font-medium'>
                    ₹{subtotal.toLocaleString()}
                  </span>
                </div>

                <div className='flex justify-between pb-4 border-b border-gray-100'>
                  <span className='text-gray-600'>Shipping</span>
                  <span className='font-medium'>
                    {shipping === 0 ? 'Free' : `₹${shipping}`}
                    {subtotal > 1000 && (
                      <span className='text-green-600 text-xs block text-right'>
                        (Free over ₹1000)
                      </span>
                    )}
                  </span>
                </div>

                {appliedCoupon && (
                  <div className='flex justify-between pb-4 border-b border-gray-100'>
                    <div>
                      <span className='text-gray-600'>Discount</span>
                      <span className='text-green-600 text-xs block'>
                        ({appliedCoupon.code})
                      </span>
                    </div>
                    <span className='font-medium text-green-600'>
                      -₹{discount.toLocaleString()}
                    </span>
                  </div>
                )}

                <div className='flex justify-between pt-2'>
                  <span className='text-lg font-bold'>Total</span>
                  <span className='text-lg font-bold'>
                    ₹{total.toLocaleString()}
                  </span>
                </div>

                <div className='pt-4'>
                  <div className='flex'>
                    <input
                      type='text'
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder='Enter coupon code'
                      className='flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent'
                    />
                    <button
                      onClick={applyCoupon}
                      disabled={!couponCode}
                      className='bg-gray-800 text-white px-4 py-3 rounded-r-md hover:bg-black disabled:bg-gray-400'
                    >
                      Apply
                    </button>
                  </div>
                  <div className='text-xs text-gray-500 mt-2'>
                    Try "SAVE10" for 10% off or "FREESHIP" for free shipping
                  </div>
                </div>

                <button
                  onClick={checkoutHandler}
                  disabled={cartItems.length === 0}
                  className='w-full py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition font-medium text-lg'
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className='mt-8'>
          {/* <h2 className='text-xl font-medium mb-4'>You might also like</h2> */}
          {/* <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className='bg-white rounded-lg shadow-sm p-4 border border-gray-100'
              >
                <div className='h-40 bg-gray-100 rounded-md mb-3'></div>
                <div className='h-4 bg-gray-200 rounded w-3/4 mb-2'></div>
                <div className='h-4 bg-gray-200 rounded w-1/2'></div>
              </div>
            ))}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default CartScreen;
