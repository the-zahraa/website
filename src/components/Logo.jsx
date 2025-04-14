import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.h1
      className="text-xl text-white font-bold tracking-tight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      zahraa.dev
    </motion.h1>
  );
}