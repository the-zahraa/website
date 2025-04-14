import { motion } from 'framer-motion';
import FlowerAnimation from '../components/FlowerAnimation';

const projects = [
  {
    title: 'Portfolio Site',
    description: 'A stunning personal portfolio built with React and Tailwind CSS.',
    link: '#',
  },
  {
    title: 'E-Commerce App',
    description: 'A responsive shopping platform with smooth animations.',
    link: '#',
  },
  {
    title: 'Blog Platform',
    description: 'A dynamic blog site with a modern, clean design.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section className="relative px-6 py-28 min-h-screen md:mt-0 mt-40">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-md text-center"
      >
        <h2 className="text-4xl sm:text-5xl text-zahraa-purple mb-10 tracking-tight">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/20 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="text-xl text-zahraa-purple mb-2">{project.title}</h3>
              <p className="text-base text-zahraa-violet mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-zahraa-light-pink text-sm hover:underline"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <FlowerAnimation style={{ top: '10%', left: '5%' }} />
    </section>
  );
}
