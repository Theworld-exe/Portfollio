import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Clock } from 'lucide-react';

const SystemMonitor = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            className="system-monitor mono"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
        >
            <div className="system-stat">
                <span><Clock size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> TIME</span>
                <span>{time.toLocaleTimeString([], { hour12: false })}</span>
            </div>
            <div className="system-stat">
                <span><Cpu size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> OS_ENV</span>
                <span style={{ color: 'var(--accent-purple)' }}>WINDOWS_11</span>
            </div>
            <div className="system-stat">
                <span><Wifi size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> LATENCY</span>
                <span>12ms</span>
            </div>
            <div className="latency-bar">
                <motion.div
                    className="latency-fill"
                    animate={{
                        width: ["40%", "65%", "45%", "80%", "50%"],
                        background: ["var(--accent-lime)", "#bef264", "#84cc16"]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
            </div>
        </motion.div>
    );
};

export default SystemMonitor;
