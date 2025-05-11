import { useState,useEffect } from 'react';

import '../css/Home.css';

function Home(){

    const [role,setRole] = useState('IT Student');
    
    useEffect(() => {
        const interval = setInterval(() => {
            setRole((prevRole) => (prevRole === 'IT Student' ? 'Full-Stack developer' : 'IT Student'));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return(
        <section className='container-info'>

            <div className="my-foto">
                <img id='animated-foto' src="/assets/My-Foto.png" alt="Lucas Gomes Santana Foto" />
            </div> 

            <div className="my-info">

                <div className="personal-info">
                    <h3>Hi! My name is Lucas Gomes Santana. I'm a <span id='special-word'>{role}.</span> </h3>
                    <p>
                        I'm a brazilian high school student who loves technologies tools and who is constant wiling to learn more and more
                        about the software deveploment area. 
                    </p>
                    <p>I am open to internship, trainee or junior developer positions.</p>
                </div>

                <nav className='container-personal-icons'>
                    <h4>My Linkedin and GitHub:</h4>

                    <a className='special-link' target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/lucas-gomes-santana-77892a343/">
                      <i className='fa-brands fa-linkedin'> </i> 
                    </a>
                    <a className='special-link' target='_blank' rel='noopener noreferrer' href="https://github.com/lucas-gomes-santana">
                      <i className='fa-brands fa-github'></i> 
                    </a>
                </nav>
            </div>

        </section>
    );
}

export default Home;