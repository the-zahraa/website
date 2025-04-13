import { motion } from 'framer-motion';
import FlowerAnimation from '../components/FlowerAnimation';

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-24 text-center min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-6xl md:text-7xl font-playfair text-zahraa-purple mb-4"
      >
        Welcome to Zahraa.dev
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-lg sm:text-xl md:text-2xl font-poppins text-zahraa-violet max-w-2xl"
      >
        A stylish space showcasing my passion for coding and creativity.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 bg-zahraa-light-pink text-white px-6 py-3 rounded-full font-poppins text-sm sm:text-base"
      >
        Explore My Work
      </motion.button>
      <FlowerAnimation style={{ top: '10%', left: '10%' }} />
      <FlowerAnimation style={{ bottom: '15%', right: '10%' }} />
    </section>
  );
}
