// import { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRegisterMutation, useLoginMutation } from '../slices/usersApiSlice';
// import { setCredentials } from '../slices/authSlice';
// import { toast } from 'react-toastify';
// import Loader from '../components/Loader';

// const AuthScreen = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [register, { isLoading: isRegistering }] = useRegisterMutation();
//   const [login, { isLoading: isLoggingIn }] = useLoginMutation();
//   const { userInfo } = useSelector((state) => state.auth);

//   const { search } = useLocation();
//   const sp = new URLSearchParams(search);
//   const redirect = sp.get('redirect') || '/';

//   useEffect(() => {
//     if (userInfo) {
//       navigate(redirect);
//     }
//   }, [navigate, redirect, userInfo]);

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (!isLogin && password !== confirmPassword) {
//       toast.error('Passwords do not match');
//       return;
//     }

//     try {
//       if (isLogin) {
//         const res = await login({ email, password }).unwrap();
//         dispatch(setCredentials({ ...res }));
//       } else {
//         const res = await register({ name, email, password }).unwrap();
//         dispatch(setCredentials({ ...res }));
//       }
//       navigate(redirect);
//     } catch (err) {
//       toast.error(err?.data?.message || err.error);
//     }
//   };

//   return (
//     <div className='flex min-h-screen flex-col items-center justify-center px-4'>
//       <div className='w-full max-w-md rounded-2xl bg-white p-6 md:p-8 shadow-xl'>
//         {/* Tab Buttons for Switching between Sign In & Sign Up */}
//         <div className='mb-6 flex gap-4'>
//           <button
//             className={`flex-1 rounded-lg py-3 text-sm font-medium transition-all duration-200 ${
//               isLogin
//                 ? 'bg-orange-50 text-black shadow-md'
//                 : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
//             }`}
//             onClick={() => setIsLogin(true)}
//             type='button'
//           >
//             Sign In
//           </button>
//           <button
//             className={`flex-1 rounded-lg py-3 text-sm font-medium transition-all duration-200 ${
//               !isLogin
//                 ? 'bg-orange-50 text-black shadow-md'
//                 : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
//             }`}
//             onClick={() => setIsLogin(false)}
//             type='button'
//           >
//             Sign Up
//           </button>
//         </div>

//         <form className='space-y-4' onSubmit={submitHandler}>
//           {!isLogin && (
//             <input
//               type='text'
//               placeholder='Full Name'
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className='w-full rounded-lg border border-gray-200 p-3 text-sm outline-none transition-all duration-200 hover:border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900'
//               required
//             />
//           )}

//           <input
//             type='email'
//             placeholder='Email Address'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className='w-full rounded-lg border border-gray-200 p-3 text-sm outline-none transition-all duration-200 hover:border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900'
//             required
//           />

//           <input
//             type='password'
//             placeholder='Password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className='w-full rounded-lg border border-gray-200 p-3 text-sm outline-none transition-all duration-200 hover:border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900'
//             required
//           />

//           {!isLogin && (
//             <input
//               type='password'
//               placeholder='Confirm Password'
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className='w-full rounded-lg border border-gray-200 p-3 text-sm outline-none transition-all duration-200 hover:border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900'
//               required
//             />
//           )}

//           {/* Remember Me and Forgot Password for Sign In */}
//           {isLogin && (
//             <div className='flex items-center justify-between'>
//               <label className='flex items-center gap-2 text-sm text-gray-500'>
//                 <input
//                   type='checkbox'
//                   className='rounded border-gray-300 text-black focus:ring-gray-900'
//                 />
//                 Remember me
//               </label>
//               <a
//                 href='#'
//                 className='text-sm font-medium text-black hover:text-gray-900'
//               >
//                 Forgot Password?
//               </a>
//             </div>
//           )}

//           {/* Submit Button */}
//           <button
//             type='submit'
//             disabled={isLoggingIn || isRegistering}
//             className='w-full rounded-lg bg-orange-50 text-black py-3 text-sm font-medium transition-colors duration-200 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
//           >
//             {isLoggingIn || isRegistering
//               ? 'Processing...'
//               : isLogin
//               ? 'Sign In'
//               : 'Create Account'}
//           </button>

//           {/* Show Loader when logging in or registering */}
//           {(isLoggingIn || isRegistering) && <Loader />}

//           {/* Toggle Between Sign In and Sign Up */}
//           <p className='text-center text-sm text-gray-500'>
//             {isLogin ? 'Not a member?' : 'Already have an account?'}{' '}
//             <button
//               type='button'
//               onClick={() => setIsLogin(!isLogin)}
//               className='font-medium text-black hover:text-gray-900'
//             >
//               {isLogin ? 'Sign up now' : 'Sign in'}
//             </button>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AuthScreen;

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation, useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading: isRegistering }] = useRegisterMutation();
  const [login, { isLoading: isLoggingIn }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      if (isLogin) {
        const res = await login({ email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
      } else {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
      }
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div
      className='relative flex min-h-screen flex-col items-center justify-center px-4'
      style={{
        backgroundImage:
          "url('https://images.freeimages.com/image/previews/0e1/floral-flourish-frame-5690069.jpg?fmt=webp&h=350')", // Change this path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better readability */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      {/* Form Container */}
      <div className='relative w-full max-w-md rounded-2xl bg-white p-6 md:p-8 shadow-xl bg-opacity-90 backdrop-blur-md'>
        {/* Tab Buttons for Switching between Sign In & Sign Up */}
        <div className='mb-6 flex gap-4'>
          <button
            className={`flex-1 rounded-lg py-3 text-sm font-medium transition-all duration-200 ${
              isLogin
                ? 'bg-orange-50 text-black shadow-md'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
            onClick={() => setIsLogin(true)}
            type='button'
          >
            Sign In
          </button>
          <button
            className={`flex-1 rounded-lg py-3 text-sm font-medium transition-all duration-200 ${
              !isLogin
                ? 'bg-orange-50 text-black shadow-md'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
            onClick={() => setIsLogin(false)}
            type='button'
          >
            Sign Up
          </button>
        </div>

        <form className='space-y-4' onSubmit={submitHandler}>
          {!isLogin && (
            <input
              type='text'
              placeholder='Full Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full rounded-lg border border-gray-200 p-3 text-sm outline-none transition-all duration-200 hover:border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900'
              required
            />
          )}

          <input
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full rounded-lg border border-gray-200 p-3 text-sm outline-none transition-all duration-200 hover:border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900'
            required
          />

          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full rounded-lg border border-gray-200 p-3 text-sm outline-none transition-all duration-200 hover:border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900'
            required
          />

          {!isLogin && (
            <input
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='w-full rounded-lg border border-gray-200 p-3 text-sm outline-none transition-all duration-200 hover:border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900'
              required
            />
          )}

          {/* Remember Me and Forgot Password for Sign In */}
          {isLogin && (
            <div className='flex items-center justify-between'>
              <label className='flex items-center gap-2 text-sm text-gray-500'>
                <input
                  type='checkbox'
                  className='rounded border-gray-300 text-black focus:ring-gray-900'
                />
                Remember me
              </label>
              <a
                href='#'
                className='text-sm font-medium text-black hover:text-gray-900'
              >
                Forgot Password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button
            type='submit'
            disabled={isLoggingIn || isRegistering}
            className='w-full rounded-lg bg-orange-50 text-black py-3 text-sm font-medium transition-colors duration-200 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
          >
            {isLoggingIn || isRegistering
              ? 'Processing...'
              : isLogin
              ? 'Sign In'
              : 'Create Account'}
          </button>

          {/* Show Loader when logging in or registering */}
          {(isLoggingIn || isRegistering) && <Loader />}

          {/* Toggle Between Sign In and Sign Up */}
          <p className='text-center text-sm text-gray-500'>
            {isLogin ? 'Not a member?' : 'Already have an account?'}{' '}
            <button
              type='button'
              onClick={() => setIsLogin(!isLogin)}
              className='font-medium text-black hover:text-gray-900'
            >
              {isLogin ? 'Sign up now' : 'Sign in'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthScreen;
