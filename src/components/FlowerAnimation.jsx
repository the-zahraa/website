import { motion } from 'framer-motion';

export default function FlowerAnimation({ style }) {
  return (
    <motion.div
      className="absolute w-24 h-24"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      style={style}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M50,20 C60,10 70,20 70,30 C70,40 60,50 50,50 C40,50 30,40 30,30 C30,20 40,10 50,20"
          fill="none"
          stroke="#FBB6CE"
          strokeWidth="4"
        />
        <path
          d="M50,20 C60,10 70,20 70,30 C70,40 60,50 50,50 C40,50 30,40 30,30 C30,20 40,10 50,20"
          fill="none"
          stroke="#9F7AEA"
          strokeWidth="4"
          transform="rotate(45 50 50)"
        />
      </svg>
    </motion.div>
  );
}