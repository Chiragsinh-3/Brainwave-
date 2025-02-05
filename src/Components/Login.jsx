import React, { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import Loading from "./Loading";

const Login = () => {
  const authContext = useContext(AuthContext);
  const { login } = authContext;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const imageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await login(email, password);
    setLoading(false);
    console.log("Email:", email, "Password:", password);
  };

  useEffect(() => {
    if (formRef.current && imageRef.current) {
      imageRef.current.style.height = `${formRef.current.clientHeight - 75}px`;
    }
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className='min-h-[calc(100vh-5rem)] bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col lg:flex-row justify-center'>
        <div className='max-w-screen-xl m-0 sm:m-10 bg-white dark:bg-gray-800 shadow sm:rounded-lg flex flex-col lg:flex-row justify-center flex-1'>
          <div
            ref={formRef}
            className='lg:w-1/2 xl:w-1/2 p-6 sm:p-12 flex-1 flex flex-col items-center justify-center'
          >
            <div className='mt-12 flex flex-col items-center'>
              <p className='text-xl xl:text-3xl font-extrabold'>Login</p>
              <div className='w-full flex-1 mt-8'>
                <form onSubmit={handleSubmit} className='mx-auto max-w-xs'>
                  <input
                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 focus:bg-white dark:focus:bg-gray-800'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 focus:bg-white dark:focus:bg-gray-800 mt-5'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className='mt-5 tracking-wide font-semibold bg-purple-700 text-gray-100 w-full py-4 rounded-lg hover:bg-purple-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'>
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
                    <span className='ml-3'>Login</span>
                  </button>
                  <p className='mt-6 mb-10 text-xs text-gray-600 dark:text-gray-300 text-center'>
                    Don't have an account?{" "}
                    <a
                      href='/signup'
                      className='text-indigo-500 hover:text-indigo-700 transition duration-300 ease-in-out'
                    >
                      Create New Account
                    </a>
                  </p>
                  <p className='mt-6 text-xs text-gray-600 dark:text-gray-300 text-center'>
                    I agree to abide by templatana's{" "}
                    <a
                      href='#'
                      className='border-b border-gray-500 dark:border-gray-400 border-dotted'
                    >
                      Terms of Service
                    </a>
                    and its{" "}
                    <a
                      href='#'
                      className='border-b border-gray-500 dark:border-gray-400 border-dotted'
                    >
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div
            ref={imageRef}
            className='lg:w-1/2 xl:w-1/2  min-h-full hidden lg:block'
          >
            <div className='w-full bg-contain bg-center bg-no-repeat h-full'>
              <img
                src='./login.jpg'
                alt=''
                className='h-full w-full object-cover'
                style={{ maxHeight: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
