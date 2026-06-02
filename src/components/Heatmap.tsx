import { motion } from 'framer-motion';
import './Heatmap.css';

const Heatmap = () => {
    // Generate a dummy contribution grid
    const days = Array.from({ length: 52 * 7 });
    const levels = [0, 1, 2, 3, 4];

    return (
        <div className="heatmap-container">
            <div className="heatmap-grid">
                {days.map((_, i) => {
                    const level = levels[Math.floor(Math.random() * levels.length)];
                    // Bias towards more activity in the last 100 days
                    const biasedLevel = i > 250 ? Math.max(level, 1) : level;

                    return (
                        <motion.div
                            key={i}
                            className={`cell level-${biasedLevel}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.001 }}
                        />
                    );
                })}
            </div>
            <div className="heatmap-labels mono">
                <span>Less</span>
                <div className="level-0"></div>
                <div className="level-1"></div>
                <div className="level-2"></div>
                <div className="level-3"></div>
                <div className="level-4"></div>
                <span>More</span>
            </div>
        </div>
    );
};

export default Heatmap;
