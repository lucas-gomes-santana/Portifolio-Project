import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home.tsx';
import Projects from './Projects.tsx';
import Skills from './Skills.tsx';
import Contacts from './Contacts.tsx';

import '../css/Header.css';

function Header() {
    return(
        <>
            <header>
                <div className="container-name">
                    <h3>Lucas Portifolio</h3>
                </div>

                <nav className='container-links'>
                    <Link to="/home">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contacts">Contact Me</Link>
                    <Link to="/skills">Skills</Link>     
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