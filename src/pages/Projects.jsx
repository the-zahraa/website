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
    <section className="relative px-6 py-20 max-w-5xl mx-auto min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-playfair text-zahraa-purple mb-10 text-center"
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-playfair text-zahraa-purple mb-2">{project.title}</h3>
            <p className="text-base font-poppins text-zahraa-violet mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-zahraa-light-pink font-poppins text-sm hover:underline"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
      <FlowerAnimation style={{ top: '15%', left: '5%' }} />
    </section>
  );
}

