import { useState, useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FileCode, GitBranch, Terminal, Copy, Check } from 'lucide-react';
import SectionReveal from './SectionReveal';
import Heatmap from './Heatmap';
import './CodeSnippets.css';

interface Snippet {
    title: string;
    language: string;
    description: string;
    code: string;
}

const snippets: Snippet[] = [
    {
        title: "Thread_Safe_Event_Bus",
        language: "Rust/WASM",
        description: "A lock-free event bus for cross-worker communication. Avoids the main-thread bottleneck.",
        code: `pub struct EventBus {
    channels: DashMap<String, Vec<Sender>>,
}

impl EventBus {
    pub fn publish(&self, topic: &str, msg: Msg) {
        if let Some(subs) = self.channels.get(topic) {
            for s in subs.iter() {
                s.send(msg.clone()).ok();
            }
        }
    }
}`
    },
    {
        title: "Dynamic_SVG_Path_Gen",
        language: "TypeScript",
        description: "Bezier curve smoothing for real-time sensor data visualization.",
        code: `const getSmoothPath = (pts) => {
  return pts.reduce((acc, p, i, a) => {
    if (i === 0) return \`M \${p.x} \${p.y}\`;
    const cp1 = getControlPoint(a[i-1], a[i-2], p);
    const cp2 = getControlPoint(p, a[i-1], a[i+1], true);
    return \`\${acc} C \${cp1.x} \${cp1.y}, \${cp2.x} \${cp2.y}, \${p.x} \${p.y}\`;
  }, "");
}`
    }
];

const TiltCard = ({ children, className }: { children: ReactNode, className?: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={className}
        >
            <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
                {children}
            </div>
        </motion.div>
    );
};

const CodeSnippets = () => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = (code: string, index: number) => {
        navigator.clipboard.writeText(code);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <section id="snippets" className="snippets">
            <div className="container">
                <SectionReveal>
                    <div className="section-header">
                        <h2 className="section-title mono">DEV_GISTS_&_OSS</h2>
                        <p className="section-subtitle">A collection of technical experiments, gists, and open-source contributions.</p>
                    </div>

                    <div className="snippets-grid">
                        {snippets.map((snippet, idx) => (
                            <TiltCard key={idx} className="snippet-card">
                                <div className="snippet-header">
                                    <div className="snippet-info">
                                        <FileCode size={16} className="accent-purple" />
                                        <span className="snippet-title mono">{snippet.title}</span>
                                    </div>
                                    <span className="snippet-lang mono">{snippet.language}</span>
                                </div>
                                <p className="snippet-desc">{snippet.description}</p>
                                <div className="code-window">
                                    <div className="code-header">
                                        <div className="dots">
                                            <span></span><span></span><span></span>
                                        </div>
                                        <button
                                            className="copy-btn mono"
                                            onClick={() => handleCopy(snippet.code, idx)}
                                        >
                                            {copiedIndex === idx ? <Check size={14} /> : <Copy size={14} />}
                                            {copiedIndex === idx ? 'COPIED' : 'COPY'}
                                        </button>
                                    </div>
                                    <pre className="mono">
                                        <code>{snippet.code}</code>
                                    </pre>
                                </div>
                            </TiltCard>
                        ))}

                        {/* OSS Card */}
                        <TiltCard className="snippet-card oss-card">
                            <div className="snippet-header">
                                <div className="snippet-info">
                                    <GitBranch size={16} className="accent-lime" />
                                    <span className="snippet-title mono">OSS_Impact</span>
                                </div>
                            </div>
                            <div className="oss-stats">
                                <div className="stat">
                                    <span className="stat-value mono">50+</span>
                                    <span className="stat-label mono">PRs_MERGED</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-value mono">1.2k</span>
                                    <span className="stat-label mono">STARS_EARNED</span>
                                </div>
                            </div>
                            <p className="snippet-desc">Active contributor to various documentation pipelines and performance utilities.</p>
                            <Heatmap />
                            <div className="terminal-footer">
                                <Terminal size={14} />
                                <span className="mono">github --activity --last-30-days</span>
                            </div>
                        </TiltCard>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default CodeSnippets;