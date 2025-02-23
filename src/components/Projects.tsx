import { useNavigate } from 'react-router-dom';

import '../css/Projects.css';

interface ProjectElements {
    image:string;
    title:string;
    description:string;
    link:string;
    projectType:string;
}

function Projects({ image,title,description,link,projectType }: ProjectElements){

    const navigate = useNavigate();

    return (
        <section>
            <h2>My Projects:</h2>

            <div className="card-projects">
                <h3>{ title }</h3>
                <h4>{ projectType }</h4>
                <img src={ image } alt="" />
                <p>{ description }</p>
                <a rel='noopener noreferrer' target='_blank' href={ link }>
                    Get the Source Code
                </a>
            </div>

            <button onClick={() => navigate(-1)}>Return to Main Page</button>
        </section>
    );

}

export default Projects;