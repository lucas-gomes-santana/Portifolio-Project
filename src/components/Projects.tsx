import { useNavigate } from 'react-router-dom';

import '../css/Projects.css';

function Projects(){

    const navigate = useNavigate();

    return (
        <section>
            <h2>My Projects:</h2>

            <button onClick={() => navigate(-1)}>Return to Main Page</button>
        </section>
    );

}

export default Projects;