import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, Home, Code, History, Mail, CornerDownLeft } from 'lucide-react';
import './CommandPalette.css';

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");

    const actions = [
        { id: 'about', title: 'Go to About', icon: <Home size={18} />, href: '#about' },
        { id: 'snippets', title: 'Go to Snippets', icon: <Code size={18} />, href: '#snippets' },
        { id: 'timeline', title: 'Go to Timeline', icon: <History size={18} />, href: '#experience' },
        { id: 'contact', title: 'Go to Contact', icon: <Mail size={18} />, href: '#contact' },
    ];

    const filteredActions = actions.filter(action =>
        action.title.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') setIsOpen(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleAction = (href: string) => {
        setIsOpen(false);
        setQuery("");
        window.location.hash = href;
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="cmdk-overlay" onClick={() => setIsOpen(false)}>
                    <motion.div
                        className="cmdk-modal"
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="cmdk-header">
                            <Search size={18} className="cmdk-search-icon" />
                            <input
                                autoFocus
                                placeholder="Type a command or search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="cmdk-input mono"
                            />
                            <div className="cmdk-badge mono">ESC</div>
                        </div>
                        <div className="cmdk-list">
                            {filteredActions.map(action => (
                                <button
                                    key={action.id}
                                    className="cmdk-item mono"
                                    onClick={() => handleAction(action.href)}
                                >
                                    <div className="cmdk-item-content">
                                        {action.icon}
                                        <span>{action.title}</span>
                                    </div>
                                    <CornerDownLeft size={14} className="cmdk-enter-icon" />
                                </button>
                            ))}
                            {filteredActions.length === 0 && (
                                <div className="cmdk-empty mono">No results found.</div>
                            )}
                        </div>
                        <div className="cmdk-footer mono">
                            <div className="cmdk-shortcut">
                                <Command size={14} /> <span>K</span>
                            </div>
                            <span>to open</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
