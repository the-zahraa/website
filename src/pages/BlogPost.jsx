import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import { Helmet } from 'react-helmet';
import { TagIcon, ClockIcon } from '@heroicons/react/24/outline';

// Animation for content
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    import(`../blogs/${slug}.md`)
      .then((res) => fetch(res.default))
      .then((res) => res.text())
      .then((text) => {
        const { data, content } = matter(text);
        setPost({ ...data, content });
      })
      .catch((err) => console.error('Error loading post:', err));
  }, [slug]);

  if (!post) return <div className="min-h-screen bg-black text-white text-center pt-16">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white pt-16 pb-10 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{post.title} | Zahraa’s Blog</title>
        <meta name="description" content={post.content.split('\n').slice(1).join(' ').substring(0, 160)} />
      </Helmet>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={contentVariants}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-300 text-sm mb-6">
          <div className="flex items-center gap-2">
            <TagIcon className="w-4 h-4 text-[#A855F7]" />
            <span>{post.category}</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="w-4 h-4 text-[#A855F7]" />
            <span>{post.date}</span>
          </div>
        </div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
          loading="lazy"
        />
        <ReactMarkdown
          className="prose prose-invert prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#A855F7] max-w-none"
        >
          {post.content}
        </ReactMarkdown>
      </motion.section>
    </div>
  );
};

export default BlogPost;