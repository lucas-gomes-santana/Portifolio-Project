import { Link } from 'react-router-dom';

import '../css/Header.css';

function Header() {

    return(
        <header>

            <div className="container-name">
                <h3>Lucas Gomes Santana Portifolio</h3>
            </div>

            <nav className='container-links'>
                <Link to="/home">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contact Me</Link>
                <Link to="/skills">Skills</Link>     
            </nav>

        </header>
    );
}

export default Header;