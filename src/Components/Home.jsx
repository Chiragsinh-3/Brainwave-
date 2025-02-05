import React from "react";
import Squares from "./Squares/Squares";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FeatureCard = ({ icon, title, description }) => (
  <Card className='p-6 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700'>
    <CardContent className='space-y-4 p-0'>
      <div className='mb-4'>{icon}</div>
      <h3 className='text-xl font-semibold dark:text-white'>{title}</h3>
      <p className='text-gray-600 dark:text-gray-300'>{description}</p>
    </CardContent>
  </Card>
);
const Home = () => {
  return (
    <div className='relative bg-gray-800 dark:bg-purple-900/50 min-h-screen'>
      <Squares
        speed={0.5}
        squareSize={140}
        direction='up'
        borderColor={
          document.body.classList.contains("dark") ? "#999797" : "#4a4a4a"
        }
        className='fixed inset-0 z-0 '
      />

      <main className='relative  z-10'>
        {/* Hero Section */}
        <section className='container flex items-center justify-center flex-col min-h-[93vh] mx-auto  px-4 pt-20 pb-32 text-center'>
          <div className='flex items-center justify-center mb-4'>
            <span className='bg-purple-100 dark:bg-purple-900/50 text-purple-500 dark:text-purple-300 text-sm font-medium px-4 py-1 rounded-full inline-flex items-center gap-2'>
              <span className='inline-block w-2 h-2 rounded-full bg-purple-500'></span>
              100% Free Forever
            </span>
          </div>

          <h1 className='text-5xl md:text-5xl lg:text-6xl font-bold mb-6 text-purple-400 dark:text-purple-400 bg-clip-text'>
            Capture Your Thoughts, Organize Your Life
          </h1>

          <p className='text-lg md:text-xl text-gray-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
            A powerful, completely free note-taking app that helps you stay
            organized and productive. No hidden fees, no premium features -
            everything is available to everyone.
          </p>

          <Link
            to='/signUp'
            // className='bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700 text-white transform hover:scale-105 transition-transform duration-300'
            className=' sm:w-auto text-center  text-white  dark:text-white px-8 sm:px-10 py-3 rounded-full bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700  transition-all duration-300'
          >
            Get Started Now
          </Link>
        </section>

        {/* Features Grid */}
        {/* <section className=' w-screen px-4 py-16 bg-white dark:bg-gray-900 backdrop-blur-sm'>
          <h2 className='text-3xl font-bold text-center mb-12 dark:text-white'>
             All Features Free Forever
          </h2>

          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            <FeatureCard
              icon={
                <Notebook className='w-12 h-12 text-purple-700 dark:text-purple-400' />
              }
              title='Rich Text Editor'
              description='Create beautiful notes with our powerful rich text editor. Support for markdown, images, and more.'
            />
            <FeatureCard
              icon={
                <Tag className='w-12 h-12 text-purple-700 dark:text-purple-400' />
              }
              title='Smart Organization'
              description='Keep your notes organized with tags, folders, and smart categorization features.'
            />
            <FeatureCard
              icon={
                <Search className='w-12 h-12 text-purple-700 dark:text-purple-400' />
              }
              title='Quick Search'
              description='Find any note instantly with our powerful search functionality. Search across titles, content, and tags.'
            />
            <FeatureCard
              icon={
                <Lock className='w-12 h-12 text-purple-700 dark:text-purple-400' />
              }
              title='Secure Storage'
              description='Your notes are encrypted and securely stored. Only you have access to your data.'
            />
          </div>
        </section> */}

        {/* Why Free Section */}
        <section className='bg-purple-700 dark:bg-purple-900 text-white py-16'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-8'>
              Why Completely Free?
            </h2>
            <p className='text-center text-purple-100 max-w-2xl mx-auto leading-relaxed'>
              We believe in making powerful note-taking accessible to everyone.
              No ads, no hidden costs, just a clean, distraction-free experience
              built by the community, for the community.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className='w-full bg-white dark:bg-gray-900 mx-auto px-4 py-20 text-center'>
          <h2 className='text-3xl font-bold mb-6 dark:text-white'>
            Join Our Free Note-Taking Community
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
            No credit card required, no subscription needed. Just sign up and
            start taking better notes today.
          </p>
          <Link to='/signUp'>
            <Button
              size='lg'
              className='bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700 text-white transform hover:scale-105 transition-transform duration-300'
            >
              Create Free Account
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
