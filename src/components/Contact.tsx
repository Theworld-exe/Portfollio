import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal as TerminalIcon } from 'lucide-react';
import SectionReveal from './SectionReveal';
import './Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setSubmitted(true);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <SectionReveal>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="section-title mono"
                    >
                        INIT_COMMUNICATION
                    </motion.h2>
                    <div className="terminal-container">
                        <div className="terminal-header">
                            <div className="terminal-buttons">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <div className="terminal-title mono">
                                <TerminalIcon size={14} /> guest@portfolio: ~contact
                            </div>
                        </div>
                        <div className="terminal-body">
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label className="mono">01/ NAME:</label>
                                        <input
                                            type="text"
                                            required
                                            className="terminal-input"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="mono">02/ EMAIL:</label>
                                        <input
                                            type="email"
                                            required
                                            className="terminal-input"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="mono">03/ MESSAGE:</label>
                                        <textarea
                                            required
                                            rows={4}
                                            className="terminal-input"
                                            value={formData.message}
                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-actions">
                                        <button type="submit" className="terminal-btn mono">
                                            <Send size={16} /> SEND_MESSAGE
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="success-message mono">
                                    <p>&gt; message_sent: true</p>
                                    <p>&gt; status: 200 OK</p>
                                    <p>&gt; response: "Thanks for reaching out! I'll get back to you soon."</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="terminal-btn mono mt-4"
                                    >
                                        SEND_ANOTHER_CMD
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default Contact;
