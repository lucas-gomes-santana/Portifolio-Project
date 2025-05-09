import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header.tsx';
import '../css/App.css';

function App() {
    return (
        <Router>
            <Header/>
        </Router>
    );
}

export default App;