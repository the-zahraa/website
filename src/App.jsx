import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Services from './pages/Services';
import BookCallPage from './components/BookCallPage';

export default function App() {
  return (
    <Router>
      <Header />
      <div className="snap-y snap-mandatory min-h-screen">
        <main className="mt-16 bg-transparent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book-a-call" element={<BookCallPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}