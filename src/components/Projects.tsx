import { useNavigate } from "react-router-dom";
import '../css/Projects.css';

interface ProjectElements{
    image:string;
    title:string;
    description:string;
    projectType:string;
    link:string;
}

function Projects({ projects }: { projects: ProjectElements[] }) {
    const navigate = useNavigate();

    return (
        <section className='main-container'>
            <h2>My Projects:</h2>
            <div className="project-container">
                {projects.map((project, index) => (
                    <div className="card-projects" key={ index }>
                        <h3>{project.title}</h3>
                        <h4>{project.projectType}</h4>
                        <img src={project.image} alt="" />
                        <p>{project.description}</p>
                        <a rel='noopener noreferrer' target='_blank' href={project.link}>Get the Source Code</a>
                    </div>
                ))}
            </div>
            <button className='return-button' onClick={() => navigate('/')}>Return to Home Page</button>
        </section>
    );
}

export default Projects;