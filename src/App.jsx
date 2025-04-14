import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

export default function App() {
  return (
    <Router>
      <AnimatedBackground />
      <Header />
      <main className="mt-20 min-h-screen"> {/* Use margin-top instead of padding-top */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
