import { Link, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home.tsx';
import Projects from './Projects.tsx';
import Skills from './Skills.tsx';
import Contacts from './Contacts.tsx';

import '../css/Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 630) {
                setIsMenuOpen(true);
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <>
            <header>
                <div className="container-name">
                    <h3>Lucas Portifolio</h3>
                </div>

                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
                </div>

                <nav className={`container-links ${isMenuOpen ? 'show' : ''}`}>
                    <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                    <Link to="/contacts" onClick={() => setIsMenuOpen(false)}>Contact Me</Link>
                    <Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>     
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path='/home' element={<Home/>}/>
                <Route path='/projects' element={<Projects/>} />
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
        </>
    );
}

export default Header;