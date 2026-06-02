import { motion, AnimatePresence } from 'framer-motion';
import { Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import Magnetic from './Magnetic';
import './Hero.css';

const roles = ["Fullstack Developer", "Systems Architect", "OSS Contributor", "UI/UX Minimalist"];

const Hero: React.FC = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentRole = roles[roleIndex];
            if (!isDeleting) {
                if (displayedText.length < currentRole.length) {
                    setDisplayedText(currentRole.substring(0, displayedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(currentRole.substring(0, displayedText.length - 1));
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, roleIndex]);

    return (
        <section id="about" className="hero">
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <div className="status-badge mono">
                        <span className="pulse"></span> Available for new projects
                    </div>
                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Louai</span>. <br />
                        <span className="typing-text">
                            {displayedText}
                            <span className="typing-cursor"></span>
                        </span>
                    </h1>
                    <p className="hero-description">
                        I write TypeScript, break things in Rust, and build systems that don't fall over.
                        Currently obsessed with low-latency rendering and better DX.
                    </p>
                    <div className="hero-actions">
                        <Magnetic strength={0.3}>
                            <motion.a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary mono"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github size={18} /> View GitHub
                            </motion.a>
                        </Magnetic>
                        <Magnetic strength={0.3}>
                            <motion.a
                                href="#snippets"
                                className="btn btn-secondary mono"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore Snippets
                            </motion.a>
                        </Magnetic>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;