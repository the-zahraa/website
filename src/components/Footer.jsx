import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-zahraa-violet/80 text-white py-6"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-poppins">
          © 2025 Zahraa.dev. Made with 💖
        </p>
      </div>
    </motion.footer>
  );
}