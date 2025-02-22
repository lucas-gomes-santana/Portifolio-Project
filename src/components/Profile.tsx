import { useState,useEffect } from 'react';

import '../css/Profile.css';

function Profile(){

    const [role,setRole] = useState('Student');
    
    useEffect(() => {
        const interval = setInterval(() => {
            setRole((prevRole) => (prevRole === 'Student' ? 'Full Stack developer' : 'Student'));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return(
        <section>

            <div className="my-foto">
                <img id='animated-foto' src="/assets/Minha-Foto.jpg" alt="" />
            </div> 

            <div className="my-info">

                <div className="personal-info">
                    <h3>Hi!My name is Lucas.I'm a <span id='special-word'>{role}.</span> </h3>
                    <p>
                        I'm a brazilian high school student who loves technologies tools and who is constant wiling to learn more and more
                        about the software deveploment area.
                    </p>
                </div>

                <nav>
                    <a target='_blank' href="https://www.linkedin.com/in/lucas-gomes-santana-77892a343/"> <i className='fa-brands fa-linkedin'> </i> </a>
                    <a target='_blank' href="https://github.com/lucas-gomes-santana"> <i className='fa-brands fa-github'></i> </a>
                </nav>
            </div>

        </section>
    );
}

export default Profile;