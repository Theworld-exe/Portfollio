import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const logs = [
    "INITIALIZING_CORE_SYSTEMS...",
    "ESTABLISHING_VIRTUAL_DOM_CONNECTION",
    "LOADING_RUST_WASM_MODULES",
    "OPTIMIZING_RENDER_PIPELINE",
    "FETCHING_USER_METRICS",
    "STARTING_DEVELOPER_INTERFACE"
];

const TerminalLoader = ({ onComplete }: { onComplete: () => void }) => {
    const [currentLog, setCurrentLog] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (currentLog < logs.length) {
            const timeout = setTimeout(() => {
                setCurrentLog(prev => prev + 1);
                setProgress(Math.min(((currentLog + 1) / logs.length) * 100, 100));
            }, 400 + Math.random() * 400);
            return () => clearTimeout(timeout);
        } else {
            const finalTimeout = setTimeout(onComplete, 800);
            return () => clearTimeout(finalTimeout);
        }
    }, [currentLog, onComplete]);

    return (
        <motion.div
            className="terminal-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 20000,
                background: '#000',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem'
            }}
        >
            <div style={{ maxWidth: '500px', width: '100%' }}>
                <div className="mono" style={{ color: 'var(--accent-lime)', marginBottom: '1.5rem', fontSize: '0.8rem' }}>
                    {logs.slice(0, currentLog + 1).map((log, i) => (
                        <div key={i} style={{ marginBottom: '4px', opacity: i === currentLog ? 1 : 0.5 }}>
                            {i === currentLog ? "> " : "  "} {log}
                        </div>
                    ))}
                </div>

                <div style={{
                    width: '100%',
                    height: '2px',
                    background: '#111',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '1px'
                }}>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        style={{
                            position: 'absolute',
                            height: '100%',
                            background: 'var(--accent-lime)',
                            boxShadow: '0 0 10px var(--accent-lime)'
                        }}
                    />
                </div>
                <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                    <span>SYSTEM_BOOT</span>
                    <span>{Math.floor(progress)}%</span>
                </div>
            </div>
        </motion.div>
    );
};

export default TerminalLoader;
