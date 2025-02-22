import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Header from './Header.tsx';
import Profile from './Profile.tsx';
import Projects from './Projects.tsx';

import '../css/App.css';

function App() {

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Profile/>}/>
                <Route path='/projects' element={<Projects/>}/>
            </Routes>
        </Router>
    );
}

export default App;
