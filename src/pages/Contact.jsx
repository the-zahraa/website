import { motion } from 'framer-motion';
import FlowerAnimation from '../components/FlowerAnimation';

export default function Contact() {
  return (
    <section className="relative px-6 py-20 max-w-3xl mx-auto min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-playfair text-zahraa-purple mb-10 text-center"
      >
        Get in Touch
      </motion.h2>
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-md bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-zahraa-light-pink font-poppins"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-md bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-zahraa-light-pink font-poppins"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded-md bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-zahraa-light-pink font-poppins"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-zahraa-light-pink text-white px-6 py-3 rounded-md font-poppins"
        >
          Send Message
        </motion.button>
      </motion.form>
      <FlowerAnimation style={{ top: '20%', right: '10%' }} />
    </section>
  );
}
