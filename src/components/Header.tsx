import Magnetic from './Magnetic';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <Magnetic strength={0.2}>
                    <div className="logo mono">
                        <span className="accent-lime">&lt;</span>
                        LOUAI
                        <span className="accent-purple">/</span>
                        DEV
                        <span className="accent-lime">&gt;</span>
                    </div>
                </Magnetic>
                <nav className="nav">
                    <Magnetic strength={0.3}><a href="#about" className="nav-link">About</a></Magnetic>
                    <Magnetic strength={0.3}><a href="#stack" className="nav-link">Stack</a></Magnetic>
                    <Magnetic strength={0.3}><a href="#snippets" className="nav-link">Snippets</a></Magnetic>
                    <Magnetic strength={0.3}><a href="#experience" className="nav-link">Experience</a></Magnetic>
                    <Magnetic strength={0.4}><a href="#contact" className="nav-link nav-cta">Say Hello</a></Magnetic>
                </nav>
            </div>
        </header>
    );
};

export default Header;
