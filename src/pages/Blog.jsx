import { motion } from 'framer-motion';


const posts = [
  {
    title: 'Building a Stylish Portfolio',
    excerpt: 'How I created zahraa.dev with React and Tailwind CSS.',
    link: '#',
  },
  {
    title: 'Mastering Framer Motion',
    excerpt: 'Tips for adding smooth animations to your website.',
    link: '#',
  },
];

export default function Blog() {
  return (
    <section className="relative px-6 py-20 max-w-4xl mx-auto min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-playfair text-zahraa-purple mb-10 text-center"
      >
        Blog
      </motion.h2>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-playfair text-zahraa-purple mb-2">{post.title}</h3>
            <p className="text-base font-poppins text-zahraa-violet mb-4">{post.excerpt}</p>
            <a
              href={post.link}
              className="text-zahraa-light-pink font-poppins text-sm hover:underline"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}