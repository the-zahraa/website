import { motion } from 'framer-motion';
import FlowerAnimation from '../components/FlowerAnimation';

export default function Contact() {
  return (
    <section className="relative px-6 py-28 min-h-screen md:mt-0 mt-40">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-md mx-auto bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-md text-center"
      >
        <h2 className="text-4xl sm:text-5xl text-zahraa-purple mb-10 tracking-tight">
          Get in Touch
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-zahraa-light-pink"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-zahraa-light-pink"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-md bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-zahraa-light-pink"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-zahraa-light-pink text-white px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
      <FlowerAnimation style={{ top: '10%', right: '5%' }} />
    </section>
  );
}