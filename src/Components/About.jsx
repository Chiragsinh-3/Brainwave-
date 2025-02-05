import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiLock, FiUserPlus } from "react-icons/fi";
import { FlickeringGrid } from "./ui/flickering-grid";

const About = () => {
  const ref = useRef(null);
  const [heightDiv, setHeightDiv] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeightDiv(ref.current.clientHeight);
    }
  }, []);

  return (
    <div className='min-h-screen scrollbar-hidden bg-gray-50 dark:bg-black'>
      {/* Hero Section */}
      <div
        className='relative h-screen sm:h-[80vh] w-full bg-black dark:bg-[#16131f] z-10'
        ref={ref}
      >
        <div className='absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 lg:px-8'>
          <div className='text-white'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight'>
                Welcome to Brainwave
              </h1>
              <p className='text-lg sm:text-xl mb-8 max-w-2xl mx-auto px-4'>
                Your intelligent note-taking solution that helps you organize
                thoughts, ideas, and tasks seamlessly.
              </p>
            </div>
          </div>
        </div>

        <FlickeringGrid
          className='inset-0 h-[900px] [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]'
          squareSize={5}
          gridGap={30}
          color='#ffffff'
          maxOpacity={0.5}
          flickerChance={0.5}
          height={heightDiv}
          width={document.body.style.width}
        />

        <div className='absolute bottom-1/4 left-1/2 -translate-x-1/2 w-full px-4 sm:px-0'>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8'>
            <Link
              to='/signup'
              className='w-full sm:w-auto text-center bg-white dark:bg-purple-900 text-purple-600 dark:text-white px-8 sm:px-10 py-3 rounded-full font-semibold hover:dark:bg-purple-100 hover:bg-purple-900 hover:text-white dark:hover:text-black transition'
            >
              Get Started
            </Link>
            <Link
              to='/login'
              className='w-full sm:w-auto text-center border-2 text-white border-white dark:text-white px-8 sm:px-10 py-3 rounded-full hover:bg-white hover:text-purple-600 transition'
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 dark:bg-black'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-2xl sm:text-3xl font-bold text-center mb-12 dark:text-white'>
            Features
          </h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            <div className='p-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-md transition'>
              <FiUserPlus className='text-3xl text-purple-600 mb-4' />
              <h3 className='text-xl dark:text-white font-semibold mb-2'>
                Secure Authentication
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Safe and secure user registration and login system to protect
                your personal notes.
              </p>
            </div>

            <div className='p-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-md transition'>
              <FiEdit className='text-3xl text-purple-600 mb-4' />
              <h3 className='text-xl dark:text-white font-semibold mb-2'>
                Smart Organization
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Create notes with titles, descriptions, and tags for easy
                organization and quick access.
              </p>
            </div>

            <div className='p-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-md transition'>
              <FiLock className='text-3xl text-purple-600 mb-4' />
              <h3 className='text-xl dark:text-white font-semibold mb-2'>
                Full Control
              </h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Easily update or delete your notes. Your data remains completely
                under your control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <div className='bg-white dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-2xl sm:text-3xl font-bold text-center mb-12 dark:text-white'>
            How It Works
          </h2>
          <div className='space-y-8 md:space-y-12'>
            {[
              {
                step: "1",
                title: "Create an Account",
                description:
                  "Sign up for free and start creating your personalized notes collection.",
              },
              {
                step: "2",
                title: "Organize with Tags",
                description:
                  "Add tags to categorize your notes and find them quickly using the search feature.",
              },
              {
                step: "3",
                title: "Manage Effortlessly",
                description:
                  "Edit, update, or delete notes anytime. Your changes are saved automatically.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className='flex flex-col sm:flex-row items-center sm:items-start gap-6'
              >
                <div className='bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'>
                  <span className='font-bold'>{item.step}</span>
                </div>
                <div className='text-center sm:text-left'>
                  <h3 className='text-xl font-semibold mb-2 dark:text-white'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-400 max-w-xl'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className='bg-purple-200 dark:bg-purple-900 py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 dark:text-white'>
            Start Organizing Your Thoughts Today
          </h2>
          <Link
            to='/signup'
            className='inline-block bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition transform hover:scale-105'
          >
            Join Brainwave Now
          </Link>
        </div>
      </section>

      <footer className='bg-gray-800 text-white py-8 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <p className='text-gray-400'>
            © {new Date().getFullYear()} Brainwave. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
