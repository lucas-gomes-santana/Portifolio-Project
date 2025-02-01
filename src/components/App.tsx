import { useState } from 'react';
import Footer from './Footer';
import Projects from './Projects';
import Header from './Header';
import Profile from './Profile';

import '../css/App.css';

function App() {
    const [activeComponent, setActiveComponent] = useState('projects'); 

    // Functions to toggle components
    const showProjects = () => setActiveComponent('projects');
    const showProfile = () => setActiveComponent('profile');

    return (
        <>
            {activeComponent !== 'profile' && (
                <>
                    <Header ShowProfile={showProfile}/>
                </>
            )}
            <main className="content-container">
                {activeComponent === 'projects' && (
                    <div className="projects-container">
                        <Projects
                            image="/assets/Projeto-Blog.png"
                            title="Blog Website Project"
                            projectType="Educational Project from DIO platform"
                            description="A simple project made with the Angular framework that simulates a blog website."
                            link="https://github.com/lucas-gomes-santana/Simple-Blog-Page-Angular-Project"
                        />
                        <Projects
                            image="/assets/Projeto-PlayStation-Store.png"
                            title="PlayStation Store Clone Project"
                            projectType="Educational Project from DIO platform"
                            description="Another simple project made with Angular that simulates the Front-End of the PlayStation Store platform."
                            link="https://github.com/lucas-gomes-santana/PlayStation-Store-Clone-Angular-Project"
                        />
                        <Projects
                            image="/assets/Projeto-Pokemon-Pokedex.png"
                            title="Pokémon Pokedex Project"
                            projectType="Educational Project from DIO platform"
                            description="A project that makes a request to the PokeAPI corresponding to the name of the Pokémon entered, verified by the site's logic part (JavaScript or TypeScript)."
                            link="https://github.com/lucas-gomes-santana/Projeto-Pokedex"
                        />
                        <Projects
                            image='assets/Projeto-Portifolio.png'
                            title='Portfolio Project'
                            projectType='Personal Project'
                            description='A portfolio template that I created myself using the React framework'
                            link="http://localhost:5173/"                       
                        />
                    </div>
                )}
                {activeComponent === 'profile' && <Profile GoBack={showProjects} />}
            </main>

            {activeComponent !== 'profile' && <Footer />}
        </>
    );
}

export default App;
