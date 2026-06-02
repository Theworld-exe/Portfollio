import Header from './components/Header';
import Hero from './components/Hero';
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import TechStack from './components/TechStack';
import CodeSnippets from './components/CodeSnippets';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Particles from './components/Particles';
import CommandPalette from './components/CommandPalette';
import TerminalLoader from './components/TerminalLoader';
import SystemMonitor from './components/SystemMonitor';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app">
      <AnimatePresence>
        {isLoading && <TerminalLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div className="scroll-progress" style={{ scaleX }} />
          <div className="cursor-glow"></div>
          <div className="noise-overlay"></div>
          <div className="grid-bg"></div>
          <Particles />
          <CommandPalette />
          <SystemMonitor />
          <Header />
          <main>
            <Hero />
            <TechStack />
            <CodeSnippets />
            <Timeline />
            <Contact />
          </main>
          <footer className="footer container">
            <div className="footer-content mono">
              <p>Built with late-night coffee and Vite. &copy; {new Date().getFullYear()}</p>
              <div className="social-links">
                <a href="https://linkedin.com">LINKEDIN</a>
                <a href="https://github.com">GITHUB</a>
                <a href="https://x.com">X_DOT_COM</a>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

export default App;
