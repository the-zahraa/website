import React, { useState, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  TagIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

// Placeholder blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Understanding Smart Contracts: A Beginner’s Guide',
    excerpt: 'Learn the basics of smart contracts, their use cases, and how they power decentralized applications.',
    category: 'Blockchain',
    date: 'April 15, 2025',
    slug: 'understanding-smart-contracts',
    image: 'https://picsum.photos/400/200?random=1',
  },
  {
    id: 2,
    title: 'Building Responsive Websites with React and Tailwind',
    excerpt: 'A step-by-step guide to creating modern, responsive websites using React and Tailwind CSS.',
    category: 'Web Development',
    date: 'April 10, 2025',
    slug: 'responsive-websites-react-tailwind',
    image: 'https://picsum.photos/400/200?random=2',
  },
  {
    id: 3,
    title: 'Top 5 UI/UX Design Trends for 2025',
    excerpt: 'Explore the latest trends in UI/UX design to keep your projects ahead of the curve.',
    category: 'UI/UX Design',
    date: 'April 5, 2025',
    slug: 'ui-ux-design-trends-2025',
    image: 'https://picsum.photos/400/200?random=3',
  },
];

// Animation variants for blog cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(blogPosts.map((post) => post.category));
    return ['All', ...cats];
  }, []);

  // Filter blog posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-black text-white pt-16 pb-10 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          Zahraa’s Blog
        </h1>
        <p className="mt-3 text-xl sm:text-2xl text-gray-300">
          Insights on Blockchain, Web Dev, and More
        </p>
        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#A855F7] to-[#9333EA] mx-auto rounded" />
      </motion.section>

      {/* Search and Filter Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 px-4 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A855F7] placeholder-gray-500 text-sm"
            />
            <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  selectedCategory === category
                    ? 'bg-[#A855F7] text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto">
        {filteredPosts.length === 0 ? (
          <p className="text-center text-white text-lg">
            No posts found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

// Blog Post Card Component
const BlogPostCard = ({ post }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{
        y: -10,
        boxShadow: '0 10px 20px rgba(168, 85, 247, 0.2)',
        transition: { duration: 0.3 },
      }}
      className="bg-gray-900 rounded-lg shadow-lg overflow-hidden"
    >
      <Link to={`/blog/${post.slug}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-40 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
            <TagIcon className="w-4 h-4 text-[#A855F7]" />
            <span>{post.category}</span>
            <ClockIcon className="w-4 h-4 text-[#A855F7] ml-2" />
            <span>{post.date}</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
          <p className="text-gray-300 text-sm">{post.excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Blog;