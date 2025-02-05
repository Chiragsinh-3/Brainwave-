import React, { useContext, useState, useEffect } from "react";
import AlertContext from "../context/alert/alertContext";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const alertContext = useContext(AlertContext);
  const { addAlert } = alertContext;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    addAlert("success", "Success", "Logged Out");
  };

  return (
    <div
      className={`sticky backdrop-blur-sm top-0 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-lg"
          : "bg-white/50 dark:bg-gray-900/50"
      } z-50`}
    >
      <header className='max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex  items-center'>
            <Link
              to='/'
              className='flex items-center space-x-2 transition-transform hover:scale-110'
            >
              <span className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-300 bg-clip-text text-transparent'>
                Brainwave!
              </span>
            </Link>
          </div>

          <nav className='hidden md:flex items-center space-x-8'>
            {[
              { path: "/", label: "Home" },
              { path: "/notes", label: "Add Note" },
              { path: "/about", label: "About" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium text-sm transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-purple-600 dark:text-purple-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className='absolute -bottom-1 left-0 w-full h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full' />
                )}
              </Link>
            ))}
          </nav>

          <div className='flex items-center space-x-4'>
            {!localStorage.getItem("token") ? (
              <div className='hidden md:flex items-center space-x-4'>
                <Link
                  to='/signUp'
                  className='px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-colors'
                >
                  Sign Up
                </Link>
                <Link
                  to='/login'
                  className='px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors'
                >
                  Log in
                </Link>
              </div>
            ) : (
              <Link
                onClick={handleLogout}
                to='/login'
                className='hidden md:inline-flex px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-lg transition-colors'
              >
                Log out
              </Link>
            )}

            <button
              onClick={handleToggle}
              className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
              aria-label='Toggle theme'
            >
              {darkMode ? (
                <svg
                  className='w-5 h-5 text-yellow-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                  />
                </svg>
              ) : (
                <svg
                  className='w-5 h-5 text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                </svg>
              )}
            </button>

            <button
              onClick={handleMenuToggle}
              className='md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
              aria-label='Toggle menu'
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${
                  isMenuOpen ? "transform rotate-180" : ""
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`md:hidden min-h-screen w-screen overflow-hidden fixed inset-0 z-40 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out backdrop-blur-lg`}
      >
        <div
          className='fixed inset-0 bg-gray-600/90  backdrop-blur-sm'
          onClick={handleMenuToggle}
        />
        <div className='relative bg-white dark:bg-gray-900 h-full w-64 py-6 px-4 flex flex-col'>
          <div className='space-y-6'>
            {[
              { path: "/", label: "Home" },
              { path: "/notes", label: "Add Note" },
              { path: "/about", label: "About" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleMenuToggle}
                className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {!localStorage.getItem("token") ? (
              <div className='space-y-2'>
                <Link
                  to='/signUp'
                  onClick={handleMenuToggle}
                  className='block w-full px-4 py-2 text-center text-purple-600 dark:text-purple-400 border border-purple-600 dark:border-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors'
                >
                  Sign Up
                </Link>
                <Link
                  to='/login'
                  onClick={handleMenuToggle}
                  className='block w-full px-4 py-2 text-center text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors'
                >
                  Log in
                </Link>
              </div>
            ) : (
              <Link
                onClick={() => {
                  handleLogout();
                  handleMenuToggle();
                }}
                to='/login'
                className='block w-full px-4 py-2 text-center text-purple-600 dark:text-purple-400 border border-purple-600 dark:border-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors'
              >
                Log out
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
