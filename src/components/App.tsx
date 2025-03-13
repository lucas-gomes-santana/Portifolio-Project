import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header.tsx';
import Home from './Home.tsx';
import Projects from './Projects.tsx';
import Skills from './Skills.tsx';
import Contacts from './Contacts.tsx';

import '../css/App.css';

function App() {
    const projectsData = [
        {
            title: "School System Management Project",
            projectVideo: "/assets/School System Project Recording.webm",
            projectType: "Personal Project",
            link: "https://github.com/lucas-gomes-santana/School-System-Project",
            description: "A School Environment Management System that aims to become a CRUD application in the future, being able to record grades, attendance and observations about students in a school, and also to register teachers in the system. The main idea here is that each school has a system of this model for itself, bringing lightness and simplicity to the teacher when working with information about their students. Go to my GitHub profile for more informations",
            currentState: "In Development",
        },
    ];

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={ <Projects projects={projectsData}/> } />
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/contacts' element={ <Contacts/> }/>
            </Routes>
        </Router>
    );
}

export default App;