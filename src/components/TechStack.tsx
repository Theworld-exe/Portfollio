import { motion, useMotionValue, useSpring } from 'framer-motion';
import SectionReveal from './SectionReveal';
import './TechStack.css';

const stack = [
    'React', 'TypeScript', 'Node.js', 'PostgreSQL',
    'Next.js', 'GraphQL', 'Docker', 'AWS',
    'TailwindCSS', 'Redis', 'Python', 'Go'
];

const StackItem = ({ name }: { name: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const center = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
        const distance = {
            x: e.clientX - center.x,
            y: e.clientY - center.y
        };

        // Repulsion effect
        const radius = 100;
        const d = Math.sqrt(distance.x ** 2 + distance.y ** 2);
        if (d < radius) {
            const power = (radius - d) / radius;
            x.set(-distance.x * power * 0.5);
            y.set(-distance.y * power * 0.5);
        } else {
            x.set(0);
            y.set(0);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className="stack-item mono"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseXSpring, y: mouseYSpring }}
        >
            {name}
        </motion.div>
    );
};

const TechStack: React.FC = () => {
    return (
        <section id="stack" className="tech-stack">
            <div className="container">
                <SectionReveal>
                    <h2 className="section-title mono">TECHNICAL_STACK</h2>
                    <div className="stack-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '3rem' }}>
                        {stack.map((item, idx) => (
                            <StackItem key={idx} name={item} />
                        ))}
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default TechStack;
