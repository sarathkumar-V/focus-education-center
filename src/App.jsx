import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Page Imports (to be created)
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Tuition from './pages/Tuition';
import OnlineTuition from './pages/OnlineTuition';
import HomeTuition from './pages/HomeTuition';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow pt-20">
        {/* pt-20 to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tuition" element={<Tuition />} />
          <Route path="/tuition/online-tuition" element={<OnlineTuition />} />
          <Route path="/tuition/home-tuition" element={<HomeTuition />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
