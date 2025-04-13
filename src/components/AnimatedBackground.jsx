import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-zahraa-purple/20 to-zahraa-sky-blue/20" />
      <motion.div
        className="absolute w-64 h-64 md:w-96 md:h-96 bg-zahraa-light-pink/30 rounded-full blur-3xl"
        animate={{
          x: ['0%', '100%', '0%'],
          y: ['0%', '50%', '0%'],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '10%', left: '20%' }}
      />
      <motion.div
        className="absolute w-96 h-96 md:w-128 md:h-128 bg-zahraa-violet/20 rounded-full blur-3xl"
        animate={{
          x: ['0%', '-50%', '0%'],
          y: ['0%', '30%', '0%'],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ bottom: '15%', right: '10%' }}
      />
      <motion.div
        className="absolute w-12 h-12"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ top: '20%', left: '10%' }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FBB6CE" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute w-12 h-12"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{ bottom: '10%', right: '15%' }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#9F7AEA" />
        </svg>
      </motion.div>
    </motion.div>
  );
}