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
            title: "PeuCar Automotives Website",
            projectImage: "/public/assets/PeuCar-Website.png",
            projectType: "Freelance Web Application",
            link: "https://peucar-automotivos-ipira.vercel.app/",
            description: "A freelance project that i developed for a small car workshop bussines. It's a simple website that allows the user see about the services of the workshop and also sent a E-mail message directly to the owner on website.",
            currentState: "Completed",
            textLink: "Go to the Website",
        },
    ]

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/projects' element={ <Projects projects={projectsData}/> } />
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/contacts' element={ <Contacts/> }/>
            </Routes>
        </Router>
    );
}

export default App;