import { motion } from 'framer-motion';
import FlowerAnimation from '../components/FlowerAnimation';

export default function About() {
  return (
    <section className="relative px-6 py-20 max-w-3xl mx-auto min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-playfair text-zahraa-purple mb-6 text-center"
      >
        About Zahraa
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-lg sm:text-xl font-poppins text-zahraa-violet mb-4"
      >
        I'm a passionate developer who loves crafting beautiful, functional websites with a touch of elegance. My journey in tech is fueled by creativity and a desire to make the web a prettier place!
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-lg sm:text-xl font-poppins text-zahraa-violet"
      >
        When I'm not coding, you can find me exploring design trends or sipping coffee while dreaming up new projects.
      </motion.p>
      <FlowerAnimation style={{ bottom: '10%', right: '10%' }} />
    </section>
  );
}
