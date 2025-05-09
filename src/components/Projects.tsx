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

function Projects() {
    const projectsData: ProjectElements[] = [
        {
            title: "PeuCar Automotives Workshop Website",
            projectImage: "/assets/PeuCar-Website.png",
            projectType: "Freelance Web Application",
            link: "https://peucar-automotivos-ipira.vercel.app/",
            description: "A freelance project that i developed for a small car workshop bussines. It's a simple website that allows the user see about the services of the workshop and also sent a E-mail message directly to the owner on website.",
            currentState: "Completed",
            textLink: "Go to the Website",
        },
    ];

    return (
        <section className='main-container'>
            <h2>My Projects:</h2>
            <div className="project-container">
                {projectsData.map((project, index) => (
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