import '../css/Projects.css';

interface ProjectElements{
    projectImage:string;
    title:string;
    description:string;
    projectType:string;
    link:string;
    currentState:string;
    textLink:string;
}

function Projects({ projects }: { projects: ProjectElements[] }) {

    return (
        <section className='main-container'>
            <h2>My Projects:</h2>
            <div className="project-container">
                {projects.map((project, index) => (
                    <div className="card-projects" key={ index }>
                        <h3>{project.title}</h3>
                        <h4>{project.projectType}</h4>
                        <h4>Current State: {project.currentState} </h4>
                        <img className="projects-video" src={project.projectImage}></img>
                        <p>{project.description}</p>
                        <a rel='noopener noreferrer' target='_blank' href={project.link}>{project.textLink}</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;