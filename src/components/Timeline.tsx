import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import './Timeline.css';

interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
    tech: string[];
}

const experiences: Experience[] = [
    {
        company: "FUTURE_CORP",
        role: "Lead Systems Architect",
        period: "2025 - PRESENT",
        description: "Designing distributed state management for high-frequency trading dashboards.",
        tech: ["Rust", "PostgreSQL", "React"]
    },
    {
        company: "NEON_LABS",
        role: "Fullstack Engineer",
        period: "2024 - 2025",
        description: "Optimized WebGL rendering engines and developed multi-tier authentication systems.",
        tech: ["Three.js", "Node.js", "TypeScript"]
    }
];

const Timeline = () => {
    return (
        <section id="experience" className="timeline">
            <div className="container">
                <SectionReveal>
                    <h2 className="section-title mono">WORK_HISTORY</h2>
                    <div className="timeline-container">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                className="timeline-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                            >
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h3 className="company mono">{exp.company}</h3>
                                        <span className="period mono">{exp.period}</span>
                                    </div>
                                    <h4 className="role mono text-secondary">{exp.role}</h4>
                                    <p className="description">{exp.description}</p>
                                    <div className="tech-tags">
                                        {exp.tech.map((t, i) => (
                                            <span key={i} className="tech-tag mono">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default Timeline;
