import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header.tsx';

function App() {
    return (
        <Router basename="/Portifolio-Project">
            <Header/>
        </Router>
    );
}

export default App;