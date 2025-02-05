import React, { useState, useRef, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";
import Loading from "./Loading";

const SignUp = () => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { signUp } = authContext;
  const { addAlert } = alertContext;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const imageRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== cpassword) {
      addAlert("error", "Error", "Passwords do not match!");
      setLoading(false);
    } else if (name == "") {
      addAlert("error", "Error", "Add a valid name");
      setLoading(false);
    } else {
      await signUp(name, email, password);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className='min-h-[calc(100vh-5rem)] bg-gray-500 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex'>
        {/* Image Section */}
        <div
          ref={imageRef}
          className='lg:w-1/2 xl:w-1/2 h-[calc(100vh-5rem)] hidden lg:block'
        >
          <img
            src='./sign-up.jpg'
            alt='Sign up'
            className='h-full w-full object-cover'
          />
        </div>

        {/* Form Section */}
        <div className='flex-1 bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-6'>
          <div className='w-full max-w-lg'>
            <div className='text-center mb-6'>
              <p className='text-2xl font-bold'>Sign Up</p>
            </div>

            {/* Signup Form */}
            <form
              onSubmit={handleSubmit}
              className='space-y-6 flex flex-col items-center'
            >
              <input
                className='w-full max-w-xs px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-gray-800'
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className='w-full max-w-xs px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-gray-800'
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className='w-full max-w-xs px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-gray-800'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className='w-full max-w-xs px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:bg-white dark:focus:bg-gray-800'
                type='password'
                placeholder='Confirm Password'
                value={cpassword}
                onChange={(e) => setcPassword(e.target.value)}
              />

              <button
                type='submit'
                className='w-full max-w-xs py-3 bg-purple-700 hover:bg-purple-500 text-white rounded-lg transition duration-300 flex items-center justify-center'
              >
                <svg
                  className='w-6 h-6 -ml-2'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
                  <circle cx='8.5' cy='7' r='4' />
                  <path d='M20 8v6M23 11h-6' />
                </svg>
                <span className='ml-3'>Sign Up</span>
              </button>
            </form>

            <p className='mt-6 mb-10 text-xs text-gray-600 dark:text-gray-300 text-center'>
              Already have an account?{" "}
              <a
                href='/login'
                className='text-indigo-500 hover:text-indigo-700 transition duration-300 ease-in-out'
              >
                Go to Login
              </a>
            </p>

            {/* Terms */}
            <p className='mt-6 text-xs text-gray-600 dark:text-gray-300 text-center'>
              I agree to abide by templatana's{" "}
              <a href='#' className='text-indigo-500 hover:underline'>
                Terms of Service
              </a>{" "}
              and{" "}
              <a href='#' className='text-indigo-500 hover:underline'>
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
