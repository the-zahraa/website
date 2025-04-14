import { motion } from 'framer-motion';
import FlowerAnimation from '../components/FlowerAnimation';

export default function About() {
  return (
    <section className="relative px-6 py-28 min-h-screen md:mt-0 mt-40">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-md text-center"
      >
        <h2 className="text-4xl sm:text-5xl text-zahraa-purple mb-6 tracking-tight">
          About Zahraa
        </h2>
        <p className="text-lg sm:text-xl text-zahraa-violet mb-4">
          I'm a passionate developer who loves crafting beautiful, functional websites with a touch of elegance. My journey in tech is fueled by creativity and a desire to make the web a prettier place!
        </p>
        <p className="text-lg sm:text-xl text-zahraa-violet">
          When I'm not coding, you can find me exploring design trends or sipping coffee while dreaming up new projects.
        </p>
      </motion.div>
      <FlowerAnimation style={{ bottom: '10%', right: '5%' }} />
    </section>
  );
}
