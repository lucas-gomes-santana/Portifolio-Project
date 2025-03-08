import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header.tsx';
import Profile from './Profile.tsx';
import Projects from './Projects.tsx';
import Skills from './Skills.tsx';
import Contacts from './Contacts.tsx';

import '../css/App.css';

function App() {
    const projectsData = [
        {
            title: "School System Management Project",
            image: "/assets/School-System-Project.png",
            projectType: "Personal Project",
            link: "https://github.com/lucas-gomes-santana/School-System-Project",
            description: "On-line system that will be storage informations about the students of a school.Like notes,observations and presence of the students."
        },
    ];

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Profile/>}/>
                <Route path='/projects' element={ <Projects projects={projectsData}/> } />
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/contacts' element={ <Contacts/> }/>
            </Routes>
        </Router>
    );
}

export default App;