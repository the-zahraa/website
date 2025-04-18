import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CalEmbed from '@calcom/embed-react';

const BookCallPage = () => {
  const [widgetKey, setWidgetKey] = useState(Date.now());

  // Refresh widget on resize
  useEffect(() => {
    const handleResize = () => {
      setWidgetKey(Date.now()); // Force widget remount on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-6 pb-10 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Schedule a Consultation with a Blockchain & Web Expert
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Book a call to discuss your smart contract, web development, or web design project.
        </p>
      </motion.div>

      {/* Cal.com Widget Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Select a Date and Time
        </h2>
        <div className="w-full relative">
          <CalEmbed
            key={widgetKey} // Force remount on navigation/resize
            calLink="zahraa-dev/30min" // Replace with your Cal.com event link
            style={{ width: '100%', minHeight: '500px' }}
            config={{
              theme: 'dark',
              branding: { brandColor: '#A855F7' },
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default BookCallPage;