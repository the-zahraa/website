import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BookCallPage from './components/BookCallPage';

export default function App() {
  return (
    <Router>
      <Header />
      <main className="mt-16 min-h-screen bg-transparent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book-a-call" element={<BookCallPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}