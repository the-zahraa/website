import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white text-gray-900">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-bold tracking-tight uppercase"
          >
            Blockchain Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-4 text-xl md:text-2xl text-gray-600"
          >
            Smart Contracts | Auditing | Web3 Development
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-8"
          >
            <Link
              to="/book-a-call"
              className="inline-block bg-[#00D4FF] text-gray-900 font-bold px-6 py-3 rounded-full text-lg tracking-widest uppercase transition-all duration-300 hover:bg-[#00BFFF]"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight uppercase text-center mb-12">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold uppercase mb-4">Smart Contracts</h3>
              <p className="text-gray-400">Develop secure and efficient smart contracts for your blockchain projects using Solidity.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold uppercase mb-4">Auditing</h3>
              <p className="text-gray-400">Ensure the security of your blockchain applications with comprehensive audits.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold uppercase mb-4">Web3 Development</h3>
              <p className="text-gray-400">Build decentralized applications with seamless Web3 integration.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight uppercase text-center mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-gray-100 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold uppercase mb-4">DeFi Platform</h3>
              <p className="text-gray-600">Developed a decentralized finance platform with smart contract integration for yield farming.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-gray-100 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold uppercase mb-4">NFT Marketplace</h3>
              <p className="text-gray-600">Built an NFT marketplace with secure transactions and Web3 wallet integration.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight uppercase mb-6">Let’s Build Something</h2>
          <p className="text-xl text-gray-400 mb-8">Ready to bring your blockchain project to life? Let’s connect.</p>
          <Link
            to="/book-a-call"
            className="inline-block bg-[#00D4FF] text-gray-900 font-bold px-6 py-3 rounded-full text-lg tracking-widest uppercase transition-all duration-300 hover:bg-[#00BFFF]"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </div>
  );
}
